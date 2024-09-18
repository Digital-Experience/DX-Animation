import c4d, os
from c4d import documents, gui

"""
Split_RenderCam v1.0
Written by: Rich Spencer

This script takes the given project and splits it into multiple C4D files (one for each Render Camera).
The new C4D files are created in the "Queue" folder. When those files are added to the Render Queue,
they will automatically render to their appropriate "Render" folder.

Check the Console for positive feedback.

"""

def main():

    # Get Active Documant
    doc = c4d.documents.GetActiveDocument()

    # This section assumes that the given file structure already exists.
    # This could be automated, but wasn't as a saftey measure
    #
    #     Scene_Folder
    #              -- /Projects/<Current Project> 
    #              -- /Queue
    #              -- /Renders

    rootFolder = doc.GetDocumentPath().rpartition('/')[0]    
    shortDocName = doc.GetDocumentName().rpartition('.')[0]        
    queueFolderPath = os.path.join(rootFolder,"Queue")
    renderFolderPath = os.path.join(rootFolder,"Renders")

    # This is looking for an object called "Render_Cameras" in the Object Manager
    # If it finds it, it creates a list of all it's children (which should contain
    # nothing but the Render Cameras). If it cannot find "Render_Cameras"... it exists.
         
    if doc.SearchObject("Render_Cameras") is None:
        c4d.gui.MessageDialog('"Render_Cameras" not Found')
        return
    else:
        cameraFolder = doc.SearchObject("Render_Cameras")
        cameraChildren = cameraFolder.GetChildren()
        firstCam = cameraChildren[0]
        

    # This grabs the first Render Setting in the list which it assumes is the Master Setting.
    # The Master Setting should contain one Child Setting for each Render Camera.
    # All changes to render settings should be made in the Master Setting.
    
    masterRD = doc.GetFirstRenderData()
    firstRD = masterRD.GetDown()
        
    # Create Render and Camera Lists
    renderList = []
    cameraList = []
    
    for index in range(len(cameraChildren)):
        location = ""
        for i in range(index):
            location += ".GetNext()"

        renderList.append(eval("firstRD" + location))
        cameraList.append(eval("firstCam" + location))
        
    # Make sure that the number of Render Settings and Render Cameras match
    if None in renderList or len(renderList) != len(cameraList):
        c4d.gui.MessageDialog('Misconfigured Render Settings')        
        return

    # Begin Scene Export Loop 
    for index in range(len(cameraList)):
        renderLoc = renderList[index]
        cameraLoc = cameraList[index]
        
        # Select the indexed Render Setting and select corresponding Render Camera
        doc.SetActiveRenderData(renderLoc)
        doc.GetActiveBaseDraw().SetSceneCamera(cameraLoc)
   
        # This is where you can change settings per camera.
        # In this example we look for an object called "Special Instructions" and
        # check it's User Data to turn on/off the visibility of the Glasses Object 
        # via Xpresso on the "Drop" Camera.
        
        if doc.SearchObject("Special_Instructions"):
            udObject = doc.SearchObject("Special_Instructions")
            if cameraLoc[c4d.ID_BASELIST_NAME] == "Drop":
                udObject[c4d.ID_USERDATA,1] = 1
                print "Damn you look smart!"
            else:
                udObject[c4d.ID_USERDATA,1] = 0
                print "Just a dumb ol' Rabbit"
        else:
            print "No Special Instructions in this Scene"
        
        # Get Current Camera Name  
        shortDocNameCamera = shortDocName + "-" + cameraLoc[c4d.ID_BASELIST_NAME]

        # Create Queue File Paths and Render Folder Paths based on Current Camera if they don't exist
        queueProjectFolderPath = os.path.join(queueFolderPath,shortDocName)
        if os.access(queueProjectFolderPath, os.F_OK)==False:
            os.mkdir(queueProjectFolderPath)
            
        renderProjectFolderPath = os.path.join(renderFolderPath,shortDocName)        
        if os.access(renderProjectFolderPath, os.F_OK)==False:
            os.mkdir(renderProjectFolderPath)
            
        cameraFolderPath = os.path.join(renderProjectFolderPath,shortDocNameCamera)
        if os.access(cameraFolderPath, os.F_OK)==False:
            os.mkdir(cameraFolderPath)
            
        fullPath = os.path.join(cameraFolderPath, shortDocNameCamera)               

        # Set Render Paths based on Current Camera
        renderLoc[c4d.RDATA_PATH] = fullPath   
        renderLoc[c4d.RDATA_MULTIPASS_FILENAME] = fullPath
        
        # Export Queue Files
        saveFile = queueProjectFolderPath + "/" + shortDocNameCamera + ".c4d"
        
        if documents.SaveDocument(doc, saveFile, c4d.SAVEDOCUMENTFLAGS_DONTADDTORECENTLIST, c4d.FORMAT_C4DEXPORT):
            print "Document:", saveFile
            print "Render:", fullPath
            print "--"
        else:
            print "Export failed!"
    
    # Just to keep things light            
    print "Word!"
    
    c4d.EventAdd()                                   
    
if __name__=='__main__':
    main()