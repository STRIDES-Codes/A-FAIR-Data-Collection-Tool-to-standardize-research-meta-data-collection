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