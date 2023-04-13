
/*
Code for Import https://scriptui.joonas.me — (Triple click to select): 
{"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"enabled":true,"varName":null,"windowType":"Dialog","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":false,"resizeable":true},"text":"GIS Import and Link","preferredSize":[0,0],"margins":16,"orientation":"column","spacing":10,"alignChildren":["center","top"]}},"item-4":{"id":4,"type":"TabbedPanel","parentId":0,"style":{"enabled":true,"varName":null,"preferredSize":[400,0],"margins":10,"alignment":null,"selection":7}},"item-5":{"id":5,"type":"Tab","parentId":4,"style":{"enabled":true,"varName":"","text":"Load","orientation":"column","spacing":10,"alignChildren":["left","top"]}},"item-6":{"id":6,"type":"Tab","parentId":4,"style":{"enabled":true,"varName":"","text":"Data","orientation":"column","spacing":10,"alignChildren":["left","top"]}},"item-7":{"id":7,"type":"Tab","parentId":4,"style":{"enabled":true,"varName":null,"text":"Animation","orientation":"column","spacing":10,"alignChildren":["left","top"]}},"item-8":{"id":8,"type":"Tab","parentId":4,"style":{"enabled":true,"varName":null,"text":"Export","orientation":"column","spacing":10,"alignChildren":["left","top"]}},"item-9":{"id":9,"type":"Progressbar","parentId":5,"style":{"enabled":true,"varName":null,"preferredSize":[400,4],"alignment":"center","helpTip":null}},"item-10":{"id":10,"type":"StaticText","parentId":5,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Select CSV","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-11":{"id":11,"type":"Group","parentId":5,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-12":{"id":12,"type":"StaticText","parentId":11,"style":{"enabled":false,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"c:\\filepath\\another\\path\\filename.ext","justify":"left","preferredSize":[300,0],"alignment":null,"helpTip":null}},"item-14":{"id":14,"type":"Button","parentId":5,"style":{"enabled":true,"varName":null,"text":"IMPORT","justify":"center","preferredSize":[0,0],"alignment":"center","helpTip":null}},"item-15":{"id":15,"type":"StaticText","parentId":16,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Percent Complete:","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-16":{"id":16,"type":"Group","parentId":5,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-17":{"id":17,"type":"StaticText","parentId":16,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"54%","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-18":{"id":18,"type":"IconButton","parentId":11,"style":{"enabled":true,"varName":null,"text":"FolderIcon","preferredSize":[0,0],"creationProps":{"style":"toolbutton","toggle":false},"iconButtonStroke":false,"image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjAwRDg1RUYzRkFBMTFFOTk3MzFGMDEyRjUzNjA4NTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjAwRDg1RjAzRkFBMTFFOTk3MzFGMDEyRjUzNjA4NTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2MDBEODVFRDNGQUExMUU5OTczMUYwMTJGNTM2MDg1MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2MDBEODVFRTNGQUExMUU5OTczMUYwMTJGNTM2MDg1MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhJ5d1kAAAIwSURBVHjarJQ9S1tRGMefnHvJktxC5TZxCVTikKUWYjpUY7+AFFpw76QObhbrN2h0qEPdmqlUnDqUFjcdNNS5taGTYjAmaBrsNYaCIUn7/1/OCZcQh4IP/OCc87zc87ycG5qbn5cB4oARMAqG9NkFOATH4Krfwe7b3wEPwTSYAck+/RH4CLbAd9AYFOgueApWbdsenpyYkAdjY3LPdX3lr3pdfhwcJL/u7y+32+0XOFoGX8Bv6kM6Nd7kGXifSCRkbnZWYrHYoJSlVqvJu3xeyuUytwz4iTdTWs90Vhnk1dLSjUEo1NGGtvTRvqJ0YaeZDm8SDod7X64jHSNcn+OMQhva0kfX01G6OzOsibkJg7zO5SS3siLVatWH6xzOTDDa0kc3ZcTWLU6ysEaUUmJZljSbTXmztuafcR2NRsVSqmdHn929PXZ2VJk5Md2huFi/XFz0HRGgRLjmmRuwC/gMKbklUXpi/TkJFpYp6XTuE5NmsAEBnwulx/4Iw9Yz6Ha70ul0xKRj0uRZBzoj2ofTfmiNZzJ/WJZKpZJ9lMlIJBLxSafT8mRqSuLxuDiOI+PYT2azEg909sPGBj+ax/az0g9wC2N/xolttVq99rp9DTBBaENb+uh3d8UbUeeB00aj8bxYLEoqlfJvddMTebu+bp7IAtgF1ybQNTgBPxHscaFQiF56iB0KyV/UhIU+LpVkZ3vbT8fzvDMdhI/2Mvhob/U3IlpRAN/A5v/82P4JMAC5N/hnHN2zDwAAAABJRU5ErkJggg=="],"alignment":null,"helpTip":null}},"item-19":{"id":19,"type":"StaticText","parentId":16,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"2.4MB / 4.9MB","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-21":{"id":21,"type":"StaticText","parentId":25,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Data from:","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-23":{"id":23,"type":"Group","parentId":6,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-24":{"id":24,"type":"DropDownList","parentId":25,"style":{"enabled":true,"varName":null,"text":"DropDownList","listItems":"Row, -, Column","preferredSize":[0,0],"alignment":null,"selection":2,"helpTip":null}},"item-25":{"id":25,"type":"Group","parentId":29,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-29":{"id":29,"type":"Panel","parentId":23,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Data","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-30":{"id":30,"type":"StaticText","parentId":31,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Header line: ","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-31":{"id":31,"type":"Group","parentId":29,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-32":{"id":32,"type":"DropDownList","parentId":31,"style":{"enabled":true,"varName":null,"text":"DropDownList","listItems":"Line 1, -, Line 2, -, Line 3, -, Line 4, -, Line 5","preferredSize":[0,0],"alignment":null,"selection":0,"helpTip":null}},"item-33":{"id":33,"type":"Panel","parentId":23,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Time","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-34":{"id":34,"type":"Group","parentId":33,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-35":{"id":35,"type":"StaticText","parentId":34,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Time from:","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-36":{"id":36,"type":"DropDownList","parentId":34,"style":{"enabled":true,"varName":null,"text":"DropDownList","listItems":"Row, -, Column","preferredSize":[0,0],"alignment":null,"selection":0,"helpTip":null}},"item-37":{"id":37,"type":"Group","parentId":33,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-38":{"id":38,"type":"StaticText","parentId":37,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Header line: ","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-39":{"id":39,"type":"DropDownList","parentId":37,"style":{"enabled":true,"varName":null,"text":"DropDownList","listItems":"Line 1, -, Line 2, -, Line 3, -, Line 4, -, Line 5","preferredSize":[0,0],"alignment":null,"selection":0,"helpTip":null}},"item-42":{"id":42,"type":"Checkbox","parentId":44,"style":{"enabled":true,"varName":null,"text":"Activate","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":true}},"item-43":{"id":43,"type":"Group","parentId":47,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-44":{"id":44,"type":"Panel","parentId":6,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Remap Data","preferredSize":[400,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-45":{"id":45,"type":"StaticText","parentId":43,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Original Max: ","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-47":{"id":47,"type":"Group","parentId":44,"style":{"enabled":true,"varName":null,"preferredSize":[350,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["center","center"],"alignment":null}},"item-48":{"id":48,"type":"Group","parentId":47,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-49":{"id":49,"type":"StaticText","parentId":48,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Original Min: ","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-52":{"id":52,"type":"Group","parentId":44,"style":{"enabled":true,"varName":null,"preferredSize":[350,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["center","center"],"alignment":null}},"item-53":{"id":53,"type":"Group","parentId":52,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-54":{"id":54,"type":"StaticText","parentId":53,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Original Min: ","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-55":{"id":55,"type":"StaticText","parentId":53,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"0.4564","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-57":{"id":57,"type":"Group","parentId":52,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-58":{"id":58,"type":"StaticText","parentId":57,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Original Max: ","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-59":{"id":59,"type":"StaticText","parentId":57,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"702.45","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-60":{"id":60,"type":"EditText","parentId":48,"style":{"enabled":true,"varName":null,"creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"New min","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-61":{"id":61,"type":"EditText","parentId":43,"style":{"enabled":true,"varName":null,"creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"New Max","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-62":{"id":62,"type":"DropDownList","parentId":64,"style":{"enabled":true,"varName":null,"text":"DropDownList","listItems":"Linear, -, Smooth, -, Logorythmic","preferredSize":[0,0],"alignment":null,"selection":0,"helpTip":null}},"item-63":{"id":63,"type":"StaticText","parentId":64,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Remap Curve:","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-64":{"id":64,"type":"Group","parentId":44,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-65":{"id":65,"type":"Image","parentId":66,"style":{"enabled":true,"varName":null,"image":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQdJREFUeNrslv0NgyAQxcV0AEZwBEdoN3AEu0E7iSN0hW6gG9gRuoFuQB8NtGg9QSL4R33JixcUf3zcEZiAkg2UJhvpYMRX+BGYl8PVOxJfHV164rsc5j5UydCwdEGnAu4QtnCH+OY7AOcZ410moeJXVegZFzAn2jfJah4afF/Yvg6YMfbE4wz3RnOjSjBcchnfcpUgWbRyUjPv4UatgDmYWtZ3tORSdVzDcrUWwVPLjyu4tEBzI8Pd4dQeq5NJq5zY61ZMq6Pg5h5PgkfQAdwCnYXPggmo1sUBSsJJsAXqowGcArcijD5wE8wiXX3kiXfSmR/z6jMuvYT93WVvB+/gHbyaXgIMAHWCmD3KjfSwAAAAAElFTkSuQmCC"],"alignment":null,"helpTip":null}},"item-66":{"id":66,"type":"Group","parentId":64,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["right","center"],"alignment":null}},"item-67":{"id":67,"type":"StaticText","parentId":68,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Info and status messages will appear here.","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-68":{"id":68,"type":"Group","parentId":0,"style":{"enabled":false,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-69":{"id":69,"type":"Group","parentId":8,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-70":{"id":70,"type":"Checkbox","parentId":69,"style":{"enabled":true,"varName":null,"text":"CSV Imported Successfully","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":true}},"item-71":{"id":71,"type":"Checkbox","parentId":69,"style":{"enabled":true,"varName":null,"text":"Target Parameter(s) Selected Successfully","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":true}},"item-72":{"id":72,"type":"Checkbox","parentId":69,"style":{"enabled":true,"varName":null,"text":"Headers Selected Successfully","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":true}},"item-73":{"id":73,"type":"Checkbox","parentId":69,"style":{"enabled":true,"varName":null,"text":"Data Remamp Successfully","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":true}},"item-74":{"id":74,"type":"Button","parentId":75,"style":{"enabled":true,"varName":null,"text":"START","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-75":{"id":75,"type":"Group","parentId":8,"style":{"enabled":true,"varName":null,"preferredSize":[350,150],"margins":0,"orientation":"row","spacing":10,"alignChildren":["center","bottom"],"alignment":null}},"item-76":{"id":76,"type":"DropDownList","parentId":78,"style":{"enabled":true,"varName":null,"text":"DropDownList","listItems":"Existing Parameter, -, Add New Effect","preferredSize":[0,0],"alignment":null,"selection":0,"helpTip":null}},"item-77":{"id":77,"type":"StaticText","parentId":78,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Method:","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-78":{"id":78,"type":"Group","parentId":7,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-79":{"id":79,"type":"Group","parentId":7,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-80":{"id":80,"type":"ListBox","parentId":79,"style":{"enabled":true,"varName":null,"creationProps":{"multiselect":false,"numberOfColumns":1,"columnWidths":"[]","columnTitles":"[]","showHeaders":false},"listItems":"Content will change, based on what is selected above.","preferredSize":[0,0],"alignment":null,"helpTip":null}}},"order":[0,4,5,10,11,12,18,14,16,15,19,17,9,6,23,33,34,35,36,37,38,39,29,25,21,24,31,30,32,44,42,52,53,54,55,57,58,59,47,48,49,60,43,45,61,64,63,62,66,65,7,78,77,76,79,80,8,69,70,72,73,71,75,74,68,67],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"showDialog":true,"functionWrapper":false,"afterEffectsDockable":false,"itemReferenceList":"none"},"activeId":80}
*/ 

// DIALOG
// ======
var dialog = new Window("dialog", undefined, undefined, {resizeable: true}); 
    dialog.text = "GIS Import and Link"; 
    dialog.orientation = "column"; 
    dialog.alignChildren = ["center","top"]; 
    dialog.spacing = 10; 
    dialog.margins = 16; 

// TPANEL1
// =======
var tpanel1 = dialog.add("tabbedpanel", undefined, undefined, {name: "tpanel1"}); 
    tpanel1.alignChildren = "fill"; 
    tpanel1.preferredSize.width = 400; 
    tpanel1.margins = 0; 

// TAB1
// ====
var tab1 = tpanel1.add("tab", undefined, undefined, {name: "tab1"}); 
    tab1.text = "Load"; 
    tab1.orientation = "column"; 
    tab1.alignChildren = ["left","top"]; 
    tab1.spacing = 10; 
    tab1.margins = 10; 

var statictext1 = tab1.add("statictext", undefined, undefined, {name: "statictext1"}); 
    statictext1.text = "Select CSV"; 

// GROUP1
// ======
var group1 = tab1.add("group", undefined, {name: "group1"}); 
    group1.orientation = "row"; 
    group1.alignChildren = ["left","center"]; 
    group1.spacing = 10; 
    group1.margins = 0; 

var statictext2 = group1.add("statictext", undefined, undefined, {name: "statictext2"}); 
    statictext2.enabled = false; 
    statictext2.text = "c:/filepath/another/path/filename.ext"; 
    statictext2.preferredSize.width = 300; 

var iconbutton1_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%12%00%00%00%12%08%06%00%00%00V%C3%8E%C2%8EW%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%03(iTXtXML%3Acom.adobe.xmp%00%00%00%00%00%3C%3Fxpacket%20begin%3D%22%C3%AF%C2%BB%C2%BF%22%20id%3D%22W5M0MpCehiHzreSzNTczkc9d%22%3F%3E%20%3Cx%3Axmpmeta%20xmlns%3Ax%3D%22adobe%3Ans%3Ameta%2F%22%20x%3Axmptk%3D%22Adobe%20XMP%20Core%205.6-c145%2079.163499%2C%202018%2F08%2F13-16%3A40%3A22%20%20%20%20%20%20%20%20%22%3E%20%3Crdf%3ARDF%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%20%3Crdf%3ADescription%20rdf%3Aabout%3D%22%22%20xmlns%3Axmp%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2F%22%20xmlns%3AxmpMM%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2Fmm%2F%22%20xmlns%3AstRef%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2FsType%2FResourceRef%23%22%20xmp%3ACreatorTool%3D%22Adobe%20Photoshop%20CC%202019%20(Macintosh)%22%20xmpMM%3AInstanceID%3D%22xmp.iid%3A600D85EF3FAA11E99731F012F5360853%22%20xmpMM%3ADocumentID%3D%22xmp.did%3A600D85F03FAA11E99731F012F5360853%22%3E%20%3CxmpMM%3ADerivedFrom%20stRef%3AinstanceID%3D%22xmp.iid%3A600D85ED3FAA11E99731F012F5360853%22%20stRef%3AdocumentID%3D%22xmp.did%3A600D85EE3FAA11E99731F012F5360853%22%2F%3E%20%3C%2Frdf%3ADescription%3E%20%3C%2Frdf%3ARDF%3E%20%3C%2Fx%3Axmpmeta%3E%20%3C%3Fxpacket%20end%3D%22r%22%3F%3E%12ywY%00%00%020IDATx%C3%9A%C2%AC%C2%94%3DK%5BQ%18%C3%87%C2%9F%C2%9C%7B%C3%89%C2%92%C3%9CB%C3%A56q%09T%C3%A2%C2%90%C2%A5%16b%3ATc%C2%BF%C2%80%14Zp%C3%AF%C2%A4%0En%16%C3%AB7ht%C2%A8C%C3%9D%C2%9A%C2%A9T%C2%9C%3A%C2%94%167%1D4%C3%94%C2%B9%C2%B5%C2%A1%C2%93b0%26h%1A%C3%AC5%C2%86%C2%82!I%C3%BB%C3%BF_%C3%8E%09%C2%97%10%C2%87%C2%82%0F%C3%BC%C3%A0%C2%9C%C3%B3%C2%BC%C3%9C%C3%B3%C2%BC%C2%9C%1B%C2%9A%C2%9B%C2%9F%C2%97%01%C3%A2%C2%80%110%0A%C2%86%C3%B4%C3%99%058%04%C3%87%C3%A0%C2%AA%C3%9F%C3%81%C3%AE%C3%9B%C3%9F%01%0F%C3%814%C2%98%01%C3%89%3E%C3%BD%11%C3%B8%08%C2%B6%C3%80w%C3%90%18%14%C3%A8.x%0AVm%C3%9B%1E%C2%9E%C2%9C%C2%98%C2%90%07ccr%C3%8Fu%7D%C3%A5%C2%AFz%5D~%1C%1C%24%C2%BF%C3%AE%C3%AF%2F%C2%B7%C3%9B%C3%AD%178Z%06_%C3%80o%C3%AAC%3A5%C3%9E%C3%A4%19x%C2%9FH%24dnvVb%C2%B1%C3%98%C2%A0%C2%94%C2%A5V%C2%AB%C3%89%C2%BB%7C%5E%C3%8A%C3%A52%C2%B7%0C%C3%B8%C2%897SZ%C3%8FtV%19%C3%A4%C3%95%C3%92%C3%92%C2%8DA(%C3%94%C3%91%C2%86%C2%B6%C3%B4%C3%91%C2%BE%C2%A2ta%C2%A7%C2%99%0Eo%12%0E%C2%87%7B_%C2%AE%23%1D%23%5C%C2%9F%C3%A3%C2%8CB%1B%C3%9A%C3%92G%C3%97%C3%93Q%C2%BA%3B3%C2%AC%C2%89%C2%B9%09%C2%83%C2%BC%C3%8E%C3%A5%24%C2%B7%C2%B2%22%C3%95j%C3%95%C2%87%C3%AB%1C%C3%8EL0%C3%9A%C3%92G7e%C3%84%C3%96-N%C2%B2%C2%B0F%C2%94RbY%C2%964%C2%9BMy%C2%B3%C2%B6%C3%A6%C2%9Fq%1D%C2%8DF%C3%85R%C2%AAgG%C2%9F%C3%9D%C2%BD%3DvvT%C2%9991%C3%9D%C2%A1%C2%B8X%C2%BF%5C%5C%C3%B4%1D%11%C2%A0D%C2%B8%C3%A6%C2%99%1B%C2%B0%0B%C3%B8%0C)%C2%B9%25Qzb%C3%BD9%09%16%C2%96)%C3%A9t%C3%AE%13%C2%93f%C2%B0%01%01%C2%9F%0B%C2%A5%C3%87%C3%BE%08%C3%83%C3%963%C3%A8v%C2%BB%C3%92%C3%A9t%C3%84%C2%A4c%C3%92%C3%A4Y%07%3A%23%C3%9A%C2%87%C3%93~h%C2%8Dg2%7FX%C2%96J%C2%A5%C2%92%7D%C2%94%C3%89H%24%12%C3%B1I%C2%A7%C3%93%C3%B2djJ%C3%A2%C3%B1%C2%B88%C2%8E%23%C3%A3%C3%98Of%C2%B3%12%0Ft%C3%B6%C3%83%C3%86%06%3F%C2%9A%C3%87%C3%B6%C2%B3%C3%92%0Fp%0Bc%7F%C3%86%C2%89m%C2%B5Z%C2%BD%C3%B6%C2%BA%7D%0D0AhC%5B%C3%BA%C3%A8ww%C3%85%1BQ%C3%A7%C2%81%C3%93F%C2%A3%C3%B1%C2%BCX%2CJ*%C2%95%C3%B2ou%C3%93%13y%C2%BB%C2%BEn%C2%9E%C3%88%02%C3%98%05%C3%97%26%C3%9058%01%3F%11%C3%ACq%C2%A1P%C2%88%5Ez%C2%88%1D%0A%C3%89_%C3%94%C2%84%C2%85%3E.%C2%95dg%7B%C3%9BO%C3%87%C3%B3%C2%BC3%1D%C2%84%C2%8F%C3%B62%C3%B8ho%C3%B57%22ZQ%00%C3%9F%C3%80%C3%A6%C3%BF%C3%BC%C3%98%C3%BE%090%00%C2%B97%C3%B8g%1C%C3%9D%C2%B3%0F%00%00%00%00IEND%C2%AEB%60%C2%82"; 
var iconbutton1 = group1.add("iconbutton", undefined, File.decode(iconbutton1_imgString), {name: "iconbutton1", style: "toolbutton"}); 
    iconbutton1.text = "FolderIcon"; 

// TAB1
// ====
var button1 = tab1.add("button", undefined, undefined, {name: "button1"}); 
    button1.text = "IMPORT"; 
    button1.alignment = ["center","top"]; 

// GROUP2
// ======
var group2 = tab1.add("group", undefined, {name: "group2"}); 
    group2.orientation = "row"; 
    group2.alignChildren = ["left","center"]; 
    group2.spacing = 10; 
    group2.margins = 0; 

var statictext3 = group2.add("statictext", undefined, undefined, {name: "statictext3"}); 
    statictext3.text = "Percent Complete:"; 

var statictext4 = group2.add("statictext", undefined, undefined, {name: "statictext4"}); 
    statictext4.text = "2.4MB / 4.9MB"; 

var statictext5 = group2.add("statictext", undefined, undefined, {name: "statictext5"}); 
    statictext5.text = "54%"; 

// TAB1
// ====
var progressbar1 = tab1.add("progressbar", undefined, undefined, {name: "progressbar1"}); 
    progressbar1.maxvalue = 100; 
    progressbar1.value = 50; 
    progressbar1.preferredSize.width = 400; 
    progressbar1.preferredSize.height = 4; 
    progressbar1.alignment = ["center","top"]; 

// TAB2
// ====
var tab2 = tpanel1.add("tab", undefined, undefined, {name: "tab2"}); 
    tab2.text = "Data"; 
    tab2.orientation = "column"; 
    tab2.alignChildren = ["left","top"]; 
    tab2.spacing = 10; 
    tab2.margins = 10; 

// GROUP3
// ======
var group3 = tab2.add("group", undefined, {name: "group3"}); 
    group3.orientation = "row"; 
    group3.alignChildren = ["left","center"]; 
    group3.spacing = 10; 
    group3.margins = 0; 

// PANEL1
// ======
var panel1 = group3.add("panel", undefined, undefined, {name: "panel1"}); 
    panel1.text = "Time"; 
    panel1.orientation = "column"; 
    panel1.alignChildren = ["left","top"]; 
    panel1.spacing = 10; 
    panel1.margins = 10; 

// GROUP4
// ======
var group4 = panel1.add("group", undefined, {name: "group4"}); 
    group4.orientation = "row"; 
    group4.alignChildren = ["left","center"]; 
    group4.spacing = 10; 
    group4.margins = 0; 

var statictext6 = group4.add("statictext", undefined, undefined, {name: "statictext6"}); 
    statictext6.text = "Time from:"; 

var dropdown1_array = ["Row","-","Column"]; 
var dropdown1 = group4.add("dropdownlist", undefined, undefined, {name: "dropdown1", items: dropdown1_array}); 
    dropdown1.selection = 0; 

// GROUP5
// ======
var group5 = panel1.add("group", undefined, {name: "group5"}); 
    group5.orientation = "row"; 
    group5.alignChildren = ["left","center"]; 
    group5.spacing = 10; 
    group5.margins = 0; 

var statictext7 = group5.add("statictext", undefined, undefined, {name: "statictext7"}); 
    statictext7.text = "Header line: "; 

var dropdown2_array = ["Line 1","-","Line 2","-","Line 3","-","Line 4","-","Line 5"]; 
var dropdown2 = group5.add("dropdownlist", undefined, undefined, {name: "dropdown2", items: dropdown2_array}); 
    dropdown2.selection = 0; 

// PANEL2
// ======
var panel2 = group3.add("panel", undefined, undefined, {name: "panel2"}); 
    panel2.text = "Data"; 
    panel2.orientation = "column"; 
    panel2.alignChildren = ["left","top"]; 
    panel2.spacing = 10; 
    panel2.margins = 10; 

// GROUP6
// ======
var group6 = panel2.add("group", undefined, {name: "group6"}); 
    group6.orientation = "row"; 
    group6.alignChildren = ["left","center"]; 
    group6.spacing = 10; 
    group6.margins = 0; 

var statictext8 = group6.add("statictext", undefined, undefined, {name: "statictext8"}); 
    statictext8.text = "Data from:"; 

var dropdown3_array = ["Row","-","Column"]; 
var dropdown3 = group6.add("dropdownlist", undefined, undefined, {name: "dropdown3", items: dropdown3_array}); 
    dropdown3.selection = 2; 

// GROUP7
// ======
var group7 = panel2.add("group", undefined, {name: "group7"}); 
    group7.orientation = "row"; 
    group7.alignChildren = ["left","center"]; 
    group7.spacing = 10; 
    group7.margins = 0; 

var statictext9 = group7.add("statictext", undefined, undefined, {name: "statictext9"}); 
    statictext9.text = "Header line: "; 

var dropdown4_array = ["Line 1","-","Line 2","-","Line 3","-","Line 4","-","Line 5"]; 
var dropdown4 = group7.add("dropdownlist", undefined, undefined, {name: "dropdown4", items: dropdown4_array}); 
    dropdown4.selection = 0; 

// PANEL3
// ======
var panel3 = tab2.add("panel", undefined, undefined, {name: "panel3"}); 
    panel3.text = "Remap Data"; 
    panel3.preferredSize.width = 400; 
    panel3.orientation = "column"; 
    panel3.alignChildren = ["left","top"]; 
    panel3.spacing = 10; 
    panel3.margins = 10; 

var checkbox1 = panel3.add("checkbox", undefined, undefined, {name: "checkbox1"}); 
    checkbox1.text = "Activate"; 
    checkbox1.value = true; 

// GROUP8
// ======
var group8 = panel3.add("group", undefined, {name: "group8"}); 
    group8.preferredSize.width = 350; 
    group8.orientation = "row"; 
    group8.alignChildren = ["center","center"]; 
    group8.spacing = 10; 
    group8.margins = 0; 

// GROUP9
// ======
var group9 = group8.add("group", undefined, {name: "group9"}); 
    group9.orientation = "row"; 
    group9.alignChildren = ["left","center"]; 
    group9.spacing = 10; 
    group9.margins = 0; 

var statictext10 = group9.add("statictext", undefined, undefined, {name: "statictext10"}); 
    statictext10.text = "Original Min: "; 

var statictext11 = group9.add("statictext", undefined, undefined, {name: "statictext11"}); 
    statictext11.text = "0.4564"; 

// GROUP10
// =======
var group10 = group8.add("group", undefined, {name: "group10"}); 
    group10.orientation = "row"; 
    group10.alignChildren = ["left","center"]; 
    group10.spacing = 10; 
    group10.margins = 0; 

var statictext12 = group10.add("statictext", undefined, undefined, {name: "statictext12"}); 
    statictext12.text = "Original Max: "; 

var statictext13 = group10.add("statictext", undefined, undefined, {name: "statictext13"}); 
    statictext13.text = "702.45"; 

// GROUP11
// =======
var group11 = panel3.add("group", undefined, {name: "group11"}); 
    group11.preferredSize.width = 350; 
    group11.orientation = "row"; 
    group11.alignChildren = ["center","center"]; 
    group11.spacing = 10; 
    group11.margins = 0; 

// GROUP12
// =======
var group12 = group11.add("group", undefined, {name: "group12"}); 
    group12.orientation = "row"; 
    group12.alignChildren = ["left","center"]; 
    group12.spacing = 10; 
    group12.margins = 0; 

var statictext14 = group12.add("statictext", undefined, undefined, {name: "statictext14"}); 
    statictext14.text = "Original Min: "; 

var edittext1 = group12.add('edittext {properties: {name: "edittext1"}}'); 
    edittext1.text = "New min"; 

// GROUP13
// =======
var group13 = group11.add("group", undefined, {name: "group13"}); 
    group13.orientation = "row"; 
    group13.alignChildren = ["left","center"]; 
    group13.spacing = 10; 
    group13.margins = 0; 

var statictext15 = group13.add("statictext", undefined, undefined, {name: "statictext15"}); 
    statictext15.text = "Original Max: "; 

var edittext2 = group13.add('edittext {properties: {name: "edittext2"}}'); 
    edittext2.text = "New Max"; 

// GROUP14
// =======
var group14 = panel3.add("group", undefined, {name: "group14"}); 
    group14.orientation = "row"; 
    group14.alignChildren = ["left","center"]; 
    group14.spacing = 10; 
    group14.margins = 0; 

var statictext16 = group14.add("statictext", undefined, undefined, {name: "statictext16"}); 
    statictext16.text = "Remap Curve:"; 

var dropdown5_array = ["Linear","-","Smooth","-","Logorythmic"]; 
var dropdown5 = group14.add("dropdownlist", undefined, undefined, {name: "dropdown5", items: dropdown5_array}); 
    dropdown5.selection = 0; 

// GROUP15
// =======
var group15 = group14.add("group", undefined, {name: "group15"}); 
    group15.orientation = "row"; 
    group15.alignChildren = ["right","center"]; 
    group15.spacing = 10; 
    group15.margins = 0; 

var image1_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%1E%00%00%00%1E%08%06%00%00%00%3B0%C2%AE%C2%A2%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%01%07IDATx%C3%9A%C3%AC%C2%96%C3%BD%0D%C2%83%20%10%C3%85%C3%85t%00Fp%04Gh7p%04%C2%BBA%3B%C2%89%23t%C2%85n%C2%A0%1B%C3%98%11%C2%BA%C2%81n%40%1F%0D%C2%B4h%3DA%22%C3%B8G%7D%C3%89%C2%8B%17%14%7F%7C%C3%9C%11%C2%98%C2%80%C2%92%0D%C2%94%26%1B%C3%A9%60%C3%84W%C3%B8%11%C2%98%C2%97%C3%83%C3%95%3B%12_%1D%5Dz%C3%A2%C2%BB%1C%C3%A6%3ET%C3%89%C3%90%C2%B0tA%C2%A7%02%C3%AE%10%C2%B6p%C2%87%C3%B8%C3%A6%3B%00%C3%A7%19%C3%A3%5D%26%C2%A1%C3%A2WU%C3%A8%19%170'%C3%9A7%C3%89j%1E%1A%7C_%C3%98%C2%BE%0E%C2%981%C3%B6%C3%84%C3%A3%0C%C3%B7Fs%C2%A3J0%5Cr%19%C3%9Fr%C2%95%20Y%C2%B4rR3%C3%AF%C3%A1F%C2%AD%C2%809%C2%98Z%C3%96w%C2%B4%C3%A4Ru%5C%C3%83r%C2%B5%16%C3%81S%C3%8B%C2%8F%2B%C2%B8%C2%B4%40s%23%C3%83%C3%9D%C3%A1%C3%94%1E%C2%AB%C2%93I%C2%AB%C2%9C%C3%98%C3%ABVL%C2%AB%C2%A3%C3%A0%C3%A6%1EO%C2%82G%C3%90%01%C3%9C%02%C2%9D%C2%85%C3%8F%C2%82%09%C2%A8%C3%96%C3%85%01J%C3%82I%C2%B0%05%C3%AA%C2%A3%01%C2%9C%02%C2%B7%22%C2%8C%3Ep%13%C3%8C%22%5D%7D%C3%A4%C2%89w%C3%92%C2%99%1F%C3%B3%C3%AA3.%C2%BD%C2%84%C3%BD%C3%9Deo%07%C3%AF%C3%A0%1D%C2%BC%C2%9A%5E%02%0C%00u%C2%82%C2%98%3D%C3%8A%C2%8D%C3%B4%C2%B0%00%00%00%00IEND%C2%AEB%60%C2%82"; 
var image1 = group15.add("image", undefined, File.decode(image1_imgString), {name: "image1"}); 

// TAB3
// ====
var tab3 = tpanel1.add("tab", undefined, undefined, {name: "tab3"}); 
    tab3.text = "Animation"; 
    tab3.orientation = "column"; 
    tab3.alignChildren = ["left","top"]; 
    tab3.spacing = 10; 
    tab3.margins = 10; 

// GROUP16
// =======
var group16 = tab3.add("group", undefined, {name: "group16"}); 
    group16.orientation = "row"; 
    group16.alignChildren = ["left","center"]; 
    group16.spacing = 10; 
    group16.margins = 0; 

var statictext17 = group16.add("statictext", undefined, undefined, {name: "statictext17"}); 
    statictext17.text = "Method:"; 

var dropdown6_array = ["Existing Parameter","-","Add New Effect"]; 
var dropdown6 = group16.add("dropdownlist", undefined, undefined, {name: "dropdown6", items: dropdown6_array}); 
    dropdown6.selection = 0; 

// GROUP17
// =======
var group17 = tab3.add("group", undefined, {name: "group17"}); 
    group17.orientation = "row"; 
    group17.alignChildren = ["left","center"]; 
    group17.spacing = 10; 
    group17.margins = 0; 

var listbox1_array = ["Content will change","based on what is selected above."]; 
var listbox1 = group17.add("listbox", undefined, undefined, {name: "listbox1", items: listbox1_array}); 

// TAB4
// ====
var tab4 = tpanel1.add("tab", undefined, undefined, {name: "tab4"}); 
    tab4.text = "Export"; 
    tab4.orientation = "column"; 
    tab4.alignChildren = ["left","top"]; 
    tab4.spacing = 10; 
    tab4.margins = 10; 

// TPANEL1
// =======
tpanel1.selection = tab3; 

// GROUP18
// =======
var group18 = tab4.add("group", undefined, {name: "group18"}); 
    group18.orientation = "column"; 
    group18.alignChildren = ["left","center"]; 
    group18.spacing = 10; 
    group18.margins = 0; 

var checkbox2 = group18.add("checkbox", undefined, undefined, {name: "checkbox2"}); 
    checkbox2.text = "CSV Imported Successfully"; 
    checkbox2.value = true; 

var checkbox3 = group18.add("checkbox", undefined, undefined, {name: "checkbox3"}); 
    checkbox3.text = "Headers Selected Successfully"; 
    checkbox3.value = true; 

var checkbox4 = group18.add("checkbox", undefined, undefined, {name: "checkbox4"}); 
    checkbox4.text = "Data Remamp Successfully"; 
    checkbox4.value = true; 

var checkbox5 = group18.add("checkbox", undefined, undefined, {name: "checkbox5"}); 
    checkbox5.text = "Target Parameter(s) Selected Successfully"; 
    checkbox5.value = true; 

// GROUP19
// =======
var group19 = tab4.add("group", undefined, {name: "group19"}); 
    group19.preferredSize.width = 350; 
    group19.preferredSize.height = 150; 
    group19.orientation = "row"; 
    group19.alignChildren = ["center","bottom"]; 
    group19.spacing = 10; 
    group19.margins = 0; 

var button2 = group19.add("button", undefined, undefined, {name: "button2"}); 
    button2.text = "START"; 

// GROUP20
// =======
var group20 = dialog.add("group", undefined, {name: "group20"}); 
    group20.enabled = false; 
    group20.orientation = "row"; 
    group20.alignChildren = ["left","center"]; 
    group20.spacing = 10; 
    group20.margins = 0; 

var statictext18 = group20.add("statictext", undefined, undefined, {name: "statictext18"}); 
    statictext18.text = "Info and status messages will appear here."; 
    statictext18.justify = "center"; 

dialog.show();

