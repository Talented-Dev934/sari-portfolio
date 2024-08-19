import React from "react";
import Image from "next/image";
import GithubIcon from "../Icons/GithubIcon";
const ClickableIcon = (props) => {
  return (
    <a href={props.href} className="" target={"_blank"} rel="noreferrer">
      <props.Icon
        className={
          "w-5 h-5 text-gray-400 hover:text-AAsecondary fill-current hover:cursor-pointer"
        }
      />
    </a>
  );
};

export default function Fotter(props: {
  githubUrl: string;
  hideSocialsInDesktop: boolean;
}) {
  return (
    <div className="bg-AAprimary flex flex-col justify-center items-center py-8 space-y-4">
      {/* // ? Reach me at */}
      <div
        className={`flex flex-row space-x-8 ${
          props.hideSocialsInDesktop ? "lg:hidden" : ""
        }`}
      >
        <div className="group w-6 h-6 text-gray-400 hover:text-AAsecondary relative fill-current hover:cursor-pointer">
          <Image src="/phone.svg" alt="Phone Icon" width={24} height={24} />
          <span className="absolute top-0 left-full whitespace-nowrap pl-2 hidden bg-transparent rounded group-hover:block">
            0813-9821-8203
          </span>
        </div>
      </div>
      <a href={props.githubUrl} className="" target={"_blank"} rel="noreferrer">
        <div
          className="group flex flex-col font-mono justify-center items-center  text-gray-400 
    text-sm  space-y-2  "
        >
          <span className="group-hover:text-AAsecondary sm:text-sm text-xs">
            Built by Sari Purwaningsih
          </span>

          <span className="text-xs flex flex-row items-center space-x-2 group-hover:text-AAsecondary">
            <GithubIcon
              className={
                "w-4 h-4 text-gray-400 fill-current group-hover:text-AAsecondary"
              }
            />
            <span className="">Source code - Github</span>
          </span>
        </div>
      </a>
    </div>
  );
}
