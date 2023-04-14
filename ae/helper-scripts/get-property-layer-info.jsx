var fx, log, proj, curComp, folderLoc, selections, selectionsLength, curSelection, propData, headerName, layerName;
fx = new Array();
log = new Array();
proj = app.project;
curComp = proj.activeItem;
folderLoc = Folder.selectDialog("Please select folder to save to.");

if (curComp instanceof CompItem) {
    selections = collectSelections(curComp);
    selectionsLength = selections.length;

    for (var s=0; s < selectionsLength; s++) {
        fx.length = 0;
        curSelection = selections[s];
        propData = propRecurse(curSelection, "", fx);

        if (propData != null) {
             headerName = curSelection.name;
             writeDoc(curSelection.name + "\t" + curSelection.matchName + "\r\r" + propData, headerName, folderLoc);
        } else {
            layerName = grabParentLayer(curSelection);
            if (layerName == null) {
                layerName = curSelection.name;
            }
            log[log.length] = layerName + "_" + curSelection.name + "_" + curSelection.propertyIndex;
        }
    }

    if (log.length > 0) {
        alert("The following selections had no sub properties.\r\rLegend: \"Layer_PropName_Index\"\r\r" + log.toString().replace(new RegExp(",", "g"), "\r"));
    }
    writeLn("Process complete.");
}

function collectSelections(compInput) {
    try {
        var myCollection, myLayers, myLayersLength, myProperties, myPropertiesLength, curProp, curLayer;
        myCollection = new Array();
        myLayers = compInput.selectedLayers;
        myLayersLength = myLayers.length;
        myProperties = compInput.selectedProperties;
        myPropertiesLength = myProperties.length;

        for(var p=0; p < myPropertiesLength; p++) {
            curProp = myProperties[p];
            myCollection.push(curProp);
        }

        for (var l=0; l < myLayersLength; l++) {
            curLayer = myLayers[l];
            if(curLayer.selectedProperties == 0) {
                myCollection.push(curLayer);
            }
        }

        return myCollection;

    } catch(err) {alert(err.line.toString() + "\r" + err.toString());}
}

function propRecurse(a, indent, fx) {
    try {
        var propLength = a.numProperties;
        for(var l=1; l < propLength; l++) {
            fx.push(indent + "(" + a.property(l).propertyIndex + ") " + a.property(l).name + "\t" + a.property(l).matchName);
            if(a.property(l).numProperties > 0) {
                propRecurse(a.property(l), indent + "\t", fx)
            }
        }
        if(fx.length > 0) {
            var j = fx.join("----");
            var r = j.replace(new RegExp("----", "g"), "\r");
            
            return r;
        } else {
            return null;
        }
    } catch(err) {alert(err.line.toString() + "\r" + err.toString());}
}

function writeDoc(contents, fileName, folderLocation) {
    try {
        var slash, finalName, doc, inc, fileSuffix;
        fileSuffix = "_PropData.txt";
        slash = (osCheck() == "PC") ? "\\" : "/";
        if(folderLocation == null) {
            folderLocation = "~" + slash + "Desktop";
        }
        finalName = fileName + fileSuffix;
        doc = new File(folderLocation.toString() + slash + finalName);
        if(!doc.exists) {
            doc.open("w");
            doc.write(contents);
            doc.close();
        } else {
            inc = suffixInc(fileName);
            writeDoc(contents, inc, folderLocation);
        }

        if(doc.exists) {
            writeLn("File saved.");
        }
    } catch(err) {alert(err.line.toString() + "\r" + err.toString());}
}

function grabParentLayer(prop) {
    try {
        var result = null;
        if(prop != null) {
            if(prop.parentProperty == null) {
                result = prop.name;
            } else {
                grabParentLayer(prop.parentProperty);
            }
            return result;
        } else {
            return result;
        }
    } catch(err) {alert(err.line.toString() + "\r" + err.toString());}
}

function suffixInc(oldName) {
    try {
        var old = oldName.split("_");
        var oldLength = old.length;
        var tail = old[old.length-1];
        var newName;
        if(oldLength > 1 && isNaN(tail) == false) {
            for(var i=1; i<999; i++) {
                if(i > tail) {
                    old.spice(old.length-1);
                    newName = old.join("_").toString() + "_" + i.toString();
                    break;
                }
            }
        } else {
            return oldName + "_1";
        }

        return newName;
    } catch(err) {alert(err.line.toString() + "\r" + err.toString());}
}

function osCheck() {
    var userOS = null;
    var win = $.os.indexOf("Window");
    win != (-1) ? userOS = "PC" : userOS = "MAC";
    return userOS;
}