"""

"""
__author__ = "Rich Spencer"
__copyright__ = "Copyright (C) 2023 Esri"
__version__ = "R2024"


from typing import Optional
import c4d
import csv
import os

doc: c4d.documents.BaseDocument  # The active document
op: Optional[c4d.BaseObject]  # The active object, None if unselected


# Point to a folder on disk
# Iterate over all csv's
#    iterate over each row
#        each row to a point(vector)
#    add object to scene with name

def main() -> None:
    
    path = "C:/Users/rich7829/Documents/GitHub/DX-Animation/c4d/"
    ext = ('.csv')

    for filename in os.listdir(path):
        if filename.endswith(ext):
            full_path = f'{path}/{filename}'
            
            with open(full_path, 'rt') as csv_file:
    
                content = csv.DictReader(csv_file, delimiter=',')
                points = []
                
                for i, row in enumerate(content):
                    try:
                        xPos = float(row["x"])
                        yPos = float(row["y"])
                        point = c4d.Vector(xPos, yPos, 0)    
                        points.append(point)    
                    
                    except:
                        print(f"Error while reading - {row}")
            
                polygon = c4d.PolygonObject(pcnt=len(points), vcnt=0)
                polygon.SetAllPoints(points)
                polygon.SetName(filename.strip(ext))
                polygon.Message(c4d.MSG_UPDATE)
                
                doc.InsertObject(polygon)
                doc.SetActiveObject(polygon, c4d.SELECTION_NEW)

    
    doc.SetMode(c4d.Mpoints)
    c4d.EventAdd()



if __name__ == '__main__':
    main()