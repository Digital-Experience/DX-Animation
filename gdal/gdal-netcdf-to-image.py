# VARIABLE  DEFINITION                          RANGE VISUALIZED
# DUCMASS   Dust column mass density            0 – 25e-4
# BCCMASS   Black carbon column mass density    0 – 2e-5
# SSCMASS   Sea salt column mass density        0 – 4e-4

import os
from osgeo import gdal
from multiprocessing import Pool

gdal.UseExceptions()

directory = 'Z:/nasa_dl/'
output_dir = 'Z:/nasa_imgs/'

def gdal_translate_to_tif(filename):
    fn_dust = f'NETCDF:"{directory}{filename}":DUCMASS'
    fn_carbon = f'NETCDF:"{directory}{filename}":BCCMASS'
    fn_seasalt = f'NETCDF:"{directory}{filename}":SSCMASS'
    gdal_translate_options = gdal.TranslateOptions(width=3600, height=1800, resampleAlg='bilinear',
                                                   creationOptions=['COMPRESS=LZW'])
    # @todo: refactor to include variables as *args
    # dust
    dust_filename_split = filename.split('.')
    dust_tif_filename = '_'.join(dust_filename_split[3:5]) + '_dust' + '.tif'
    dust_tif_filepath = output_dir + 'tif/dust/' + dust_tif_filename

    gdal.Translate(destName=dust_tif_filepath, srcDS=gdal.Open(fn_dust), options=gdal_translate_options)

    # carbon
    carbon_filename_split = filename.split('.')
    carbon_tif_filename = '_'.join(carbon_filename_split[3:5]) + '_carbon' + '.tif'
    carbon_tif_filepath = output_dir + 'tif/carbon/' + carbon_tif_filename

    gdal.Translate(destName=carbon_tif_filepath, srcDS=gdal.Open(fn_carbon), options=gdal_translate_options)

    # seasalt
    seasalt_filename_split = filename.split('.')
    seasalt_tif_filename = '_'.join(seasalt_filename_split[3:5]) + '_seasalt' + '.tif'
    seasalt_tif_filepath = output_dir + 'tif/seasalt/' + seasalt_tif_filename

    gdal.Translate(destName=seasalt_tif_filepath, srcDS=gdal.Open(fn_seasalt), options=gdal_translate_options)

    print(dust_tif_filepath, carbon_tif_filepath, seasalt_tif_filepath)
    return dust_tif_filepath, carbon_tif_filepath, seasalt_tif_filepath

def gdal_tif_to_jpg(dust_tif_filepath, carbon_tif_filepath, seasalt_tif_filepath, filename):
    gdal_dem_options_dust = gdal.DEMProcessingOptions(colorFilename=f'{output_dir}rgb/dust25e-4.txt')
    gdal_dem_options_carbon = gdal.DEMProcessingOptions(colorFilename=f'{output_dir}rgb/carbon2e-5.txt')
    gdal_dem_options_seasalt = gdal.DEMProcessingOptions(colorFilename=f'{output_dir}rgb/salt4e-4.txt')

    # dust
    dust_filename_split = filename.split('.')
    dust_jpg_filename = '_'.join(dust_filename_split[3:5]) + '_dust' + '.jpg'
    dust_jpg_filepath = output_dir + 'jpg/dust/' + dust_jpg_filename

    gdal.DEMProcessing(destName=dust_jpg_filepath, srcDS=dust_tif_filepath, processing='color-relief', options=gdal_dem_options_dust)

    # carbon
    carbon_filename_split = filename.split('.')
    carbon_jpg_filename = '_'.join(carbon_filename_split[3:5]) + '_carbon' + '.jpg'
    carbon_jpg_filepath = output_dir + 'jpg/carbon/' + carbon_jpg_filename

    gdal.DEMProcessing(destName=carbon_jpg_filepath, srcDS=carbon_tif_filepath, processing='color-relief', options=gdal_dem_options_carbon)

    # sea salt
    seasalt_filename_split = filename.split('.')
    seasalt_jpg_filename = '_'.join(seasalt_filename_split[3:5]) + '_seasalt' + '.jpg'
    seasalt_jpg_filepath = output_dir + 'jpg/seasalt/' + seasalt_jpg_filename

    gdal.DEMProcessing(destName=seasalt_jpg_filepath, srcDS=seasalt_tif_filepath, processing='color-relief', options=gdal_dem_options_seasalt)

    print(dust_jpg_filepath, carbon_jpg_filepath, seasalt_jpg_filepath)


def multi_process(filename):
    dust_tif_path, carbon_tif_path, seasalt_tif_path = gdal_translate_to_tif(filename)
    gdal_tif_to_jpg(dust_tif_path, carbon_tif_path, seasalt_tif_path, filename)

def main():
    with Pool(processes=48) as pool:
        # iterate over files in that directory
        #for filename in sorted(os.listdir(directory)):
        for filename in pool.map(multi_process, sorted(os.listdir(directory))):
            print(f'     Starting {filename}')
            # f = os.path.join(directory, filename)
            # # checking if it is a file
            # # if os.path.isfile(f):
            # if f.endswith('.nc4'):
            #     pass


if __name__ == '__main__':
    main()
