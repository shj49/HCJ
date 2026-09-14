Smart Doc Compressor
- 100% 클라이언트 사이드 문서 최적화 웹 애플리케이션
- 외부 서버로 파일이 전송되지 않아 보안 및 정보 유출 우려가 전혀 없는 웹 기반 문서 압축기입니다.

주요 기능 (Key Features)
- 100% 보안 보장 (No Server Upload) 
  모든 작업이 사용자의 웹 브라우저 메모리 내에서만 처리되므로 기밀 문서나 개인정보 유출 위험이 없습니다.
- 드래그 앤 드롭 지원 (Drag & Drop) 
  파일 탐색기를 통한 버튼 선택 및 드래그 앤 드롭 방식을 모두 지원합니다.
- 다양한 문서 포맷 지원 
  PDF, PPT/PPTX, DOC/DOCX, HWP 등 주요 문서 확장자를 지원합니다.
- 개별 진행상황 트래킹 (Progress Bar)
  다중 파일 업로드 시 파일별 독립된 프로그레스 바를 통해 작업 진행 상태를 직관적으로 확인 가능합니다.
- 자동 파일명 변경
  작업 완료 후 다운로드 시 `COMPRESSED_원본파일명` 형식으로 다운로드됩니다.

 기술 스택 (Tech Stack)
HTML5 (Drag and Drop API, File API)
CSS3 (Flexbox, CSS Variables)
JavaScript (Vanilla JS, Blob & Object URL API)
FontAwesome 6.4.0 (문서 유형별 아이콘)

프로젝트 구조 (Project Structure)

- text
smart-doc-compressor/
│
├── index.html        # 메인 웹 애플리케이션 (HTML/CSS/JS 통합)
├── logo.pog          # 좌상단 브랜드 로고 (nanalab.kr 링크 연동)
└── README.md         # 프로젝트 설명 문서

실행 방법 (Getting Started)
- 별도의 백엔드 서버 구축이나 패키지 설치(npm install 등)가 필요하지 않습니다.
- 본 저장소를 클론(Clone)하거나 다운로드합니다.
- 폴더 내 logo.pog 이미지 파일이 포함되어 있는지 확인합니다.
- index.html 파일을 웹 브라우저(Chrome, Edge, Safari 등)로 실행합니다.

사용 방법 (Usage)
- 브라우저로 접속 후 중앙의 "Upload or Drop your file!" 영역으로 파일을 끌어다 놓거나 파일 선택하기 버튼을 클릭합니다.
- 파일이 등록되면 개별 진행상황(Progress bar)이 작동합니다.
- 진행률이 100%에 도달하면 우측의 다운로드 버튼이 활성화됩니다.
- 버튼을 클릭하여 COMPRESSED_ 접두사가 붙은 압축 완료 파일을 저장합니다.

사용한 AI : gemini 사용

프롬포트
- 문서 파일 첨부 용량 제한을 겪은 사람들을 위해 정보 유출 우려가 전혀 없는 문서 압축기를 만들 거야.
이제부터 네가 문서 파일을 업로드하면 용량을 줄여주는 웹 앱을 만들어줘.
1. 폴더 내의 logo.pog 파일을 화면 좌상단에 넣어줘. 로고를 클릭하면 https://nanalab.kr로 이동해.
2. 화면 우상단에는 "Smart Doc Compressor"라고 적어줘.
3. 화면 중앙에는 "Upload or Drop your file!"이라는 문구 적어 주고
4. 버튼 눌러서 업로드할 수도 있고
5. 드래그 앤 드롭으로 브라우저에 바로 파일을 업로드해도 인식하게 해줘.
6. PDF, PPT, DOC, HWP 파일을 지원하면 좋겠어. 지원하는 파일 아이콘도 페이지에 표기해 주면 좋겠네.
7. 파일을 업로드하면 파일별로 일종의 프로그레스바가 있는 목록을 표시해 주고
8. 각 파일별로 별도로 작업을 하면서, 진행상황을 프로그레스 바에 기록해줘.
9. 작업 끝나면 프로그레스바 우측의 다운로드 버튼이 활성화됨. 클릭하면 파일 다운로드됨.
10. 압축된 파일은 'COMPRESSED_원본파일명' 형태로 저장해줘.
