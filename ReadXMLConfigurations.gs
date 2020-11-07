// This document is used to parse the XML templates

//1. find XML documents by url
function getXML(url) {
  url = 'https://raw.githubusercontent.com/STRIDES-Codes/A-FAIR-Data-Collection-Tool-to-standardize-research-meta-data-collection/main/XML/investigation.xml' //Temporary xml link
  var xml = UrlFetchApp.fetch(url).getContentText();
  var document = XmlService.parse(xml);
  Logger.log(document);
}


//2. break down XML into its individual objects
function myFunction() {
  
}


//3. Use object to create template columns and add 'rules'
function myFunction() {
  
}

