import { FC } from "react";
import fb from "../../assets/fb.png";
import ig from "../../assets/ig.png";
import twitter from "../../assets/twitter.png";
import linkden from "../../assets/linkden.png";

interface iTeacherProps {
  text?: string;
  text2?: string;
  img?: string;
}

const TeacherProps: FC<iTeacherProps> = ({ text, text2, img }) => {
  return (
    <div>
      <div className="w-[420px] md:w-full bg-white  flex justify-start items-center flex-col border rounded-md hover:shadow-xl ">
        <div className="w-full h-[250px] md:h-[420px]">
          <img
            src={img}
            alt=""
            className="object-cover rounded-tl-md rounded-tr-md w-full h-full"
          />
        </div>
        <div className="w-full py-[8px] bg-blue-800 flex justify-center items-center flex-col">
          <h1 className="font-semibold text-[18px] text-white mb-2">{text}</h1>
          <div className="flex text-white items-center gap-5 mb-2">{text2}</div>
          <div className="mb-2 italic flex items-center transition-all duration-300">
            <div className="py-1 px-2 rounded-full hover:cursor-pointer hover:hoverbounce">
              <img src={fb} alt="" className="w-[35px] h-[35px] object-cover" />
            </div>
            <div className="py-1 px-2 rounded-full hover:cursor-pointer hover:hoverbounce">
              <img src={ig} alt="" className="w-[35px] h-[35px] object-cover" />
            </div>
            <div className="py-1 px-2 rounded-full hover:cursor-pointer hover:hoverbounce">
              <img
                src={twitter}
                alt=""
                className="w-[35px] h-[35px] object-cover  "
              />
            </div>
            <div className="py-1 px-2 rounded-full hover:cursor-pointer hover:hoverbounce">
              <img
                src={linkden}
                alt=""
                className="w-[35px] h-[35px] object-cover "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherProps;
