import os
from osgeo import gdal
from PIL import Image


def align_images(source_dir, reference_tif, input_tifs, output_dir, nodata_value=-9999):
    # Load the reference tif
    ref_ds = gdal.Open(reference_tif)
    ref_geotransform = ref_ds.GetGeoTransform()
    ref_width = ref_ds.RasterXSize
    ref_height = ref_ds.RasterYSize

    counter = 0  # FOR TESTING ONLY
    for image in input_tifs:
        # Load the tif
        image_ds = gdal.Open(source_dir + "\\" + image)
        image_geotransform = image_ds.GetGeoTransform()

        # Create an output image with NoData value
        file_name_no_ext, file_ext = os.path.splitext(image)
        output_file = f"{file_name_no_ext}_centered{file_ext}"
        driver = gdal.GetDriverByName("GTiff")
        out_ds = driver.Create(output_dir + "\\" + output_file, ref_width, ref_height, image_ds.RasterCount, image_ds.GetRasterBand(1).DataType, options=['COMPRESS=LZW'])

        # Set the geotransform for the output image
        out_ds.SetGeoTransform(ref_geotransform)

        # Initialize the output image with NoData
        for i in range(1, image_ds.RasterCount + 1):
            out_band = out_ds.GetRasterBand(i)
            out_band.Fill(nodata_value)  # Fill with NoData value

        # Calculate the position to write the input image
        # Assuming the input image is aligned to the top-left corner of the reference
        offset_x = int((image_geotransform[0] - ref_geotransform[0]) / ref_geotransform[1])
        offset_y = int((image_geotransform[3] - ref_geotransform[3]) / ref_geotransform[5])

        # Write the image to the output image at the calculated position
        for i in range(1, image_ds.RasterCount + 1):
            band = image_ds.GetRasterBand(i)
            data = band.ReadAsArray()
            out_ds.GetRasterBand(i).WriteArray(data, offset_x, offset_y)

        # Clean up
        image_ds = None
        out_ds = None

        print(f"Processed {output_file}...")

        # FOR TESTING ONLY
        if counter > 100:
            break
        else:
            counter += 1

    ref_ds = None


def get_file_names_from_dir(input_dir, input_ext):
    image_names = []

    for file_name in os.listdir(input_dir):
        if file_name.endswith(input_ext):
            image_names.append(file_name)

    return image_names


gdal.UseExceptions()

# ---------------- Setup ---------------------

# Update source_directory and output_directory to appropriate folders on hard drive
source_directory = "E:\\OneDrive - Esri\\DX Projects\\active\\tifs and tfws\\"
output_directory = "E:\\OneDrive - Esri\\DX Projects\\active\\tifs and tfws\\reproject-center\\output_dir"

# Reference image should be an original image with the largets resolution
reference_image = source_directory + "\\" + "Alanta_0001.tif"

# -------------- End Setup -------------------

input_list = get_file_names_from_dir(source_directory, ".tif")

align_images(source_directory, reference_image, input_list, output_directory)

print("Complete")
