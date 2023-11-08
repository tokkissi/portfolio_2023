import { BiSolidUser } from "react-icons/bi";
import { FaBirthdayCake } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaGraduationCap } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { FaBloggerB } from "react-icons/fa";

export default function UserProfileInfo() {
  return (
    <div className="text-customBlack text-xs space-y-2 ml-32 h-full flex flex-col justify-center">
      <p className="flex items-center space-x-2">
        <BiSolidUser size={20} />
        <span>김제원</span>
      </p>
      <p className="flex items-center space-x-2">
        <FaBirthdayCake size={20} />
        <span>1990-06-20</span>
      </p>
      <p className="flex items-center space-x-2">
        <IoHome size={20} />
        <span>서울특별시 강동구</span>
      </p>
      <p className="flex items-center space-x-2">
        <IoMdMail size={20} />
        <span>alal4674@gmail.com</span>
      </p>
      <p className="flex items-center space-x-2">
        <FaGraduationCap size={20} />
        <span>강원대학교 화학공학과 졸업</span>
      </p>
      <p className="flex items-center space-x-2">
        <AiFillGithub size={20} />
        <a href="https://github.com/tokkissi">https://github.com/tokkissi</a>
      </p>
      <p className="flex items-center space-x-2">
        <FaBloggerB size={20} />
        <a href="https://tokkic.tistory.com">https://tokkic.tistory.com</a>
      </p>
    </div>
  );
}
