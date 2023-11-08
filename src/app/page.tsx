import Contact from "./components/Contact";
import TypingEffect from "./components/TypingEffect";

export default function Home() {
  return (
    <main className="flex min-h-screen max-w-3xl mx-auto flex-col items-center justify-center ">
      <TypingEffect
        text={"안녕하세요! 신입 프론트엔드 개발자 김제원입니다"}
        highlightText="김제원"
      />
      {/* {자기소개 한마디. 개발을 시작한 동기와 전하고 싶은 말 짧게} */}
      {/* about 프로필. 이름. 생년월일. 간단한 주소. 이메일 주소.. 최종 학력(~대학교 ~과). 깃허브, 블로그 주소.  */}
      {/* skill 기술스택.  */}
      {/* projects 카드 형태 그리드 박스 */}
      {/* contact 노드메일러 */}
      <Contact />
    </main>
  );
}
