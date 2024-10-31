
import arcpy
from datetime import datetime, timedelta


city_array =["Houston"]
export_cell_size = 0.001

year = 1900
month = 1

date = datetime(1900, 1, 1, 0, 0, 0)
stop_date = datetime(1900, 1, 7, 0, 0, 0)


for city in city_array:
    while date < stop_date:
        
        new_layer_name = f"{city}_{date.day}d_{date.hour}h_{date.minute}m"
        
        print()
        print(f"Processing... {new_layer_name}")

        arcpy.na.MakeServiceAreaAnalysisLayer(
                network_data_source="https://www.arcgis.com/",
                layer_name=new_layer_name,
                travel_mode="Driving Time",
                travel_direction="FROM_FACILITIES",
                cutoffs=[15,30,45],
                time_of_day=datetime.datetime(year, month, date.day, date.hour, date.minute, 0),
                time_zone="LOCAL_TIME_AT_LOCATIONS",
                output_type="POLYGONS",
                polygon_detail="STANDARD",
                geometry_at_overlaps="OVERLAP",
                geometry_at_cutoffs="RINGS",
                polygon_trim_distance="100 Meters",
                exclude_sources_from_polygon_generation=None,
                accumulate_attributes=None,
                ignore_invalid_locations="SKIP"
            )
        
        print(f"Created Service Area Analysis Layer for {new_layer_name}")
        
        arcpy.na.AddLocations( 
            in_network_analysis_layer=new_layer_name,
            sub_layer="Facilities",
            in_table=city,
            field_mappings="Name # #;CurbApproach # 0;Attr_Minutes # 0;Attr_TimeAt1KPH # 0;Attr_TravelTime # 0;Attr_TruckMinutes # 0;Attr_TruckTravelTime # 0;Attr_WalkTime # 0;Attr_Kilometers # 0;Attr_Miles # 0;Breaks_Minutes # #;Breaks_TimeAt1KPH # #;Breaks_TravelTime # #;Breaks_TruckMinutes # #;Breaks_TruckTravelTime # #;Breaks_WalkTime # #;Breaks_Kilometers # #;Breaks_Miles # #",
            search_tolerance="20000 Meters",
            sort_field=None,
            search_criteria="main.Routing_Streets SHAPE",
            match_type="MATCH_TO_CLOSEST",
            append="APPEND",
            snap_to_position_along_network="NO_SNAP",
            snap_offset="5 Meters",
            exclude_restricted_elements="EXCLUDE",
            search_query=None,
            allow_auto_relocate="ALLOW"
        )

        print(f"Added Locations to {new_layer_name}")

        arcpy.na.Solve( 
            in_network_analysis_layer=new_layer_name,
            ignore_invalids="SKIP",
            terminate_on_solve_error="TERMINATE",
            simplification_tolerance=None,
            overrides=""
        )

        print(f"Solved {new_layer_name}")

        polygonLayer = new_layer_name + "\Polygons"

        arcpy.conversion.FeatureToRaster( 
            in_features=polygonLayer,
            field="ToBreak",
        
            out_raster=f"E:\OneDrive - Esri\DX Projects\\active\\networkanalysis\\rasters\\{city}_{date.day}_{date.hour}_{date.minute}.tif",
            cell_size=export_cell_size
        )

        print(f"Exported {new_layer_name}.tif to raster")

        date += timedelta(minutes=4)

    