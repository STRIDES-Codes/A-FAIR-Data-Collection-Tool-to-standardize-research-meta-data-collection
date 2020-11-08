// This document is used to parse the XML templates
// Use this function to run the next two blocks
function runTest(){
  // Investigation
  // var fields = getXML('https://raw.githubusercontent.com/STRIDES-Codes/A-FAIR-Data-Collection-Tool-to-standardize-research-meta-data-collection/main/XML/investigation.xml', 'http://www.ebi.ac.uk/bii/isatab_configuration#');
  // Study
  // var fields = getXML('https://raw.githubusercontent.com/STRIDES-Codes/A-FAIR-Data-Collection-Tool-to-standardize-research-meta-data-collection/UsersMenu/XML/studySample.xml', 'http://www.ebi.ac.uk/bii/isatab_configuration#');
  // Assay
  var fields = getXML('https://raw.githubusercontent.com/STRIDES-Codes/A-FAIR-Data-Collection-Tool-to-standardize-research-meta-data-collection/main/XML/histology.xml', 'http://www.ebi.ac.uk/bii/isatab_configuration#');
  var templateType = fields[0].getAttribute('term-label').getValue();
  if (templateType == '[investigation]'){
    var parsed = processXMLinvestigation(fields); 
  } else if (templateType == '[Sample]'){
    var parsed = processXMLstudy(fields); 
  } else {
    Logger.log(templateType);
    var parsed = processXMLassay(fields, templateType);
  }
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
      var addField = addFieldData('investigation', fields[i])
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
      var addField = addFieldData('studySample', fields[i])
    } 
  }
}

// Loop through the XML assay configuration
function processXMLassay(fields, name){
  for (var i = 0; i < fields.length; i++) {
    if (fields[i].getName() == 'protocol-field') {
      addProtocolData('a_' + name, fields[i]);
    } else if (fields[i].getName() == 'field') {
      addFieldData('a_' + name, fields[i]);
    } 
  }
}
