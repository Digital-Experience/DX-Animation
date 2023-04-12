// Visual Studio Code - https://code.visualstudio.com/Download
    // Extensions To Use:
        // ExtendScript Debugger (by Adobe)
        // Adobe Script Runner (by renderTom)

    // TypeScript types: https://github.com/aenhancers/Types-for-Adobe
    
// Guides
// After Effects Scripting Guide - https://ae-scripting.docsforadobe.dev/
// UI Reference Guide - https://fotozcech.cz/wp-content/uploads/2015/11/scriptui-2-8.pdf
// After Effects Scripting Guide - https://ae-scripting.docsforadobe.dev/
// Script UI builder - https://scriptui.joonas.me/

// UI
// There are 2 types of interface, floating and dockable.
// This is script is a floating window

var window = new Window("palette", "My Window", undefined);
window.orientation = "column";

var text = window.add("statictext", undefined, "This is my text")

var group = window.add("group", undefined, "");
group.orientation = "row";
var buttonOne = group.add("button", undefined, "Button 1");
var buttonTwo = group.add("button", undefined, "Button 2");

var array = ["Test 1", "Test 2", "Test 3"];

var dropdown = window.add("dropdownlist", undefined, array);
dropdown.selection = 0;
dropdown.size = [180, 25];

var panel = window.add("panel", undefined, "myPanel");
panel.orientation = "row";
var radio = panel.add("radiobutton", undefined, "Radio");
var checkbox = panel.add("checkbox", undefined, "Checkbox");

var textbox = window.add("edittext", undefined, "My Input");
var slider = window.add("slider", undefined, "");

dropdown.add("item", "My Extra Item");

window.center();
window.show();

buttonOne.onClick = function() {
    modifyLayers();
}

buttonTwo.onClick = function() {
    importAndAdd();
}

function modifyLayers() {
    if (app.project.activeItem === null || (!app.project.activeItem instanceof CompItem)) {
        alert("No composition selected!");
        return false;
    }

    app.beginUndoGroup("My Process");

    var composition = app.project.activeItem;
    var layer = composition.layer(1);

    layer.property("ADBE Transform Group").property("ADBE Position").setValue([256,256]);
    layer.property("ADBE Transform Group").property("ADBE Scale").setValue([50,50]);
    layer.property("ADBE Transform Group").property("ADBE Opacity").expression = 'wiggle(3,30)';

    composition.width = 500;
    composition.height = 1000;
    composition.name = "Renamed Comp";

    var myEffect = layer.Effects.addProperty("ADBE Exposure2");
    myEffect.property(3).setValue(2);
    app.endUndoGroup();
}

function importAndAdd() {
    var myVideoFile = File("C:/Users/rich7829/Downloads/Transformers The Movie 1986 Theme Song (Source).mp4");
    // alert(myVideoFile.exists);
    var videoItem = app.project.importFile(new ImportOptions(myVideoFile));

    for (var i = 0; i < 10; i++) {
        app.project.activeItem.layers.add(videoItem);
    }
}