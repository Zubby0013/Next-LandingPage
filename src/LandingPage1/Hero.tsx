import mainpic from "../assets/mainimgs/istockphoto-950614324-612x612.jpg";
import mainpic2 from "../assets/mainimgs/Child4.jpg";
import BtnProps from "../Components/Props/BtnProps";
import { AiFillMessage } from "react-icons/ai";
import CardProps from "../Components/Props/CardProps";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdAnnouncement, MdOutlineSpatialTracking } from "react-icons/md"
import { FaShoppingCart } from "react-icons/fa";

const Hero = () => {
  let images = [mainpic, mainpic2];
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };

  return (
    <div className=" w-full overflow-hidden">
      <Slider {...settings} className="h-full">
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt=""
              className="w-full h-[85vh] object-cover darkk"
            />
          </div>
        ))}
      </Slider>

      <div className="w-[80%] flex justify-center items-center flex-col absolute top-[50%] left-[50%] doublet">
        <h1 className="text-[35px] lg:text-[50px] text-white md:text-[60px] font-bold text-center">
          Making Education Easier For Everyone
        </h1>
        <h3 className="text-center text-white lg:text-[22px] mb-5 ">
         Explore our range of services and features designed to support you. A goal to empower students and <b>YOUR</b> school with tools and resources to navigate the challenges of academic life more effectively. Learning how to leverage technology to enhance productivity, organization and learning outcomes. 
        </h3>
        <BtnProps text="Get Started" />
      </div>

      <div className="w-full bg-white flex justify-center items-center">
        <div className="w-[85%]  flex justify-center items-center flex-col">
          <div className="w-full py-[50px]   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="my-2 w-full flex justify-center items-center">
              <div className="my-2 w-[300px]  flex justify-center items-center">
                <CardProps
                title="Easy tracking"
                  text="Know which teacher and student needs rewarding with the awesome watchMan feature. You have them all in your palm. Track teachers' performances, track students' performances and also track the school's performances in terms of onboarding students and competitions."
                  icon={<MdOutlineSpatialTracking />}
                />
              </div>
            </div>
            <div className="my-2  w-full flex justify-center items-center">
              <div className="my-2 w-[300px]  flex justify-center items-center">
                <CardProps
                title="Super-easy communication!"
                  text="Post announcements as an admin or principal and get the message distributed to all. Also having features like 'Quick Chat' where a student/parent, teacher can communicate easily. Ask questions and get swift notifications on important messages."
                  icon={<AiFillMessage />}
                />
              </div>
            </div>
            <div className="my-2 w-full flex justify-center items-center">
              <div className="my-2 w-[300px]  flex justify-center items-center">
                <CardProps
                title="Personalzed store"
                  text="Create YOUR school's own personalized store where you can market your school items to enable easy purchase from parents and help the school's burse grow."
                  icon={<FaShoppingCart />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
