import Image from "next/image";
import React from "react";

interface ProjectCardProps {
  title: string;
  imageSrc: string;
  description: string;
  githubLink: string;
  tech: string;
  myWork: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  imageSrc,
  description,
  githubLink,
  myWork,
  tech,
}) => {
  return (
    <div className="group relative flex rounded cursor-pointer items-center justify-center overflow-hidden">
      <div className="h-56 w-96 relative transition-shadow hover:shadow-xl hover:shadow-black/30">
        <Image
          className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
          src={imageSrc}
          alt={title}
          width={300}
          height={300}
        />
        {/* 그라데이션 배경 */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 group-hover:from-black/80 group-hover:to-black/80"></div>
        {/* hover시 보일 텍스트 */}
        <div className="absolute text-[0.6rem] text-white inset-0 flex translate-y-[100%] flex-col items-center justify-center px-5 text-center transition-all duration-500 group-hover:translate-y-0">
          <p className="font-bold text-base">{title}</p>
          <p className="mt-2 text-xs opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {description}
          </p>
          <p className="mt-2 font-bold mr-auto opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            #Tech
          </p>
          <p className="text-start mr-auto ml-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {tech}
          </p>
          {myWork && (
            <>
              <p className="mt-2 font-bold mr-auto opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                #My work
              </p>
              <p className="text-start ml-2 mr-auto opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {myWork}
              </p>
            </>
          )}
          <div className="h-2"></div>
          {githubLink && (
            <>
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-neutral-400 py-2 px-4 font-com text-sm capitalize shadow shadow-black/60 hover:bg-[#eee] hover:text-customBlack hover:font-bold"
              >
                Source Code
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
