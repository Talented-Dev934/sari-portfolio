import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import ArrowIcon from "../../Icons/ArrowIcon";
import Company1 from "./Descriptions/Company1";
import Company2 from "./Descriptions/Company2";
import Company3 from "./Descriptions/Company3";
import Company4 from "./Descriptions/Company4";

export default function WhereIHaveWorked() {
  const GetDescription = () => {
    switch (DescriptionJob) {
      case "Senior Full Stack Developer":
        return <Company1 />;
      case "Full Stack Developer":
        return <Company2 />;
      case "Junior Full Stack Developer":
        return <Company3 />;
      case "Full Stack Developer Intern":
        return <Company4 />;
    }
  };
  const [DescriptionJob, setDescriptionJob] = React.useState(
    "Senior Full Stack Developer"
  );
  return (
    <div
      data-aos="fade-up"
      className="flex flex-col items-center justify-center py-24 space-y-12 bg-AAprimary max-w-8xl"
    >
      {/* // ? Title "Where I've Worked" */}
      <section className="flex flex-row items-center">
        <div className="flex flex-row items-center">
          <ArrowIcon
            className={"flex-none h-4 md:h-6 w-4 md:w-5 text-AAsecondary"}
          />
          <span className="text-AAsecondary font-sans text-sm  sm:text-xl">
            {" "}
            02.
          </span>
        </div>

        <span className="text-gray-200 opacity-85 font-bold tracking-wider text-lg md:text-2xl px-3">
          Where I&apos;ve Worked
        </span>
        <div className="bg-gray-400 h-[0.2px] w-16 sm:w-44 md:w-80"></div>
      </section>
      {/* // ? Where I've Worked Content section */}
      <section
        className="flex flex-row sm:flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0
      justify-center md:justify-center items-center md:items-start min-h-[480px] sm:min-h-[240px]"
      >
        {/* // ? Left side of Where I've Worked, contains the bar and name of companies */}
        <CompaniesBar setDescriptionJob={setDescriptionJob} />
        {/* // ? Description for The job */}
        {GetDescription()}
      </section>
    </div>
  );
}

const CompaniesBar = (props) => {
  const [barPosition, setBarPosition] = React.useState<Number>(-8); // Green bar position by the default it's -20px
  const [barAbovePosition, setBarAbovePosition] = React.useState<Number>(0);
  const [companyNameBackgroundColorGreen, setCompanyNameBackgroundColorGreen] =
    React.useState<boolean[]>([
      true,
      false,
      false,
      false,
      // false,
    ]);
  const CompanyButton = (props) => {
    return (
      <button
        onClick={() => {
          setBarPosition(props.BarPosition);
          setBarAbovePosition(props.BarAvobePosition);
          props.setDescriptionJob(props.DescriptionJob);
          setCompanyNameBackgroundColorGreen(
            props.CompanyNameBackgroundColorGreen
          );
        }}
        className={`flex-none sm:text-sm text-xs text-center md:text-left  hover:text-AAsecondary hover:bg-ResumeButtonHover rounded  font-mono py-3 md:pl-6 md:px-4 md:w-44 sm:w-32 w-24 duration-500 ${
          companyNameBackgroundColorGreen[
            props.ButtonOrderOfcompanyNameBackgroundColorGreen
          ]
            ? "bg-ResumeButtonHover text-AAsecondary"
            : "text-gray-500"
        }`}
      >
        {props.CompanyName}
      </button>
    );
  };

  return (
    <div
      id="WhereIhaveWorkedSection"
      className=" flex flex-col md:flex-row lg:w-auto 
      overflow-auto scrollbar-hide md:overflow-hidden pb-4 md:pb-0 justify-start sm:justify-center items-start sm:items-center"
    >
      {/* // ? left bar Holder */}
      <div
        className=" hidden md:block bg-gray-500 relative h-0.5 w-34 md:h-[260px] -translate-y-[2px] md:w-0.5  
        rounded md:order-1 order-2  "
      >
        {/* // ? animated left bar */}
        <motion.div
          animate={{ y: barPosition }}
          // ref={barRef}
          className={`absolute w-10 h-0.5 md:w-0.5 md:h-16 rounded bg-AAsecondary `}
        ></motion.div>
      </div>
      {/* // ? Companies name as buttons */}
      <div className="flex flex-col md:order-2 order-1 space-y-1 w-24 sm:w-full">
        <div className="flex flex-col sm:flex-row md:flex-col">
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={0}
            CompanyName="PT.Inkordan International"
            BarPosition={2}
            BarAvobePosition={0}
            DescriptionJob="Senior Full Stack Developer"
            CompanyNameBackgroundColorGreen={[true, false, false, false]}
            setDescriptionJob={props.setDescriptionJob}
          />
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={1}
            CompanyName="PT.Inkordan International"
            BarPosition={67}
            BarAvobePosition={128}
            DescriptionJob="Full Stack Developer"
            CompanyNameBackgroundColorGreen={[false, true, false, false]}
            setDescriptionJob={props.setDescriptionJob}
          />
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={2}
            CompanyName="PT. Daehan Washing Factory"
            BarPosition={132}
            BarAvobePosition={256}
            DescriptionJob="Junior Full Stack Developer"
            CompanyNameBackgroundColorGreen={[false, false, true, false]}
            setDescriptionJob={props.setDescriptionJob}
          />
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={3}
            CompanyName="PT. Daehan Washing Factory"
            BarPosition={195}
            BarAvobePosition={384}
            DescriptionJob="Full Stack Developer Intern"
            CompanyNameBackgroundColorGreen={[false, false, false, true]}
            setDescriptionJob={props.setDescriptionJob}
          />
        </div>
        <div className="hidden sm:block md:hidden h-0.5 rounded bg-gray-500">
          <motion.div
            animate={{ x: barAbovePosition }}
            className="w-[128px] h-0.5 rounded bg-AAsecondary"
          ></motion.div>
        </div>
      </div>
    </div>
  );
};
