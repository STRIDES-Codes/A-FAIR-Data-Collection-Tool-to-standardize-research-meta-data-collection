// This document is used to parse the XML templates
// Use this function to run the next two blocks
function runTest(){
  var fields = getXML('https://raw.githubusercontent.com/STRIDES-Codes/A-FAIR-Data-Collection-Tool-to-standardize-research-meta-data-collection/main/XML/investigation.xml', 'http://www.ebi.ac.uk/bii/isatab_configuration#');
  var parsed = processXMLinvestigation(fields); 
}


// Obtain XML configuration file based on a url
// Parses the XML configurations into its fields
// Returns the fields object
function getXML(url, namespace) {
  var ns = XmlService.getNamespace(namespace)
  var xml = UrlFetchApp.fetch(url).getContentText();
  var document = XmlService.parse(xml);
  var root = document.getRootElement();
  var config = root.getChild('isatab-configuration', ns);
  var fields = config.getChildren();
  return fields
}


// Loop through the XML investigation configuration
function processXMLinvestigation(fields){
  for (var i = 0; i < fields.length; i++) {
    if (fields[i].getName() == 'field') {
      // Populate Sheets template. 
      Logger.log('field')
    } 
  }
}

// Loop through the XML study configuration
function processXMLstudy(fields){
  for (var i = 0; i < fields.length; i++) {
    if (fields[i].getName() == 'protocol-field') {
      // Code to create a protocol-field in the sheets template - only applicable to Study and Assay
      Logger.log('protocol')
    }
    
    if (fields[i].getName() == 'field') {
      // Populate Sheets template. 
      Logger.log('field')
    } 
  }
}

// Loop through the XML assay configuration
function processXMLassay(fields){
  for (var i = 0; i < fields.length; i++) {
    if (fields[i].getName() == 'protocol-field') {
      // Code to create a protocol-field in the sheets template - only applicable to Study and Assay
      Logger.log('protocol')
    }
    
    if (fields[i].getName() == 'field') {
      // Populate Sheets template. 
      Logger.log('field')
    } 
  }
}
