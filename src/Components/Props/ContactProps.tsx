import { FC, ReactNode } from "react";

interface iContactProps {
  maintext: string;
  sectext: string;
  trdtext: string;
  icon: ReactNode;
}
const ContactProps: FC<iContactProps> = ({
  maintext,
  sectext,
  trdtext,
  icon,
}) => {
  return (
    <div>
      <div className="flex justify-center items-center flex-col">
        <div className="mb-[40px] py-3 px-5 h-[100px] w-[100px] shadow-md border-blue-50 bg-blue-800 rounded-full flex justify-center items-center hover:border-[4px] text-[40px] text-white">
          {icon}
        </div>
        <div className="text-center text-blue-950">
          <div className="font-semibold text-[22px]">{maintext}</div>
          <div className="font-medium">{sectext}</div>
          <div className="font-medium">{trdtext}</div>
        </div>
      </div>
    </div>
  );
};

export default ContactProps;
