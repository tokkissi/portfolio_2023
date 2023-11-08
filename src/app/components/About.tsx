import Image from "next/image";
import UserProfileInfo from "./UserProfileInfo";

export default function About() {
  return (
    <div className="flex flex-col w-[736px] h-[330px] px-4 shadow-customBox gap-4">
      <p className="text-3xl font-bold mt-6 mx-auto">ABOUT</p>
      <div className="flex mb-auto">
        <Image
          className="ml-8"
          src={"/images/프로필_사진.jpg"}
          alt="프로필 사진"
          width={200}
          height={200}
        />
        <div>
          <UserProfileInfo />
        </div>
      </div>
    </div>
  );
}
