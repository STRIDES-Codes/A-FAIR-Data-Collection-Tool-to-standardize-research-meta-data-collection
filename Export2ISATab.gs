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
 * Display a pop-up box which will ask for the user to input a google drive path to write data.
*/
function getPath(){
  var ui = SpreadsheetApp.getUi();
  var input = ui.prompt('Input google drive path where you would like to save data.', 
                        ui.ButtonSet.OK_CANCEL);
  
  if (input.getSelectedButton() == ui.Button.OK){
    return input.getResponseText();  
  } else {
    return null;
  }
}

/**
 * Take user inputed path, and recursively create folders before returning last folder.
 * @return {Folder}
*/
function getExportFolder() {
  // Establish and parse path
  var path = getPath();
  if (path == "") {
      path = "isa_sheets_export" + new Date().getTime();
  } else if (!path) {
      Logger.log("Path was null");
      return null;
  }
  path = path.split("/");
  
  // Recursively create folders
  var folder = DriveApp.getRootFolder();
  for (var i = 0; i < path.length; i++) {
    if (path[i] == "") {
      continue;
    }
    
    var sub_folder_iter = folder.getFoldersByName(path[i]);
    if (!sub_folder_iter.hasNext()) {
      folder = folder.createFolder(path[i]);
    } else {
      folder = sub_folder_iter.next();
      if (sub_folder_iter.hasNext()) {
        throw new Error( "Pathname is ambiguous." );
      }
    }
  }
  
  return folder;
}

/**
 * Attempts to write each sheet in the current spreadsheet to a folder
 */
function exportAllSheets() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var folder = getExportFolder();
  if (!folder) {
    return null;
  }
  
  // Write each files
  var sheets = spreadsheet.getSheets();
  for (var i = 0; i < sheets.length; i++) {
    var filename = sheets[i].getName() + ".txt";
    var sheet_string = sheetJoin(sheets[i], sep = "\t");
    folder.createFile(filename, sheet_string);
  }
}
