/**
 * Removes empty strings on right side of passed values and joins with sep
 * @param {Object[]} sheet
 * @param {String} sep
 * @return {String}
 */
function rowJoin(values, sep) {
  var last_pos = 0;
  while (values.length && values[values.length - 1] == "") {
    values.pop();
  }
  
  return values.join(sep);
}

/**
 * Loops through all rows of sheet and converts rows to strings with the specified separator.
 * Rows are then joined together into lines.
 * @param {Sheet} sheet
 * @param {String} sep
 * @return {String}
 */
function sheetJoin(sheet, sep) {
  var rows = [];
  for (var i = 1; i <= sheet.getLastRow(); i++) {
    var row_string = rowJoin(
      sheet.getRange(i, 1, 1, sheet.getLastColumn()).getValues()[0],
      sep = sep
    );
    rows.push(row_string);
  }
  
  return rows.join("\n");
}

/**
 * Attempts to write each sheet in the current spreadsheet to a folder
 * TODO: Needs to be able to take user inputed path.
 */
function exportAllSheets() {
  // Create temporary export folder
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var folder = DriveApp.createFolder("temp_export_" + new Date().getTime());
  
  // Write each files
  var sheets = spreadsheet.getSheets();
  for (var i = 0; i < sheets.length; i++) {
    var filename = sheets[i].getName() + ".txt";
    var sheet_string = sheetJoin(sheets[i], sep = "\t");
    folder.createFile(filename, sheet_string);
  }
}
