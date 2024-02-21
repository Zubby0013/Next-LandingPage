import { FC } from "react";
import BtnProps from "./BtnProps";
import { AiFillWechat } from "react-icons/ai";

interface IstudentProps {
  img?: string;
  text?: string;
}

const StudentProps: FC<IstudentProps> = ({ img, text }) => {
  return (
    <div>
      <div className="w-[420px] m-2 md:w-full bg-white flex justify-start items-center flex-col border rounded-md ">
        <div className="w-full h-[250px] md:h-[300px] lg:w-[380px] relative group">
          <img
            src={img}
            alt=""
            className="object-cover rounded-tl-md rounded-tr-md w-full h-full"
          />
          <div className="hoverglass hidden group-hover:absolute group-hover:top-0 hover:left-0 group-hover:w-full group-hover:h-full  group-hover:flex group-hover:justify-center group-hover:items-center group-hover:text-[30px]">
            Hi
          </div>
        </div>
        <div className="w-full p-[15px] text-blue-950">
          <h1 className="font-semibold text-[18px] mb-2">{text}</h1>
          <div className="flex items-center gap-5 mb-2">
            <div className="font-semibold ">January 7, 2017</div>
            <div className=" font-semibold">Corporate</div>
            <div>
              <AiFillWechat />
            </div>
          </div>
          <div className="mb-5 italic">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perspiciatis, quia rerum qui iste soluta iure modi numquam pariatur
            fugiat.
          </div>
          <div>
            <BtnProps text="Read More" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProps;
