import { emailFormType } from "./email";
import { formSchema } from "./emailValidation";

// 이메일 폼을 입력 받아서 서버에서 유효성 검사 후, api를 요청하여, 응답 결과를 json으로 리턴하는 함수
// 응답 에러시, 에러 객체를 throw 한다. try catch 구문 안에서 실행 시키므로 바로 에러를 catch 가능하다
export async function sendContactMail(form: emailFormType) {
  if (!formSchema.isValidSync(form)) {
    throw new Error("보내실 이메일 양식을 다시 확인해주세요");
  }
  const resonse = await fetch("/api/sendmail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });
  const data = await resonse.json();
  if (!resonse.ok) {
    throw new Error(data.message || "서버 요청 실패");
  }
  return data;
}
