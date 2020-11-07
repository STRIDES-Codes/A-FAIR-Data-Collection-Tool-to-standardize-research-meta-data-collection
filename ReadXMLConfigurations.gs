// This document is used to parse the XML templates

// Obtain XML configuration file based on a url
// Parses the XML configurations into its fields
// Returns the fields object
function getXML(url, namespace) {
  url = 'https://raw.githubusercontent.com/STRIDES-Codes/A-FAIR-Data-Collection-Tool-to-standardize-research-meta-data-collection/main/XML/investigation.xml' //Temporary xml link
  var ns = XmlService.getNamespace('http://www.ebi.ac.uk/bii/isatab_configuration#')
  namespace = 'http://www.ebi.ac.uk/bii/isatab_configuration#' //Temporary namespace name
  var xml = UrlFetchApp.fetch(url).getContentText();
  var document = XmlService.parse(xml);
  var root = document.getRootElement();
  var config = root.getChild('isatab-configuration', ns);
  var fields = config.getChildren();
  Logger.log(typeof(fields));
  return fields
}


//2. break down XML into its individual objects
function myFunction() {
  
}


//3. Use object to create template columns and add 'rules'
function myFunction() {
  
}

