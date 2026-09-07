// 웹앱 접속 시 index.html 파일 출력
function doGet() {
  return HtmlService.createTemplateFromFile('index')
    .evaluate()
    .setTitle('경주 MT')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1.0');
}

// 폼 데이터를 제출받아 스프레드시트에 연동 저장
function submitData(formObject) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var timestamp = new Date();
    
    // 시트에 추가 [제출시간, 이름, 이메일, 점심 메뉴, 경주 가고 싶은 곳]
    sheet.appendRow([
      timestamp,
      formObject.name,
      formObject.email,
      formObject.lunch,
      formObject.destination
    ]);
    
    return { success: true };
  } catch (error) {
    return { success: false, error: error.toString() };
  }
}
