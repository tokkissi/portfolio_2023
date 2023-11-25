# Portfolio (2023 Edition)
본 프로젝트는 김제원 개발 능력과 과거 진행했던 프로젝트를 소개하기 위한 개인 포트폴리오 웹사이트입니다

배포 URL: [https://portfolio-2023-tokkissi.vercel.app](https://portfolio-2023-tokkissi.vercel.app)  
![image](https://github.com/tokkissi/Command-Survival/assets/53216523/d551f6ca-bf90-47eb-aea0-a3767b038ebe)
<br />  

---
<br />

## 목차

1. [프로젝트 소개](#프로젝트-소개)
2. [사용한 기술 스택](#사용한-기술-스택)
3. [기능 설명 및 기능 별 시연 영상](#기능-설명-및-기능-별-시연-영상)
4. [개발자 정보](#개발자-정보)

<br />

---

## 프로젝트 소개

이 프로젝트는 TypeScript와 Next.js 13을 활용해 만든 개인 포트폴리오 웹사이트 입니다. 주요 기능으로는 타이핑 애니메이션, 3D 캐러셀, 이메일 연동, 마우스 클릭 효과 등이 있습니다

<br />

## 사용한 기술 스택

- Next.js 13
- TypeScript
- tailwind CSS

<br />

## 기능 설명 및 기능 별 시연 영상
- **타이핑 효과(TypingEffect)**: `setTimeout`을 활용해서 방문자에게 환영 인사말을 동적인 타이핑 효과로 표시합니다
  ![포트폴리오-타이핑효과](https://github.com/tokkissi/Command-Survival/assets/53216523/f0dc2e7c-4aa4-4307-841f-b9ca2502c92b)
<br />

- **주요 기술(MainSkills)**: 사용자가 스크롤하여 해당 섹션에 도달하면 `IntersectionObserver`와 `useEffect`, `setInterval`을 사용하여 기술 성취도만큼 원이 채워지도록 애니메이션을 표시합니다
  ![포트폴리오-메인스킬](https://github.com/tokkissi/Command-Survival/assets/53216523/8a140e15-0c60-463c-98fb-09080c57925e)
<br />

- **프로젝트(Projects)**: `useState`와 CSS의 `transform: translateX, translateY`를 이용해 3D 캐러셀을 구현하였습니다. 이는 외부 라이브러리 없이 구현되었습니다
![포트폴리오-프로젝트](https://github.com/tokkissi/Command-Survival/assets/53216523/03ed0138-1ed1-4629-8d46-a686b8e8ffc5)
<br />

- **연락처(Contact)**: `nodemailer` 라이브러리를 사용하여 이메일 전송 기능을 구현, 사용자가 바로 이메일을 보낼 수 있게 했습니다
![포트폴리오-메일전송](https://github.com/tokkissi/Command-Survival/assets/53216523/59338e1a-ea53-4b21-9b3e-024c5db8d9d4)
<br />

- **마우스 이펙트**: `react-tsparticles` 라이브러리를 사용하여 페이지 내에서 마우스 클릭 시 나타나는 시각적 이펙트를 추가했습니다
![포트폴리오-클릭효과](https://github.com/tokkissi/Command-Survival/assets/53216523/30b6cc05-7a44-43f3-b956-e78ce7df93d7)
<br />


<br />

## 개발자 정보

- 개발자: tokkissi
- 이메일: alal4674@gmail.com
- GitHub: https://github.com/tokkissi

이 프로젝트는 패키지 관리를 위해 npm 대신 yarn을 사용하였으며 Vercel을 통해 빌드 및 배포되었습니다.
