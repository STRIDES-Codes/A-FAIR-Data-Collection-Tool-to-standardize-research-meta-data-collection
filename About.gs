/** Opens the Github repository as an about page
*/
function showAbout() {
  var js = " \
    <script> \
      window.open('https://github.com/STRIDES-Codes/A-FAIR-Data-Collection-Tool-to-standardize-research-meta-data-collection', '_blank', 'width=800, height=600'); \
      google.script.host.close(); \
    </script> \
  ";
  var html = HtmlService.createHtmlOutput(js)
    .setHeight(10)
    .setWidth(100);
  SpreadsheetApp.getUi().showModalDialog(html, 'Now loading.');  
}