import { FC, ReactNode } from "react";

interface iStatsProps {
  text: string;
  number: number;
  icon: ReactNode;
}

const StatsProps: FC<iStatsProps> = ({ text, number, icon }) => {
  return (
    <div>
      <div className=" flex justify-center items-center flex-col text-[35px] md:text-[30px] lg:text-[40px]">
        <div>{icon}</div>
        <div>{number}</div>
        <div>{text}</div>
      </div>
    </div>
  );
};

export default StatsProps;
