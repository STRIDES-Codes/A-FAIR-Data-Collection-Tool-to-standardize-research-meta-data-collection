/*
function onOpen() {
  SpreadsheetApp.getUi()
      .createMenu('Test2')
        .addItem('Test2', 'openSideBar')
  .addToUi();
}
*/

function openSideBar(){
  loadSidebar('ConfigurationSelection','Select');
}
// The following code is used to import libraries of XML configurations

/** Lists the files in a the ISA configurations Github repository.
  * This version uses a hard-coded path to the codeathon repo because of 
  * Github API request limits.
*/
function listConfigsGit() {
  // TODO: Replace this function. It is currently limited by Github API request limitations
  //var strides_repo = JSON.parse(repoContents());
  var strides_repo = repoContents();
  for (var i = 0; i < strides_repo.length; i++) {
    Logger.log(strides_repo[i].name + ' : ' + strides_repo[i].download_url);
  }
  return strides_repo
}

function loadConfigs(configs){
  Logger.log(configs);
}

function loadSidebar(template, title) {
  var html = (HtmlService.createTemplateFromFile(template).evaluate())
       .setSandboxMode(HtmlService.SandboxMode.IFRAME)
       .setTitle(title)
  SpreadsheetApp.getUi() 
        .showSidebar(html);
}
