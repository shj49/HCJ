# 📄 심현주의 웹 이력서 (Web Resume)

HTML5와 CSS3를 활용하여 제작한 개인 온라인 웹 이력서 페이지입니다.  
뷰티·바이오 도메인(화장품학/제약공학), 미디어 콘텐츠 기획/연출, K-Move 글로벌 실무 및 AI·IT 직무 역량을 한눈에 확인할 수 있도록 구성되어 있습니다.

---

## 🌐 데모 및 배포 링크
- **저장소 링크:** [https://github.com/shj49/HCJ](https://github.com/shj49/HCJ)
- **GitHub Pages 배포:** `https://shj49.github.io/HCJ/<해당폴더명>/index.html`

---

## 📌 주요 구성 섹션

1. **My Info (`#my_info`)**
   - 프로필 사진 및 기본 인적 사항 테이블
   - 이름, 전공(화장품학 주전공 / 미디어콘텐츠학 복수전공 / 제약공학 소전공), 학력(경성대학교 23학번), 거주지
2. **About (`#about`)**
   - 전공 지식, 자격증 취득, 미디어 연출 기획 역량 및 K-Move 스쿨을 통한 IT/글로벌 실무 확장 소개
3. **Contact (`#contact`)**
   - 전화번호(`tel:`), 이메일(`mailto:`), GitHub 프로필 바로가기 링크
4. **Skills & Qualifications (`#skill`)**
   - 피부미용/메이크업 국가자격증, 도메인 지식, 영상 연출, AI/IT 직무 역량, HTML5 & CSS3
   - CSS 뱃지/태그(`#`) 스타일 UI 적용
5. **Projects / Media (`#project`)**
   - YouTube `<iframe>` 임베드를 활용한 영상 콘텐츠 섹션
   - K-Move 활동 및 팀 프로젝트 GitHub 연동

---

## 🎨 UI 및 스타일 특징

- **Typography & Font:** Google Fonts `Noto Sans KR` 적용
- **카드형 레이아웃:** 각 섹션별 독립된 카드 형태(`border-radius`, 여백) 레이아웃
- **뱃지형 스킬 태그:** 기술 및 자격증 목록을 `#태그` 형태의 라운드 뱃지(골드 포인트 컬러)로 시각화
- **미디어 연동:** YouTube 반응형 영상 임베드 및 동적 호버 인터랙션 구현

---

## 🛠 기술 스택 (Tech Stack)

| 구분 | 기술 |
| :--- | :--- |
| **Markup** | HTML5 |
| **Styling** | CSS3 (Google Fonts, Custom Icon Pseudo-elements) |
| **Media** | YouTube Embed Player API / iframe |
| **Hosting** | GitHub Pages |

---

## 📂 디렉터리 구조

```text
├── index.html        # 메인 이력서 페이지 마크업
├── hj.jpg            # 프로필 이미지
├── css/
│   └── style.css     # 레이아웃 및 컴포넌트 스타일시트
└── images/           # 연락처 리스트 아이콘 이미지
    ├── ico_mobile.png
    ├── ico_email.png
    └── ico_facebook.png
