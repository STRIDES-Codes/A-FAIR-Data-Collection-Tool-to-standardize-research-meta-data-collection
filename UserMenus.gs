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

function onOpen() {
  SpreadsheetApp.getUi() 
      .createMenu('ISA - MAIN MENU')
      .addItem('ITEM 1 ', 'item1function')
      .addItem('ITEM 2 ', 'item2function')
      .addItem('ITEM 3 ', 'item3function')
      .addSeparator()
      .addItem('Settings', 'showSettings')
      .addItem('About', 'showAbout')
      .addToUi();
}