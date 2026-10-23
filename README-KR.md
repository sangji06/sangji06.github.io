# Sangji Lee — Jekyll 홈페이지 (v18)

현재 v16의 **화이트 배경 · 주황색 포인트 · 720px 본문 폭 · News · Publications · Experience · Education · Honors & Awards** 디자인을 유지하면서 관리 구조만 Jekyll로 바꾼 프로젝트입니다.

## 수정할 위치

| 수정할 내용 | 파일 |
|---|---|
| 이름, 자기소개, 이메일, 링크, 마지막 업데이트 날짜 | `_data/profile.yml` |
| News 추가/변경 | `_data/news.yml` |
| 논문 추가/수정 | `_data/publications.yml` |
| 경력 | `_data/experience.yml` |
| 학력 | `_data/education.yml` |
| 수상 | `_data/honors.yml` |
| 글씨체, 색상, 간격, 크기 | `assets/css/style.css` |
| 사진·논문 썸네일 | `assets/images/` |
| CV | `assets/files/Sangji_Lee_CV.pdf` |

`_data/publications.yml`에서 `selected: true`이면 메인에도 노출되고, 모든 논문은 `publications.html`에 자동 표시됩니다. 저자를 추가하려면 `authors` 목록에 `name`, `me`, `equal_contribution`을 입력합니다. 논문 그림을 다른 포맷으로 바꾸면 `thumbnail` 경로를 같이 수정합니다.

## 로컬 실행

Ruby와 Bundler 설치 후 이 프로젝트 폴더에서 다음을 실행합니다.

```bash
bundle install
bundle exec jekyll serve
```

브라우저에서 `http://127.0.0.1:4000`을 엽니다. 첫 설치 시 의존성을 내려받아야 합니다. 단순히 `index.html`을 Finder에서 더블클릭하면 **Jekyll 변수들이 렌더링되지 않습니다**.

## GitHub Pages 배포

1. 현재 Private 저장소에서 변경사항을 보존하고, 별도 브랜치에서 먼저 시험합니다.
2. **기존 `.nojekyll` 파일이 있으면 반드시 삭제**합니다. 파일이 있으면 Jekyll 빌드가 건너뛰어질 수 있습니다.
3. 이 ZIP 파일의 *폴더 안에 있는 모든 파일과 폴더*를 저장소 루트에 복사합니다. 기존 루트의 `index.html`, `publications.html`을 새 파일로 교체합니다.
4. 이 구조는 별도 플러그인 없이 GitHub Pages 내장 Jekyll로 빌드할 수 있도록 작성했습니다. 무료 플랜에서 Private 저장소는 Pages 공개 배포가 지원되지 않으므로, 공개를 원하면 별도 Public 배포 저장소를 사용합니다.
5. `Settings → Pages`에서 `Deploy from a branch`, `main`, `/(root)`로 설정합니다.

## 게시 전 확인

- `assets/images/profile.jpg`와 논문 SVG 2개는 현재 기존의 임시 이미지입니다. 공개 전에 실제로 사용 허가된 이미지로 교체하세요.
- **CV PDF에는 연락처 전화번호가 들어 있습니다.** 공개용 CV로 교체할지 결정하세요.
- 이미지를 `assets/`에 옮겨도 공개 페이지에서 다운로드는 가능합니다. 원본 고해상도 파일은 Public 저장소에 업로드하지 않는 것이 좋습니다.
- 과거에 민감한 이미지를 업로드했다면, 기존 저장소를 그대로 Public으로 전환하지 않고 새 Public 저장소에 공개용 파일만 올리는 편이 안전합니다.
- v16의 `README-KR.md`나 이미지 경로 등을 그대로 남기면 혼란을 줄 수 있으니 프로젝트 전체를 정리하세요.

## 출처

Jekyll은 웹사이트 생성 도구입니다. 이번 Jekyll 전환은 기존 v16의 커스텀 HTML/CSS를 템플릿과 데이터 파일로 재구성했습니다. `ACKNOWLEDGEMENTS.md`에 초기 디자인 과정에서 참고했던 Academic Homepage 프로젝트를 명시했습니다.


## v18 변경 사항
- 프로필 사진 아래로 이메일(`geedons [at] gmail.com`)과 CV/Google Scholar/GitHub/LinkedIn 링크 이동.
- 이메일은 스팸 수집 완화를 위해 `[at]`으로 보여주며 클릭용 `mailto:` 링크는 사용하지 않음. 원본 이메일은 `_data/profile.yml`에 저장되어 있어 필요할 때 쉽게 바꿀 수 있음.
- Honors & Awards의 Honorable Mention에 `(Top 5%)` 추가.
- 데스크톱에서는 사진과 링크가 오른쪽에, 모바일에서는 소개 위에 배치됨.


## v19 업데이트
- 이메일 주소 옆 아이콘을 B. Rounded Solid 스타일로 변경했습니다. 주소 `[at]` 표기는 그대로입니다.
- 메인 `Publications`에서 **Selected (기본값)** / **All**을 누르면 목록을 전환합니다. 자바스크립트가 실행되지 않아도 Selected 2편은 보입니다.
- `_data/publications.yml`에서 `selected: true`로 대표 논문을 지정합니다. 전체 논문 페이지는 기존 `publications.html`로 유지됩니다.
- Publications 아래 `Patent`를 추가하고 `_data/patents.yml`에서 관리합니다. Patent는 출원 건이므로 번호 표기는 `No. 10-2025-0138818 · 2025`입니다.
- 맨 아래 `Teaching Assistant`를 추가하고 `_data/teaching.yml`에서 관리합니다. 담당 업무 설명은 넣지 않았습니다.
- 토글 동작은 `assets/js/publications-tabs.js`에서 담당합니다.
