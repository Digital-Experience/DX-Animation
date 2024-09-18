"""
Incremental Render

Copyright: Rich Spencer
Written for CINEMA 4D R13
Modified by: Rich Spencer

Name-US:Incremental Render
Description-US: This script allows you to automatically set the name, path, and properties of the image to be rendered.

"""
import c4d
import os
from c4d import gui

def main():

    # Get Basic Variables
    renderFolder = "+renders"                                             # Enter desired render folder name. Leave blank for none

    doc = c4d.documents.GetActiveDocument()                               # Get the active document
    shortName = doc.GetDocumentName().rpartition('.')[0]                  # Get the active document's short name
    docParent = doc.GetDocumentPath()                                     # Get the path of the active document's parent folder
    rd = doc.GetActiveRenderData()                                        # Get active renderdata

    # Error Checking
    if docParent == "":                                                   # If document path doesn't exist enter Save Loop
      if c4d.gui.QuestionDialog("Save you're file please") == False:      # Request the user save. Give them the option to refuse 
        c4d.gui.MessageDialog("You're a jerk.")                           # Curse them if they do
        return                                                            # Exit the script
      c4d.CallCommand(12098)                                              # Otherwise call the Save Dialog
      docParent = doc.GetDocumentPath()                                   # Get the path of the active document's parent folder
      c4d.EventAdd()  
     
    # Check/Create Destination Folders
    renderFolderPath = os.path.join(docParent,renderFolder)               # Set render folder path
    sequenceFolderPath = os.path.join(docParent,renderFolder,shortName)   # Set project folder path (inside render folder)
    fullPath = os.path.join(sequenceFolderPath, shortName)                # Set full render path for the save dialog

    if os.access(renderFolderPath, os.F_OK)==False:                       # Check to see if render folder path already exists
      os.mkdir(renderFolderPath)                                          # Make the directory using the renderFolderPath variable 
    if os.access(sequenceFolderPath, os.F_OK)==False:                     # Check to see if sequence folder path already exists
      os.mkdir(sequenceFolderPath)                                        # Make the directory using the sequenceFolderPath variable 

    # Set Save Properties
    rd[c4d.RDATA_PATH] = fullPath                                         # Render Save File Path
    rd[c4d.RDATA_FORMAT] = c4d.FILTER_PNG                                 # Render File Type
    rd[c4d.RDATA_FORMATDEPTH] = 1                                         # Render Bit Depth (8,16,32)
    rd[c4d.RDATA_ALPHACHANNEL] = 1                                        # Render Enable Alpha
    
    rd[c4d.RDATA_MULTIPASS_FILENAME] = fullPath                           # Multipass Save File Path
    rd[c4d.RDATA_MULTIPASS_SAVEFORMAT] = c4d.FILTER_PNG                   # MultiPass File Type
    rd[c4d.RDATA_MULTIPASS_SAVEDEPTH] = 1                                 # MultiPass Depth (8,16,32)

    # VERBOSE
    c4d.CallCommand(13957)                                                # Clear Console
    
    print "RENDER FOLDER: %s" % renderFolder
    print " "
    print "C4D DOCUMENT: %s" % doc
    print "C4D RENDER DATA: %s" % rd
    print " " 
    print "DOCUMENT'S NAME: %s" % shortName
    print "DOCUMENT'S PARENT: %s" % docParent
    print " "
    print "RENDER FOLDER PATH: %s" % renderFolderPath
    print "SEQUENCE FOLDER PATH: %s" % sequenceFolderPath    
    print "FULL PATH: %s" % fullPath

    c4d.EventAdd()                                                        # Refresh c4d
    
if __name__=='__main__':
    main()