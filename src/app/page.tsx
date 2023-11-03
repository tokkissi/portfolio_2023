import TypingEffect from "./components/TypingEffect";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TypingEffect
        text={"안녕하세요! 신입 프론트엔드 개발자 김제원입니다"}
        highlightText="김제원"
      />
    </main>
  );
}
