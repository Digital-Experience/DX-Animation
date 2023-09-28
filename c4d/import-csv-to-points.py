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

class UserDialog(c4d.gui.GeDialog):
    ID_FILENAME = 1002
    ID_BUTTON = 1004
    
    ID_GROUP = 10000
    
    def CreateLayout(self) -> bool:
        """Called by Cinema 4D to populate the dialog with gadgets.
        """
        # Set the title of the dialog
        self.SetTitle("Import CSV to Points")
        
        # Open a containter to hold other elemetns
        self.GroupBegin(id=UserDialog.ID_GROUP, flags=c4d.BFH_SCALEFIT, cols=1)
        self.GroupSpace(spacex=5, spacey=5)
        
        # Select folder
        flags: c4d.BaseContainer = c4d.BaseContainer()
        flags[c4d.FILENAME_DIRECTORY] = True
        self.AddCustomGui(id=UserDialog.ID_FILENAME, pluginid=c4d.CUSTOMGUI_FILENAME, name="Path", flags=c4d.BFH_SCALEFIT, minw=0, minh=0, customdata=flags)
        
        # Add a buttn
        self.AddButton(id=UserDialog.ID_BUTTON, flags=c4d.BFH_SCALEFIT, name="Run")
        
        # Close the layout group
        self.GroupEnd()
        
        return super().CreateLayout()
    
    
    def InitValues(self) -> bool:
        """Called by Cinema 4D to initialize the layout"""
        self.SetFilename(UserDialog.ID_FILENAME, "")
        return super().InitValues()
    
    @staticmethod
    def ReadFile(filepath: str) -> str:
        """Custom static function to read the content of a file into a string"""
        if not os.path.exists(filename):
            raise OSError("Could nto access file!")
        
        try:
            with open(filepath, mode='rt') as f:
                return csv.DictReader(f, delimiter=',')
        
        except Exception as e:
            raise OSError(f"Could not access file {filepath}.")
        
    
    def Command(self, mid: int, msg: c4d.BaseContainer) -> bool:
        """Called by Cinema 4D when the user interacts with a gadget in the dialog"""
        # The "Run" button has been pressed
        if mid == UserDialog.ID_BUTTON:
            path = self.GetFilename(UserDialog.ID_FILENAME)
            ext = ('.csv')
            
            if path:
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
                self.Close()
            
            else:
                c4d.gui.MessageDialog("Please select a folder first.")
            
        return super().Command(mid, msg)


def main() -> None:
    """ Opens the dialog. """
    
    # Instantiate the dialog
    dialog = UserDialog()
    # Open the dialog in modal mode
    dialog.Open(dlgtype=c4d.DLG_TYPE_MODAL_RESIZEABLE, defaultw=400, xpos=-2, ypos=-2)


if __name__ == '__main__':
    main()