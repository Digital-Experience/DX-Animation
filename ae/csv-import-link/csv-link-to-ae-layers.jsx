
// load csv
// define data format, ie rows / cols
// loop over layers in comp
//      match row/column header to layer name
//      iterate over the time field row/col
//          apply keyfames at time with value


// include cs library?

// the proejct that is currently loaded
var proj = app.project;

// active comp
var comp = proj.activeItem;
$.writeln("Composition name is: " + comp.name);

// read CSV file
var csvFile = File("C:/Users/rich7829/Downloads/gamma import v01.csv");
var csvData = [];

csvFile.open("r");
do {
    csvData.push(csvFile.readln());
    } while(!csvFile.eof);

csvFile.close;

app.beginUndoGroup("Read and process CSV file");

// create array of selected layers
var selectedLayers = comp.selectedLayers;
// num of selected layers
var selectedArrayLength = selectedLayers.length;
// ceate array of frame headers
var frameArray = csvData[0].split(",");
// 
var compDuration = comp.duration;
var compFrameDuration = comp.frameDuration;

// iterate through all selecte layers
for (var i = 0; i < selectedArrayLength; i++) {
    // read layer name
    var name = selectedLayers[i].name;
    // split name
    var nameSplit = name.split(" ");
    // get id from name
    var id = nameSplit[0];
    
    // iterate through the csv and find matching row
    for (var x = 1; x < csvData.length; x++) {
        row = csvData[x].split(",");
        
        if (row[0] == id) {
            // add glow effect
            selectedLayers[i].property("Effects").addProperty("uni.Glow");

            // iterate over cols in this row
            for (var r = 1; r < row.length; r++){
                // add a keyframe at frame num with value from row[cell]
                var timeToAdd = frameArray[r] * compFrameDuration;
                // alert(frameArray[r] + "/" + timeToAdd + ": " + row[r]);
                
                selectedLayers[i].effect("uni.Glow")("Gamma").setValueAtTime(timeToAdd, row[r]); // seconds, value
            }
            
        }
    }
}



app.endUndoGroup();