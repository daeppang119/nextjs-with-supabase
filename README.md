# Next.js

## App router

- 파일명과 폴더명 컨벤션을 익히는 게 전부임
  - 파일명
    - page: layout에 감싸지는 영역으로, url에 따라서 바뀌는 영역
    - layout: page를 감싸는 영역으로, url에 따라서 바뀔 수도, 아닐 수도 있음.
    - route: next.js의 서버 코드를 작성하기 위한 엔드포인트들을 넣어두는 곳
  - 폴더명
    - app: app이 루트 경로임
    - 그냥 씀: 그 글자 그대로 경로가 되어버림
    - [id]: 대괄호 안에 key값을 쓰면, 해당 key값이 route parameter로 사용됨.
    - (public): 소괄호로 폴더명을 묶어주면, 해당 폴더명은 경로에 포함되지 않음
    - \_blabla: 언더스코어를 폴더명 아래 써주면, 해당 폴더는 아예 외부에서 접근이 안됨.
