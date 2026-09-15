function doGet() {
  var htmlOutput = HtmlService.createTemplateFromFile('index').evaluate();
  
  htmlOutput.setTitle('경주 5인 MT 일정 안내 / 慶州5人MT日程案内')
            .addMetaTag('viewport', 'width=device-width, initial-scale=1.0');
            
  return htmlOutput;
}
