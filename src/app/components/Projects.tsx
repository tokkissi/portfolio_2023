import Carousel from "./Carousel";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projectList = [
    {
      title: "문어마켓",
      imageSrc: "/images/문어마켓_메인.png",
      description: `엘리스 부트캠프 첫번째 팀프로젝트. 식자재 쇼핑몰 웹사이트`,
      tech: "JavaScript, HTML5, CSS3, BULMA(CSS FrameWork)",
      githubLink: "https://github.com/tokkissi/elice-Pj-1-",
      myWork: "팀장, 기획, 메인 페이지, 상품 페이지, FE",
    },
    {
      title: "Trip Match",
      imageSrc: "/images/트립매치.png",
      description: `엘리스 부트캠프 두번째 팀프로젝트. 여행 동행 구인 웹사이트`,
      tech: "TypeScript, React, Redux, Styled Components, Node.js, Redis, express, Mongo DB, Swagger",
      githubLink: "https://github.com/tokkissi/team8282-tripMatch",
      myWork:
        "팀장, 기획, 로그인 및 회원가입, 좋아요 페이지, 공공 데이터 API, FE",
    },
    {
      title: "Command Survival",
      imageSrc: "/images/커맨드_서바이벌.png",
      description: `개인 프로젝트. AI 텍스트 게임 및 AI 이미지 생성 웹사이트`,
      tech: "Next.js 13, TypeScript, Mongo DB, Tailwind CSS, Next-Auth, React Query, ChatGPT API, DALL·E API, SpeechRecognition API",
      githubLink: "https://github.com/tokkissi/team8282-tripMatch",
      myWork: "All works(FE & BE), pc 및 모바일 반응형 UI",
    },
  ];

  const cloneProjectList = [
    {
      title: "자기소개 페이지",
      imageSrc: "/images/자기소개_페이지.png",
      description: `학습용 자기소개 페이지`,
      tech: "HTML5, CSS3",
      githubLink: "https://github.com/tokkissi/ElicePJ_intro-me-",
      myWork: "",
    },
    {
      title: "Apple 공식 홈페이지 클론",
      imageSrc: "/images/애플_클론_페이지.png",
      description: `앨리스 스터디 팀프로젝트`,
      tech: "HTML5, CSS3, JavaScript",
      githubLink: "https://github.com/tokkissi/Apple_web_page",
      myWork: "스터디장. 메인 페이지",
    },
    {
      title: "영화 평점 페이지",
      imageSrc: "/images/영화_페이지.png",
      description: `TMDB(영화평가 사이트) api를 사용하여 Next.js 13 페이지 만들어보기`,
      tech: "Next.js 13",
      githubLink: "",
      myWork: "",
    },
    {
      title: "드림코딩 note 클론",
      imageSrc: "/images/드림코딩_note.png",
      description: `드림코딩 Next.js 13 강의 중 note 클론`,
      tech: "Next.js 13, TypeScript, Tailwind CSS",
      githubLink: "",
      myWork: "",
    },
    {
      title: "드림코딩 blog 클론",
      imageSrc: "/images/드림코딩_blog.png",
      description: `드림코딩 Next.js 13 강의 중 blog 클론`,
      tech: "Next.js 13, TypeScript, Tailwind CSS",
      githubLink: "https://github.com/tokkissi/blog-clone-next.js",
      myWork: "",
    },
    {
      title: "드림코딩 instagram 클론",
      imageSrc: "/images/인스타그램.png",
      description: `드림코딩 Next.js 13 강의 중 instagram 클론`,
      tech: "Next.js 13, TypeScript, Tailwind CSS, swr, Next-Auth, Sanity",
      githubLink: "https://github.com/tokkissi/Nextjs13-Instantgram",
      myWork: "",
    },
    {
      title: "Next.js 13 학습용 게시판",
      imageSrc: "/images/게시판.png",
      description: `Next.js 개인 학습용으로 만든 CRUD 가능한 게시판`,
      tech: "Next.js 13, TypeScript, Tailwind CSS, Next-Auth, React query, Mongo DB",
      githubLink: "",
      myWork: "",
    },
  ];

  return (
    <div className="w-full mx-auto" id="projects">
      <p className="text-center text-3xl font-bold my-6">Projects</p>
      <p className="font-bold mb-4">주요 프로젝트</p>

      <Carousel>
        {projectList.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            imageSrc={project.imageSrc}
            description={project.description}
            githubLink={project.githubLink}
            myWork={project.myWork}
            tech={project.tech}
          />
        ))}
      </Carousel>
      <p className="mt-8 font-bold mb-4">
        학습용 토이 프로젝트 및 클론 프로젝트
      </p>
      <Carousel>
        {cloneProjectList.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            imageSrc={project.imageSrc}
            description={project.description}
            githubLink={project.githubLink}
            myWork={project.myWork}
            tech={project.tech}
          />
        ))}
      </Carousel>
    </div>
  );
}
