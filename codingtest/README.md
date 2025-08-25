## 반응형 코딩 테스트 (Next.js + Tailwind)

### 개요
- PRD에 따라 모바일 기준(`max-w-md`, 448px) 컨테이너로 레이아웃을 구성했습니다.
- 말풍선은 이미지 없이 CSS만으로 구현된 `components/SpeechBubble.tsx`를 사용합니다.
- 사주팔자 표는 `components/FourPillarsTable.tsx`로 컴포넌트화했고 더미 데이터를 렌더링합니다.
- 이미지가 필요한 위치는 코드에 `이미지 필요` 주석으로 표시하고, `public/README_IMAGES_PLACEHOLDER.txt`에 파일 경로 안내를 넣었습니다.

### 로컬 실행
```bash
npm install
npm run dev
# http://localhost:3000
```

### 빌드
```bash
npm run build && npm start
```

### Vercel 배포
1. 이 저장소를 GitHub에 푸시합니다.
2. Vercel에서 New Project → GitHub 연결 → 이 저장소 선택.
3. Framework preset: Next.js (기본값), 빌드 명령은 자동 인식됩니다.
4. 배포 후 나온 URL을 제출하세요.

### 구조
```
components/
  FourPillarsTable.tsx  # 사주팔자 표 컴포넌트
  SpeechBubble.tsx      # CSS-only 말풍선
pages/
  index.tsx             # 메인 페이지 (max-w-md 레이아웃)
styles/globals.css      # Tailwind 및 말풍선 꼬리 CSS
public/                 # 이미지 넣는 위치
```

### 접근성/반응형 메모
- 텍스트 기반 말풍선으로 확대/축소해도 글자가 깨지지 않고 꼬리가 상대 위치를 유지합니다.
- 표는 Grid로 작성되어 좁은 화면에서도 스크롤 없이 읽기 쉽게 유지됩니다.


