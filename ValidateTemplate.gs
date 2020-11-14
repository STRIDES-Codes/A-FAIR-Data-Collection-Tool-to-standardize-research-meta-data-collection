// Maybe code here that is used to validate that the entered data follows XML specifications
function applyRequirements(direction, requirements, cellRange) {
  // 
  var ruleDouble = SpreadsheetApp.newDataValidation()
    .requireNumberGreaterThan(-99999999.9999999)
    .setAllowInvalid(false)
    .setHelpText('Must be a number')
    .build();    
  
  var ruleList = SpreadsheetApp.newDataValidation()
    .requireValueInList(["Rance","Nault","was","here"])
    .setAllowInvalid(false)
    .setHelpText('Must be positive number')
    .build();
  
  var ruleText = SpreadsheetApp.newDataValidation()
    .requireTextDoesNotContain('\t')
    .setAllowInvalid(false)
    .setHelpText('Must be text')
    .build();

  var ruleDate = SpreadsheetApp.newDataValidation()
    .requireDate()
    .setAllowInvalid(false)
    .setHelpText('Must be text')
    .build();
  
  Logger.log(requirements.data_type)
  if (requirements.data_type == 'String' || requirements.data_type == 'Long String'){
    cellRange.offset(0,1).setDataValidation(ruleText);
  }
  if (requirements.data_type == 'Ontology term'){
    cellRange.offset(0,1).setDataValidation(ruleList);
  }
  if (requirements.data_type == 'Date'){
    cellRange.offset(0,1).setDataValidation(ruleList);
  }
  
}
