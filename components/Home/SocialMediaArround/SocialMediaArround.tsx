import React from "react";
import Image from "next/image";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";

export default function SocialMediaEmail(props: { finishedLoading: boolean }) {
  return (
    <>
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{
          y: {
            delay: props.finishedLoading ? 0 : 11,
            duration: props.finishedLoading ? 0 : 0.5,
          },
        }}
        className="z-10 fixed bottom-0 left-0  hidden lg:flex flex-row px-12 items-center justify-between  "
      >
        <div className="flex flex-col space-y-8 justify-center items-center">
          <div className="flex flex-col justify-center items-center space-y-5">
            {/* Phone Icon */}
            <div className="group w-6 h-6 text-gray-400 hover:text-AAsecondary relative fill-current hover:cursor-pointer">
              <Image src="/phone.svg" alt="Phone Icon" width={24} height={24} />
              <span className="absolute top-0 left-full whitespace-nowrap pl-2 hidden bg-transparent rounded group-hover:block">
                0813-9821-8203
              </span>
            </div>
          </div>
          <div className="h-28 w-0.5 bg-gray-400"></div>
        </div>
      </motion.div>

      {/* // ? Email Address bar               */}
      <motion.div
        initial={{ y: "170%" }}
        animate={{ y: "0%" }}
        // ! change delay from 0 to 11
        transition={{
          y: {
            delay: props.finishedLoading ? 0 : 11,
            duration: props.finishedLoading ? 0 : 0.5,
          },
        }}
        className="z-10 fixed bottom-0 -right-10 hidden lg:flex flex-row items-center justify-between"
      >
        <div className="flex flex-col space-y-24 justify-center items-center">
          {/* Open Email on click */}
          <motion.div
            initial={{ rotate: 90 }}
            whileHover={{
              y: -3,
              transition: { y: { duration: 0.1 }, rotate: { duration: 0 } },
            }}
            className=""
          >
            <a
              href="mailto:sarilovekhansa@gmail.com"
              target={"_blank"}
              rel="noreferrer"
            >
              <span className=" font-Header tracking-wider text-gray-400 hover:text-AAsecondary hover:cursor-pointer">
                sarilovekhansa<span className="text-AAsecondary">@</span>gmail
                <span className="text-AAsecondary">.</span>com
              </span>
            </a>
          </motion.div>

          <div className="h-24 w-0.5 bg-gray-400"></div>
        </div>
      </motion.div>
    </>
  );
}
