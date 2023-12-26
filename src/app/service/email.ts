// nodemailr 를 세팅하고 form 데이터를 인자로 받아 세팅한 노드메일러를 실행시키고 실행 응답 결과를 리턴하는 sendEmail함수

import nodemailer from "nodemailer";

export type emailFormType = {
  from: string;
  subject: string;
  message: string;
};

const trasnporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.AUTH_USER,
    pass: process.env.AUTH_PW,
  },
});

export function sendEmail(params: emailFormType) {
  return trasnporter.sendMail({
    from: params.from,
    to: process.env.AUTH_USER,
    subject: `[(구)포트폴리오] ${params.subject}`,
    html: `
    <h1>${params.subject}</h1>
    <div>${params.message}</div>
    <br/>
    <p>보낸 사람: ${params.from}</p>
    `,
  });
}
