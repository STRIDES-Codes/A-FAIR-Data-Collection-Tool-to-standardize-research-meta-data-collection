
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

/** Opens the sidebar for selection the XML configurations
*/
function openSideBar(){
  loadSidebar('ConfigurationSelection','Select');
}

/** Loop through the selected XML configurations and initiate their import.
  * Function is called from the ConfigurationSelection.html template
*/
function loadConfigs(configs){
  for (var i = 0; i < configs.length; i++){
    initImport(configs[i]);
  }
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
