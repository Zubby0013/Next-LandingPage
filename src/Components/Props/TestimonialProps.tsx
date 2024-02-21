import { FC } from "react";

interface iTestimonialProps {
  name?: string;
  job?: string;
  year?: string;
  img?: string;
}

const TestimonialProps: FC<iTestimonialProps> = ({ name, job, year, img }) => {
  return (
    <div>
      <div className="border-[2px] p-[20px] w-full flex justify-center items-start flex-col text-blue-950">
        <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          nostrum consequuntur animi vero expedita eos doloribus explicabo
          laudantium, tempore delectus amet similique eius illo provident quis
          saepe a, dolore corporis.
        </div>
      </div>
      <div className="w-full p-[20px]  flex  justify-start items-center flex-col text-blue-950">
        <div className="flex items-center gap-5 w-full">
          <div>
            <img
              src={img}
              alt=""
              className="py-2 px-2 rounded-full h-[100px] w-[100px]"
            />
          </div>
          <div className="">
            <p className="font-semibold">{name}</p>
            <p>{job}</p>
            <p>{year}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialProps;
