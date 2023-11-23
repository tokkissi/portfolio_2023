import About from "./components/About";
import Contact from "./components/Contact";
import HorizontalDottedLine from "./components/HorizontalDottedLine";
import Intro from "./components/Intro";
import MainSkills from "./components/MainSkills";
import Projects from "./components/Projects";
import TypingEffect from "./components/TypingEffect";

export default function Home() {
  return (
    <main className="flex min-h-screen max-w-3xl mx-auto flex-col items-center justify-center">
      <TypingEffect
        text={"안녕하세요! 신입 프론트엔드 개발자 김제원입니다"}
        highlightText="김제원"
      />
      <Intro />
      <HorizontalDottedLine />
      <About />
      <HorizontalDottedLine />
      <MainSkills />
      <HorizontalDottedLine />
      <Projects />
      <HorizontalDottedLine />
      <Contact />
    </main>
  );
}
