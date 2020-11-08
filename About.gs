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

function showAbout() {

    var html = HtmlService.createHtmlOutputFromFile('About-Template')
      .setTitle('ISA-  A FAIR Data Collection Tool to standardize research metadata collection')
      .setWidth(300);
  
    SpreadsheetApp.getUi()
      .showSidebar(html);
  
}