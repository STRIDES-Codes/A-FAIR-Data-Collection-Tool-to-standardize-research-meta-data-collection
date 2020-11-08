/**
 * A special function that runs when the spreadsheet is first
 * opened or reloaded. onOpen() is used to add custom menu
 * items to the spreadsheet.
 */

//

//Create new Investigation -> triggers the import of the "investigation.xml" template --> Can call 'inputConfigs' for now

//Create new study -> triggers the import of the "studySample.xml" --> Can call 'inputConfigs' for now

//Create new assay -> triggers the import of one of the assay xml files (drop down menu possible?) --> Can call 'inputConfigs' for now

//Add column -> allows a user to add a column and specific the 'rules' (e.g. is is a string).
                                                                                                                                         
function onOpen() {
  SpreadsheetApp.getUi() 
      .createMenu('ISA-Sheets / ISA-Attraction - MAIN MENU')
      .addItem('Create new Investigation ', 'investigation')
      .addItem('Create new Study', 'inputConfigs')
      .addItem('Create new Assay ', 'inputConfigs')
      .addItem('Add column', 'addacolumn')
      .addSeparator()
      .addItem('Settings', 'showSettings')
      .addItem('About', 'showAbout')
      .addToUi();
}
