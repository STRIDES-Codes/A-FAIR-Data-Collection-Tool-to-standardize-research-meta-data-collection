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

/** Add a value and comment to the last empty column on specified row
  * @param row the row number to look for empty column
  * @param the sheet where the last empty column should be identified
  * @param value the value to put in the empty cell
  * @param comment a comment to include
  * @return the address of the last empty cell on the column
*/
function addLastColumn(row, sheet, value, comment){
  var myRange = sheet.getRange(row, sheet.getLastColumn() + 1);
  myRange.setValue(value);
  myRange.setNote(comment);
  return myRange;
}

/** Add a value and comment to the last empty row on specified row
  * @param column the column number to look for empty row
  * @param the sheet where the last empty row should be identified
  * @param value the value to put in the empty cell
  * @param comment a comment to include
  * @return the address of the last empty cell on the column
*/
function addLastRow(column, sheet, value, comment){
  var myRange = sheet.getRange(sheet.getLastRow() + 1, column);
  myRange.setValue(value);
  myRange.setNote(comment);
  return myRange;
}


// Add a value to the last empty row and column
function addLastRowColumn(sheet, value){
  var myRange = sheet.getRange(sheet.getLastRow() + 1, sheet.getLastColumn() + 1);
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

/** Generic function for loading HTML template
*/
function loadSidebar(template, title) {
  var html = (HtmlService.createTemplateFromFile(template).evaluate())
       .setSandboxMode(HtmlService.SandboxMode.IFRAME)
       .setTitle(title)
  SpreadsheetApp.getUi() 
        .showSidebar(html);
}
