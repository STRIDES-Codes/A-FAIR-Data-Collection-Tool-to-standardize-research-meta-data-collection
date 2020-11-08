// This document is used to parse the XML templates
/**
Use this function to initiate testing of individual functions.
function runAllTest(){
  runTest('https://raw.githubusercontent.com/STRIDES-Codes/A-FAIR-Data-Collection-Tool-to-standardize-research-meta-data-collection/main/XML/investigation.xml');
  runTest('https://raw.githubusercontent.com/STRIDES-Codes/A-FAIR-Data-Collection-Tool-to-standardize-research-meta-data-collection/UsersMenu/XML/studySample.xml');
  runTest('https://raw.githubusercontent.com/STRIDES-Codes/A-FAIR-Data-Collection-Tool-to-standardize-research-meta-data-collection/main/XML/histology.xml');
}
// This is the end of testing code.
*/


/**
  * inputConfig is used to display a pop-up box which will ask for the user to input a URL for the XML templates.
  * The function calls initImport which initiates the import and parsing of the XML file.
*/
function inputConfigs(){
  var ui = SpreadsheetApp.getUi();
  var input = ui.prompt('Please enter valid ISA configuration XML URL', ui.ButtonSet.OK_CANCEL);
  
  if (input.getSelectedButton() == ui.Button.OK && input.getResponseText() != ''){
    // TODO: Need to validate URL
    initImport(input.getResponseText());  
  }
}

/**
  * Fetches and parses the XML configuration so that it can be passed to subsquent function.
  * @param url the URL for the XML file that is directly avaible as hyperlink.
  * @param namespace the namespace for the XML configuration.
  * @return an object representing the parsed XML file.
*/
function getXML(url, namespace) {
  var ns = XmlService.getNamespace(namespace)
  var xml = UrlFetchApp.fetch(url).getContentText();
  var document = XmlService.parse(xml);
  var root = document.getRootElement();
  var config = root.getChild('isatab-configuration', ns);
  var fields = config.getChildren();
  return fields
}

/**
  * Initiates the processing of Ivestigation, Study, Assay XML configurations.
  * @param url the URL for the XML file that is directly avaible as hyperlink.
  * TODO: Check that the XML follow expected format and return error message if not.
*/
function initImport(url){
  var fields = getXML(url, 'http://www.ebi.ac.uk/bii/isatab_configuration#'); 
  var templateType = fields[0].getAttribute('term-label').getValue();
  if (templateType == '[investigation]'){
    processXMLinvestigation(fields); 
  } else if (templateType == '[Sample]'){
    processXMLstudy(fields); 
  } else {
    processXMLassay(fields, templateType);
  }
}


/**
  * Loops through each item of the XML configuration for Investigations
  * @param fields the output from getXML
*/
function processXMLinvestigation(fields){
  for (var i = 0; i < fields.length; i++) {
    if (fields[i].getName() == 'field') {
      var addField = addFieldData('investigation', fields[i])
    } 
  }
}

/**
  * Loops through each item of the XML configuration for Study
  * @param fields the output from getXML
*/
function processXMLstudy(fields){
  for (var i = 0; i < fields.length; i++) {
    if (fields[i].getName() == 'protocol-field') {
      addProtocolData('studySample', fields[i]);
    } else if (fields[i].getName() == 'field') {
      addFieldData('studySample', fields[i]);
    } 
  }
}

/**
  * Loops through each item of the XML configuration for Study
  * @param fields the output from getXML
  * @param name the name of assay type obtained from initImport
*/
function processXMLassay(fields, name){
  for (var i = 0; i < fields.length; i++) {
    if (fields[i].getName() == 'protocol-field') {
      addProtocolData('a_' + name, fields[i]);
    } else if (fields[i].getName() == 'field') {
      addFieldData('a_' + name, fields[i]);
    } 
  }
}
