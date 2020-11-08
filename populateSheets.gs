// This is a menu for just testing purposes.
// TODO: Replace with actual menu options.
/*
function onOpen() {
  SpreadsheetApp.getUi()
      .createMenu('Test')
        .addItem('Test', 'inputConfigs')
  .addToUi();
}
*/
// End of testing code.



/** 
  * Populates the specified sheet with field data from an ISA XML configuration
  * @param sheetname the name of the sheet that will be populated with the data
  * @param field is an object from the processXML functions
  * @return none
*/
function addFieldData(sheetname, field){
  createEmpty(sheetname, 'FALSE')
  createEmpty('_' + sheetname, 'TRUE')
  
  var template = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetname);
  var template_hidden = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('_' + sheetname);
  
  // Get field information from parsed XML object
  var header = tryParse(field, 'header');
  var data_type = tryParse(field, 'data-type');
  var file_field = tryParse(field, 'is-file-field');
  var multiple = tryParse(field, 'is-multiple-value');
  var hidden = tryParse(field, 'is-hidden');
  var forced_ontology = tryParse(field, 'is-forced-ontology');
  

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
  
  addLastRow(1, template_hidden, header);
  ammendLastRow(2, template_hidden, data_type);
  ammendLastRow(3, template_hidden, file_field);
  ammendLastRow(4, template_hidden, multiple);
  ammendLastRow(5, template_hidden, hidden);
  ammendLastRow(6, template_hidden, forced_ontology);
}


/** 
  * Populates the specified sheet with protocol data from an ISA XML configuration
  * @param sheetname the name of the sheet that will be populated with the data
  * @param field is an object from the processXML functions
  * @return none
*/
function addProtocolData(sheetname, field){
  createEmpty(sheetname, 'FALSE')
  createEmpty('_' + sheetname, 'TRUE')
  
  var template = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetname);
  var template_hidden = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('_' + sheetname);
  
  // Get field information from parsed XML object
  var protocol_type = field.getAttribute('protocol-type').getValue();  
  
  // Find the last empty header column.
  if (sheetname != 'investigation'){
    addLastColumn(1, template, 'Protocol REF [' + protocol_type + ']');
    addLastRow(1, template_hidden, protocol_type);
    Logger.log('here:' + protocol_type);
  } else {
    // Does not behave the same way in investigation
    Logger.log('investigation protocol');
  }
}
