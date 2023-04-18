// TODO
// - UI file selecter
// - UI select effect or property to add (text field to input effect NAME if dorpdown doesn't work)
// - UI select parametor to link to

var filePath, proj, comp, csvFile, csvData, selectedLayers, selectedArrayLength, frameArray, compDuration, compFrameDuration, progressCurrent, progressMax;
param = "";
csvData = [];
var param = "Please select an attribute.";
var expression = "";

// #region UI


/*
Code for Import https://scriptui.joonas.me — (Triple click to select): 
{"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"enabled":true,"varName":null,"windowType":"Dialog","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":false,"resizeable":false},"text":"Dialog","preferredSize":[0,0],"margins":16,"orientation":"column","spacing":10,"alignChildren":["center","top"]}},"item-1":{"id":1,"type":"TabbedPanel","parentId":0,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":10,"alignment":null,"selection":2}},"item-2":{"id":2,"type":"Tab","parentId":1,"style":{"enabled":true,"varName":null,"text":"CSV Import","orientation":"column","spacing":10,"alignChildren":["left","top"]}},"item-3":{"id":3,"type":"Tab","parentId":1,"style":{"enabled":true,"varName":null,"text":"Apply Expression","orientation":"column","spacing":10,"alignChildren":["left","top"]}},"item-4":{"id":4,"type":"StaticText","parentId":5,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"CSV File:","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-5":{"id":5,"type":"Group","parentId":8,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-6":{"id":6,"type":"StaticText","parentId":5,"style":{"enabled":true,"varName":"displayFilePath","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"//file/path/to/csv/file.csv","justify":"left","preferredSize":[250,0],"alignment":null,"helpTip":null}},"item-7":{"id":7,"type":"IconButton","parentId":5,"style":{"enabled":true,"varName":"buttonOpenCSVFile","text":"","preferredSize":[0,0],"creationProps":{"style":"toolbutton","toggle":false},"iconButtonStroke":false,"image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjAwRDg1RUYzRkFBMTFFOTk3MzFGMDEyRjUzNjA4NTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjAwRDg1RjAzRkFBMTFFOTk3MzFGMDEyRjUzNjA4NTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2MDBEODVFRDNGQUExMUU5OTczMUYwMTJGNTM2MDg1MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBEODVFRTNGQUExMUU5OTczMUYwMTJGNTM2MDg1MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhJ5d1kAAAIwSURBVHjarJQ9S1tRGMefnHvJktxC5TZxCVTikKUWYjpUY7+AFFpw76QObhbrN2h0qEPdmqlUnDqUFjcdNNS5taGTYjAmaBrsNYaCIUn7/1/OCZcQh4IP/OCc87zc87ycG5qbn5cB4oARMAqG9NkFOATH4Krfwe7b3wEPwTSYAck+/RH4CLbAd9AYFOgueApWbdsenpyYkAdjY3LPdX3lr3pdfhwcJL/u7y+32+0XOFoGX8Bv6kM6Nd7kGXifSCRkbnZWYrHYoJSlVqvJu3xeyuUytwz4iTdTWs90Vhnk1dLSjUEo1NGGtvTRvqJ0YaeZDm8SDod7X64jHSNcn+OMQhva0kfX01G6OzOsibkJg7zO5SS3siLVatWH6xzOTDDa0kc3ZcTWLU6ysEaUUmJZljSbTXmztuafcR2NRsVSqmdHn929PXZ2VJk5Md2huFi/XFz0HRGgRLjmmRuwC/gMKbklUXpi/TkJFpYp6XTuE5NmsAEBnwulx/4Iw9Yz6Ha70ul0xKRj0uRZBzoj2ofTfmiNZzJ/WJZKpZJ9lMlIJBLxSafT8mRqSuLxuDiOI+PYT2azEg909sPGBj+ax/az0g9wC2N/xolttVq99rp9DTBBaENb+uh3d8UbUeeB00aj8bxYLEoqlfJvddMTebu+bp7IAtgF1ybQNTgBPxHscaFQiF56iB0KyV/UhIU+LpVkZ3vbT8fzvDMdhI/2Mvhob/U3IlpRAN/A5v/82P4JMAC5N/hnHN2zDwAAAABJRU5ErkJggg=="],"alignment":null,"helpTip":null}},"item-8":{"id":8,"type":"Panel","parentId":2,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"1.","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-9":{"id":9,"type":"Panel","parentId":2,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"2.","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-10":{"id":10,"type":"Group","parentId":9,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-11":{"id":11,"type":"StaticText","parentId":10,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Select Layers in Comp","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-12":{"id":12,"type":"Panel","parentId":2,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"3.","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-13":{"id":13,"type":"Group","parentId":15,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["center","center"],"alignment":null}},"item-14":{"id":14,"type":"Button","parentId":13,"style":{"enabled":true,"varName":"buttonApply","text":"Apply","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-15":{"id":15,"type":"Panel","parentId":2,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"4.","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-16":{"id":16,"type":"StaticText","parentId":18,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Float Attribute Name: ","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-17":{"id":17,"type":"EditText","parentId":18,"style":{"enabled":true,"varName":"edittextAttribName","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"Attribute Name","justify":"left","preferredSize":[150,0],"alignment":null,"helpTip":null}},"item-18":{"id":18,"type":"Group","parentId":12,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}}},"order":[0,1,2,8,5,4,6,7,9,10,11,12,18,16,17,15,13,14,3],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"showDialog":true,"functionWrapper":false,"afterEffectsDockable":false,"itemReferenceList":"None"},"activeId":14}
*/ 

// DIALOG
// ======
var dialog = new Window("dialog"); 
    dialog.text = "Dialog"; 
    dialog.orientation = "column"; 
    dialog.alignChildren = ["center","top"]; 
    dialog.spacing = 10; 
    dialog.margins = 16; 

// TPANEL1
// =======
var tpanel1 = dialog.add("tabbedpanel", undefined, undefined, {name: "tpanel1"}); 
    tpanel1.alignChildren = "fill"; 
    tpanel1.preferredSize.width = 410.766; 
    tpanel1.margins = 0; 

// TAB1
// ====
var tab1 = tpanel1.add("tab", undefined, undefined, {name: "tab1"}); 
    tab1.text = "CSV Import"; 
    tab1.orientation = "column"; 
    tab1.alignChildren = ["left","top"]; 
    tab1.spacing = 10; 
    tab1.margins = 10;

// PANEL1
// ======
var panel1 = tab1.add("panel", undefined, undefined, {name: "panel1"}); 
    panel1.text = "1."; 
    panel1.orientation = "column"; 
    panel1.alignChildren = ["left","top"]; 
    panel1.spacing = 10; 
    panel1.margins = 10; 

// GROUP1
// ======
var group1 = panel1.add("group", undefined, {name: "group1"}); 
    group1.orientation = "row"; 
    group1.alignChildren = ["left","center"]; 
    group1.spacing = 10; 
    group1.margins = 0; 

var statictext1 = group1.add("statictext", undefined, undefined, {name: "statictext1"}); 
    statictext1.text = "CSV File:"; 

var displayFilePath = group1.add("statictext", undefined, undefined, {name: "displayFilePath"}); 
    displayFilePath.text = "Click the import button to load a CSV file"; 
    displayFilePath.preferredSize.width = 250; 

    var buttonOpenCSVFile = group1.add("button", undefined, undefined, {name: "buttonOpenCSVFile1"}); 
    buttonOpenCSVFile.text = "Import CSV"; 
    buttonOpenCSVFile.onClick = function() {
        // alert("test");
        importCSVFile();
    }
    

// PANEL2
// ======
var panel2 = tab1.add("panel", undefined, undefined, {name: "panel2"}); 
    panel2.text = "2."; 
    panel2.orientation = "column"; 
    panel2.alignChildren = ["left","top"]; 
    panel2.spacing = 10; 
    panel2.margins = 10; 

// GROUP2
// ======
var group2 = panel2.add("group", undefined, {name: "group2"}); 
    group2.orientation = "row"; 
    group2.alignChildren = ["left","center"]; 
    group2.spacing = 10; 
    group2.margins = 0; 

var statictext2 = group2.add("statictext", undefined, undefined, {name: "statictext2"}); 
    statictext2.text = "Select Layers in Comp"; 

// PANEL3
// ======
var panel3 = tab1.add("panel", undefined, undefined, {name: "panel3"}); 
    panel3.text = "3."; 
    panel3.orientation = "column"; 
    panel3.alignChildren = ["left","top"]; 
    panel3.spacing = 10; 
    panel3.margins = 10; 

// GROUP3
// ======
var group3 = panel3.add("group", undefined, {name: "group3"}); 
    group3.orientation = "row"; 
    group3.alignChildren = ["left","center"]; 
    group3.spacing = 10; 
    group3.margins = 0; 

var statictext3 = group3.add("statictext", undefined, undefined, {name: "statictext3"}); 
    statictext3.text = "Float Attribute Name: "; 

var edittextAttribName = group3.add('edittext {properties: {name: "edittextAttribName"}}'); 
    edittextAttribName.text = "Attribute Name"; 
    edittextAttribName.preferredSize.width = 150;

// PANEL4
// ======
var panel4 = tab1.add("panel", undefined, undefined, {name: "panel4"}); 
    panel4.text = "4."; 
    panel4.orientation = "column"; 
    panel4.alignChildren = ["left","top"]; 
    panel4.spacing = 10; 
    panel4.margins = 10; 

// GROUP4
// ======
var group4 = panel4.add("group", undefined, {name: "group4"}); 
    group4.orientation = "row"; 
    group4.alignChildren = ["center","center"]; 
    group4.spacing = 10; 
    group4.margins = 0; 

var buttonApply = group4.add("button", undefined, undefined, {name: "buttonApply"}); 
    buttonApply.text = "Apply"; 
    buttonApply.onClick = function() {
        applyDataToSelectedLayers();
    }


// TAB2
// ====
var tab2 = tpanel1.add("tab", undefined, undefined, {name: "tab2"}); 
    tab2.text = "Apply Expression"; 
    tab2.orientation = "column"; 
    tab2.alignChildren = ["left","top"]; 
    tab2.spacing = 10; 
    tab2.margins = 10; 

// TPANEL1
// =======
tpanel1.selection = tab2; 

// GROUP5
// ======
var group5 = tab2.add("group", undefined, {name: "group5"}); 
    group5.orientation = "row"; 
    group5.alignChildren = ["left","center"]; 
    group5.spacing = 10; 
    group5.margins = 0; 

var statictext4 = group5.add("statictext", undefined, undefined, {name: "statictext4"}); 
    statictext4.text = "Expression: "; 

var textboxExpression = group5.add("statictext", undefined, undefined, {name: "textboxExpression"}); 
    textboxExpression.text = expression; 

// GROUP6
// ======
var group6 = tab2.add("group", undefined, {name: "group6"}); 
    group6.orientation = "row"; 
    group6.alignChildren = ["left","center"]; 
    group6.spacing = 10; 
    group6.margins = 0; 

var statictext5 = group6.add("statictext", undefined, undefined, {name: "statictext5"}); 
    statictext5.text = "Effect / Parameter: "; 

var textboxParam = group6.add("statictext", undefined, undefined, {name: "textboxParam"}); 
    textboxParam.text = param; 

// GROUP7
// ======
var group7 = tab2.add("group", undefined, {name: "group7"}); 
    group7.orientation = "row"; 
    group7.alignChildren = ["left","center"]; 
    group7.spacing = 10; 
    group7.margins = 0; 

var buttonAddExpression = group7.add("button", undefined, undefined, {name: "buttonAddExpression"}); 
    buttonAddExpression.text = "Add Expression"; 
    buttonAddExpression.onClick = function () {
        addExpression();
    };


tpanel1.selection = 0;
dialog.show();

// #endregion


function importCSVFile() {
    app.beginUndoGroup("Read CSV file");

    csvFile = File.openDialog("Please select a CSV file to import.")
    
    csvFile.open("r");
    do {
        csvData.push(csvFile.readln());
        } while(!csvFile.eof);

    csvFile.close;

    displayFilePath.text = csvFile;

    app.endUndoGroup();
}

function applyDataToSelectedLayers() {
    // the proejct that is currently loaded
    proj = app.project;

    // active comp
    comp = proj.activeItem;
    $.writeln("Composition name is: " + comp.name);

    app.beginUndoGroup("Apply data to layers");

    // create array of selected layers
    selectedLayers = comp.selectedLayers;
    // num of selected layers
    selectedArrayLength = selectedLayers.length;
    // ceate array of frame headers
    frameArray = csvData[0].split(",");
    // 
    compDuration = comp.duration;
    compFrameDuration = comp.frameDuration;

    progress("Processing CSV...");
    progressMax = selectedArrayLength * frameArray.length;
    progress.set(progressMax);

    // iterate through all selecte layers
    for (var i = 0; i < selectedArrayLength; i++) {
        // read layer name
        var name = selectedLayers[i].name;
        // split name
        var nameSplit = name.split(" ");
        // get id from name
        var id = nameSplit[0];

        var effectPresent = hasEffect(selectedLayers[i], "Universe_Glow_Glow");
        // alert(effectPresent);

        progress.message(id)

        // iterate through the csv and find matching row
        for (var x = 1; x < csvData.length; x++) {
            row = csvData[x].split(",");
            
            if (row[0] == id) {
                // add slider effect
                var newSlider = selectedLayers[i].property("Effects").addProperty("ADBE Slider Control");
                newSlider.name = edittextAttribName.text;
                var sliderName = newSlider.name;

                if (!effectPresent) {
                    // add glow effect
                    selectedLayers[i].property("Effects").addProperty("uni.Glow");
                }

                // iterate over cols in this row
                for (var r = 1; r < row.length; r++){
                    // add a keyframe at frame num with value from row[cell]
                    var timeToAdd = frameArray[r] * compFrameDuration;
                    // alert(frameArray[r] + "/" + timeToAdd + ": " + row[r]);

                    selectedLayers[i].effect(sliderName)(1).setValueAtTime(timeToAdd, row[r]); // seconds, value
                    // newSlider(1).setValueAtTime(timeToAdd, row[r]); // seconds, value
                    
                    progress.increment();
                }
                
            }
        }
    }

    progress.close();

    app.endUndoGroup();

    dialog.update();

    alert("Completed adding CSV data to selected layers")
}


function addExpression() {
    progress("Processing CSV...");
    progressMax = selectedArrayLength * frameArray.length;
    progress.set(progressMax);

    app.beginUndoGroup("Apply Expression");

    var expression = "effect(\"" + edittextAttribName.text + "\")(\"Slider\")";

    // iterate through all selected layers
    for (var l = 0; l < selectedArrayLength; l++) {
        //alert("In expression loop");

        var effectPresent = hasEffect(selectedLayers[l], "Universe_Glow_Glow");
        if (effectPresent) {
            //alert(selectedLayers[l].name);
            param = edittextAttribName.text;
            selectedLayers[l].effect("uni.Glow")(param).expression = expression;
        }

        progress.increment();
    }
    progress.close();

    app.endUndoGroup();
}



function hasEffect(layer, effect) {
    var hasEffect = false;

    var effectsOnThisLayer = allEffectsOnLayer(layer);
    for (e=0; e < effectsOnThisLayer.length; e++) {
        // alert(effectsOnThisLayer[e].matchName);
        if (effectsOnThisLayer[e].matchName == effect) {
            hasEffect = true;
        }
    }

    return hasEffect;
}


function allEffectsOnLayer(layer) {
    if (layer !== undefined) {
        var effectsGroup = layer("ADBE Effect Parade");
        var effectsOnLayer = [];

        if (effectsGroup !== null) {
            for (var i = 1; i <= effectsGroup.numProperties; i++) {
                effectsOnLayer[effectsOnLayer.length] = effectsGroup.property(i);
            }
        }
        if (effectsOnLayer.length > 0) {
            return effectsOnLayer;
        } else {
            return [];
        }
    } else {
        return [];
    }
}


function progress(message) {
    var b, t, w;
    w = new Window("palette", "Progress", undefined, {
        closeButton: false
    });
    t = w.add("statictext", undefined, message);
    t.preferredSize = [450, -1];
    b = w.add("progressbar");
    b.preferredSize = [450, -1];
    progress.close = function () {
        w.close();
    };
    progress.increment = function () {
        b.value++;
    };
    progress.message = function () {
        t.text = message;
        w.update();
    };
    progress.set = function (steps) {
        b.value = 0;
        b.minvalue = 0;
        b.maxvalue = steps;
    };
    w.show();
    w.update();
}

