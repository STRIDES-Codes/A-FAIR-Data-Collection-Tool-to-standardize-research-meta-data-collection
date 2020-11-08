// Add a value to the last column of a spreadsheet
function createEmpty(name, hidden) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  if (!sheet.getSheetByName(name)){
    sheet.insertSheet(name);
    if (hidden == 'TRUE') {
      sheet.getSheetByName(name).hideSheet();
    }
  }
}

function addLastColumn(row, sheet, value){
  var myRange = sheet.getRange(row, sheet.getLastColumn() + 1);
  myRange.setValue(value);
}

// Add a value to the last empty row and column
function addLastRowColumn(sheet, value){
  var myRange = sheet.getRange(sheet.getLastRow() + 1, sheet.getLastColumn() + 1);
  myRange.setValue(value);
}

// Add a value to the last row of a spreadsheet
function addLastRow(column, sheet, value){
  var myRange = sheet.getRange(sheet.getLastRow() + 1, column);
  myRange.setValue(value);
}

// Add a value to the last row containing a value in a spreadsheet
function ammendLastRow(column, sheet, value){
  var myRange = sheet.getRange(sheet.getLastRow(), column);
  myRange.setValue(value);
}

/**
  * Attempt to parse an XML field and deal with missing (NULL) values
  * @param field the field from an XML file 
  * @criteria the field-name queried
  * @return value a string representing either the value of the XML field or NA
*/
function tryParse(field, criteria){
  try {
    var value = field.getAttribute(criteria).getValue();
  } 
  catch(err){
    var value = 'NA'
  }
  return value
}