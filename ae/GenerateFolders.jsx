/* 
 Name:
	Gnereate Folders
 Version:
	1.0 (April 11, 2023 ) by Rich Spencer
      Changelog:
	First Launch
 Author:
	Rich Spencer
 Description:  
	This script allows users to generate the default file structure quickly and easily.
    
 Usage:
	In After Effects 2023 or later, run the script
	Hit Generate Folders!
*/

  
var win = new Window('palette', 'DX Folder Structure');
var testLabel = win.add('statictext', undefined, 'Developed by Rich Spencer');
var btnSelect = win.add('button', undefined, 'Generate Folders!');


btnSelect.onClick = function(){
    
var compFolder0 = app.project.items.addFolder('01_MASTER COMPS'); 
var compFolder0 = app.project.items.addFolder('02_WORKING COMPS'); 
var compFolder0 = app.project.items.addFolder('03_PRE COMPS'); 

//initiates QT set
var compFolder = app.project.items.addFolder('04_VIDEO'); 
var compFolder2= app.project.items.addFolder('FOOTAGE');//folder1
var compFolder3= app.project.items.addFolder('PRERENDERS');//folder2
compFolder2.parentFolder = compFolder;//makes folder 2 child of folder1
compFolder3.parentFolder = compFolder;//makes folder 3 child of folder1

var compFolder0 = app.project.items.addFolder('05_IMAGES'); 
var compFolder0 = app.project.items.addFolder('06_AUDIO'); 
var compFolder0 = app.project.items.addFolder('07_EDIT IMPORT'); 
var compFolder0 = app.project.items.addFolder('08_AE IMPORT'); 
var compFolder0 = app.project.items.addFolder('09_3D IMPORT'); 
var compFolder0 = app.project.items.addFolder('10_REFERENCE'); 
//alerts user on completion
//alert('Folders were successfully generated. Enjoy.');
}
 

win.center();
win.show();