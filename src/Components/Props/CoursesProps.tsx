import { FC } from "react";
import BtnProps from "./BtnProps";

interface iCourseProps {
  text: string;
  img?: string;
}

const CoursesProps: FC<iCourseProps> = ({ text, img }) => {
  return (
    <div>
      <div className="w-[100%] bg-gray-50  flex justify-start items-center flex-col border rounded-md hover:shadow-xl">
        <div className="w-full h-[250px] md:h-[350px]">
          <img
            src={img}
            alt=""
            className="object-cover rounded-tl-md rounded-tr-md w-full h-full"
          />
        </div>
        <div className="w-full p-[15px]">
          <h1 className="font-semibold text-[18px] mb-2 text-blue-950">
            {text}
          </h1>
          <div className="flex items-center gap-5 mb-2">
            <p className="font-semibold text-blue-950">
              Duration: <span className="font-medium">18</span>
            </p>
            <p className=" font-semibold text-blue-950">
              Sit Available: <span className="font-medium">25</span>
            </p>
          </div>
          <div className="mb-5 italic text-blue-950">
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

export default CoursesProps;
