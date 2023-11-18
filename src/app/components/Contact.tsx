"use client";

import { useImmer } from "use-immer";
import { useState } from "react";

import EmailResult from "./EmailResult";
import { emailFormType } from "../service/email";
import { sendContactMail } from "../service/sendContactMail";
import Image from "next/image";
import MoonLoadingSpinner from "./MoonLoadingSpinner";

const defaultForm = {
  from: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useImmer<emailFormType>(defaultForm);
  const [mailsending, setMailsending] = useState(false);
  const [sendResult, setSendResult] = useImmer({
    state: "",
    message: "",
  });
  const [showResult, setShowResult] = useState(false);

  const resultStyle = {
    position: "absolute" as const,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 10,
  };

  const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (mailsending) {
      return;
    }
    try {
      setMailsending(true);
      const data = await sendContactMail(form);
      setSendResult((draft) => {
        draft.state = "success";
        draft.message = data.message;
      });
      setMailsending(false);
      setForm(defaultForm);
    } catch (error: any) {
      setSendResult((draft) => {
        draft.state = "fail";
        draft.message = error.message;
      });
      setMailsending(false);
    }

    setShowResult(true);
    setTimeout(() => {
      setShowResult(false);
      setSendResult((draft) => {
        draft.state = "";
        draft.message = "";
      });
    }, 2000);
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((draft) => {
      draft.from = e.target.value;
    });
  };

  const handleSubject = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((draft) => {
      draft.subject = e.target.value;
    });
  };

  const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setForm((draft) => {
      draft.message = e.target.value;
    });
  };

  return (
    <div className="w-full px-4 flex justify-center items-center">
      <div className="w-96 h-80 flex flex-col justify-center items-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-white">
        <p className="text-3xl font-bold">CONTACT</p>
        <p className="mt-2 mb-4 text-gray-500">Thank you 🐰</p>
        <Image
          alt="잘부탁드립니다"
          src={"/images/익명이_찡긋.png"}
          width={200}
          height={200}
        />
      </div>
      <div className={`w-96 h-80 relative`}>
        {mailsending && (
          <div style={resultStyle}>
            <MoonLoadingSpinner />
          </div>
        )}
        <form
          onSubmit={handleSubmitForm}
          className={`p-4 ${
            mailsending || (showResult && sendResult.state === "fail")
              ? "opacity-50 pointer-events-none"
              : ""
          }`} // 로딩 중 폼 비활성화
        >
          <input
            id="from"
            type="text"
            placeholder="Your Email"
            className="w-full mb-4 px-2 rounded-sm border border-[#4f4a45]/40"
            onChange={handleEmail}
            value={form.from}
          />

          <input
            id="subject"
            type="text"
            placeholder="Subject"
            className="w-full mb-4 px-2 rounded-sm  border border-[#4f4a45]/60"
            onChange={handleSubject}
            value={form.subject}
          />

          <textarea
            id="message"
            className="w-full resize-none px-2 py-1 rounded-sm  border border-[#4f4a45]/60"
            placeholder="Message"
            rows={7}
            onChange={handleMessage}
            value={form.message}
          />
          <button
            type="submit"
            className="bg-[#2F4858] py-1 px-2 rounded-sm w-full font-semibold text-white"
          >
            Send Mail
          </button>
        </form>
        {showResult && (
          <div style={resultStyle}>
            <EmailResult
              isSucceed={sendResult.state === "success"}
              message={sendResult.message}
            />
          </div>
        )}
      </div>
    </div>
  );
}
