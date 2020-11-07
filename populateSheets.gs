// This is a menu for just testing purposes.
function onOpen() {
  SpreadsheetApp.getUi()
      .createMenu('Test')
        .addItem('Test', 'runTest')
  .addToUi();
}

function testSheet(){
  createEmpty('testsheet2', 'TRUE');
}

function createEmpty(name, hidden) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  if (!sheet.getSheetByName(name)){
    sheet.insertSheet(name);
    if (hidden == 'TRUE') {
      sheet.getSheetByName(name).hideSheet();
    }
  }
}


// Name of the sheet where the field information will be added
function addFieldColumn(sheetname, field){
  createEmpty(sheetname, 'FALSE')
  createEmpty('_' + sheetname, 'TRUE')
  
  var template = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetname);
  var template_hidden = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('_' + sheetname);
  
  // Get field information from parsed XML object
  var header = field.getAttribute('header').getValue();
  var data_type = field.getAttribute('data-type');
  var file_field = field.getAttribute('is-file-field');
  var multiple = field.getAttribute('is-multiple-value');
  var hidden = field.getAttribute('is-hidden');
  var forced_ontology = field.getAttribute('is-forced-ontology');
  var protocol_type = field.getAttribute('protocol-type');  
  

  // Find the last empty header column.
  if (sheetname != 'investigation'){
    addLastColumn(1, template, header);
  } else {
    addLastRow(1, template, header);
  }
 
  // The idea here is to have a hidden tab that records all the 'rules'
  // TODO: This isn't a very efficient way of doing it, can't think of another way.
  // It also breaks on NULL.
  // Headers also aren't recorded.
  
  var addLastRow1 = addLastRow(1, template_hidden, header);
  ammendLastRow(2, template_hidden, data_type.getValue());
  ammendLastRow(3, template_hidden, file_field.getValue());
  // ammendLastRow(4, template_hidden, multiple.getValue());
}


// Basic Utilities
//
