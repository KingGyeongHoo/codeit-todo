# Codeit-Todo
<img width="1705" alt="스크린샷 2024-11-05 오후 1 50 59" src="https://github.com/user-attachments/assets/de60ed5c-d861-447d-83cb-fdf3da9d4ad1">



## 📃프로젝트 소개

코드잇 스프린트 과제 - **할 일 목록을 관리하는 To Do 서비스 with Next.js**

### 📆개발 기간
**2024.11.01 ~ 2024.11.05**

### 🤼‍♂️팀원
 - FE: 송경후

## ✏목차
1. **기술 스택**
2. **주요 기능**
3. **링크**
4. **폴더 구조**

## 🛠기술 스택
- **Frontend**: <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"><img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"><img src="https://img.shields.io/badge/nextjs-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"><img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"><img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"><img src="https://img.shields.io/badge/zustand-3178C6?style=for-the-badge&logo=&logoColor=white">
- **Deployment**: <img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">
- **Other Tools**: <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"><img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
## 💻주요 기능
### 헤더
 - **메인 화면으로 이동**
   - 로고를 클릭하면 메인 화면(/)으로 이동합니다
### 메인 페이지
 - **할 일 목록 보기**
   - 서버에 저장되어 있는 할 일 데이터를 받아와 화면에 렌더링합니다
   - 진행 중인 할 일과 완료된 할 일을 나누어 볼 수 있습니다.
   - 각 할 일 목록을 클릭하면 할 일 세부 정보로 이동합니다
 - **한 일 체크 및 체크 해제**
   - REST API의 PATCH 메서드를 이용해 할 일 목록의 체크 버튼을 클릭하면 체크 표시가 되면서 완료 상태가 됩니다
   - 반대 기능 역시 동작합니다
 - **할 일 등록**
   - 상단 입력창에 할 일 텍스트를 입력하고 추가하기 버튼을 클릭하거나 엔터를 치면 할 일을 새로 생성합니다
   - 할 일을 입력하지 않을 경우 등록이 불가능합니다
### 상세 페이지
 - **할 일 정보 수정**
   - 할 일 제목을 클릭한 후 항목 수정이 가능합니다
   - 제목 옆 체크박스를 클릭해 할 일 상태(진행/완료)를 수정할 수 있습니다.
   - 메모를 추가할 수 있습니다
 - **이미지 등록 및 업로드**
   - 이미지 박스 하단의 버튼을 클릭해 이미지 업로드가 가능합니다
   - 파일 크기가 5MB를 초과하거나, 파일명이 영문이 아닌 경우 등록이 불가능합니다
 - **등록 및 삭제**
   - 수정 완료 버튼을 클릭하면 수정 사항이 반영되고, 할 일 목록 페이지로 이동합니다.
   - 삭제하기 버튼을 클릭하면 할 일 삭제가 가능하며, 삭제 후 할 일 목록 페이지로 이동합니다.
### Custom Hook
 - **useTodo**
   - todoList를 관리하는 데 필요한 기능들을 모은 Hook입니다
   - **getTodolist** : 전체 할 일 목록을 받아옵니다
   - **postTodoList** : 새로운 할 일을 등록합니다
   - **getTodolistItem** : 메인 페이지에서 클릭한 할 일 정보를 받아옵니다
   - **patchTodoListItem** : 할 일을 수정 후 등록합니다
   - **deleteTodoListItem** : 할 일을 삭제합니다
   - **uploadImage** : 이미지를 업로드합니다

## 📎링크
### [배포](https://codeit-todo-tau.vercel.app/)

## 📁폴더 구조
```
📦src
 ┃ ┣ 📂app
 ┃ ┃ ┣ 📂items
 ┃ ┃ ┃ ┗ 📂[itemID]
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📜layout.tsx
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂assets
 ┃ ┃ ┣ 📂icons
 ┃ ┃ ┃ ┣ 📜X.png
 ┃ ┃ ┃ ┣ 📜check.png
 ┃ ┃ ┃ ┣ 📜edit.png
 ┃ ┃ ┃ ┣ 📜no_img.png
 ┃ ┃ ┃ ┣ 📜plus.png
 ┃ ┃ ┃ ┣ 📜plus_black.png
 ┃ ┃ ┃ ┗ 📜todo_checked.png
 ┃ ┃ ┗ 📂images
 ┃ ┃ ┃ ┣ 📜done.png
 ┃ ┃ ┃ ┣ 📜done_nothing.png
 ┃ ┃ ┃ ┣ 📜logo.png
 ┃ ┃ ┃ ┣ 📜logo_text.png
 ┃ ┃ ┃ ┣ 📜memo.png
 ┃ ┃ ┃ ┣ 📜todo.png
 ┃ ┃ ┃ ┗ 📜todo_nothing.png
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📜Button.tsx
 ┃ ┃ ┣ 📜CheckButton.tsx
 ┃ ┃ ┣ 📜InputBar.tsx
 ┃ ┃ ┗ 📜ItemList.tsx
 ┃ ┣ 📂css
 ┃ ┃ ┣ 📜global.css
 ┃ ┃ ┗ 📜tailwind.css
 ┃ ┣ 📂hooks
 ┃ ┃ ┗ 📜useTodo.ts
 ┃ ┣ 📂store
 ┃ ┃ ┗ 📜useDataStore.ts
 ┃ ┣ 📂types
 ┃ ┃ ┣ 📜component.d.ts
 ┃ ┃ ┗ 📜data.d.ts
 ┃ ┗ 📂widgets
 ┃ ┃ ┣ 📜Header.tsx
 ┃ ┃ ┣ 📜Input.tsx
 ┃ ┃ ┣ 📜Memo.tsx
 ┃ ┃ ┣ 📜Picture.tsx
 ┃ ┃ ┣ 📜TodoDetail.tsx
 ┃ ┃ ┗ 📜TodoLists.tsx
  ```
