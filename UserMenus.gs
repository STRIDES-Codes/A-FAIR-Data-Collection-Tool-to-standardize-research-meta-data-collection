// ISA Tool - Users Menu
//
// License:
// ISA is licensed under the Common Public Attribution License version 1.0 (CPAL)
//
//
// Software distributed under the License is distributed on an “AS IS” basis,
// WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for
// the specific language governing rights and limitations under the License.
//
// The Original Developer is ISA - Team
// Original Code is the ISA Team (NAME And EMAILS HERE)
// All portions of the code written by the ISA Team are
// Copyright (c) 2020 ISA Team. All Rights Reserved.
//
// EXHIBIT B. Attribution Information
// Attribution Copyright Notice: Copyright (c) 2020 ISA Team
// Attribution Phrase: Developed by the ISA Team
// Attribution URL: 

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