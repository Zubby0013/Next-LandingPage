import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaAngleDown, FaTimes } from "react-icons/fa";
import logo from "../../assets/next_logo-removebg-preview.png";
import { NavLink } from "react-router-dom";
import BtnProps from "../Props/BtnProps";

const Header = () => {
  const [drop, setDrop] = useState<boolean>(false);
  const [toggle2, setToggle2] = useState<boolean>(false);

  const toggleFunction2 = () => {
    setToggle2(!toggle2);
  };

  return (
    <div>
      <div className="h-[70px] w-full flex justify-center items-center shadow-md fixed top-0 z-10 bg-blue-950">
        <div className="h-[90%] w-[99%] flex justify-between items-center">
          <div className="w-full flex  justify-between items-center ">
            <div className="">
              <img
                src={logo}
                alt=""
                className="w-[150px] h-[68px] object-contain"
              />
            </div>
            <div className="hidden items-center text-[18px] gap-[30px] text-white md:flex">
              <NavLink to="/" className=" cursor-pointer">
                Home
              </NavLink>
              <NavLink to="/features" className=" cursor-pointer">
                Features
              </NavLink>
              <NavLink
                to=""
                className="flex gap-1 cursor-pointer transition-all duration-500"
              >
                Service
                {/* <FaAngleDown className="mt-[6px]" /> */}
                {/* {toggleFunction2 ? <FaAngleDown /> : <FaAngleUp />} */}
              </NavLink>
              <NavLink to="about" className=" cursor-pointer">
                About
              </NavLink>
              <NavLink to="/contact" className=" cursor-pointer">
                Contact
              </NavLink>
            </div>
            <div className=" w-[150px] hidden md:block">
              <button className=" py-2 px-3 bg-white rounded-md">
                Get Started
              </button>
            </div>
          </div>

          <div className="flex justify-center items-center gap-3">
            <div
              className="text-[18px] font-bold cursor-pointer relative md:hidden"
              onClick={() => {
                setDrop(!drop);
              }}
            >
              {drop ? (
                <FaTimes
                  className="text-[30px] text-white"
                  onclick={() => {
                    setDrop(true);
                  }}
                />
              ) : (
                <AiOutlineMenu
                  onclick={() => {
                    setDrop(false);
                  }}
                  className="text-[30px] text-white"
                />
              )}
            </div>
            {drop ? (
              <div className="md:hidden w-full h-[calc(100vh-70px)] bg-white text-black absolute top-[70px] right-[0] flex justify-center items-center">
                <nav className=" w-full h-full text-blue-950 border-gray-200 dark:bg-gray-900 dark:border-gray-700 mt-4 font-semibold">
                  <div className=" w-full md:block md:w-auto">
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive
                          ? "block py-2 px-3 text-white bg-blue-950 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                          : "block py-2 px-3"
                      }
                    >
                      Home
                    </NavLink>

                    <NavLink
                      to="/features"
                      className={({ isActive }) =>
                        isActive
                          ? "block py-2 px-3 text-white bg-blue-950 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                          : "block py-2 px-3"
                      }
                    >
                      Featurs
                    </NavLink>

                    <NavLink
                      to=""
                      className={({ isActive }) =>
                        isActive
                          ? "block py-2 px-3 text-white bg-blue-950 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                          : "block py-2 px-3"
                      }
                    >
                      Services
                    </NavLink>

                    <NavLink
                      to="/about"
                      className={({ isActive }) =>
                        isActive
                          ? "block py-2 px-3 text-white bg-blue-950 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                          : "block py-2 px-3"
                      }
                    >
                      About
                    </NavLink>

                    <NavLink
                      to="/contact"
                      className={({ isActive }) =>
                        isActive
                          ? "block py-2 px-3 text-white bg-blue-950 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                          : "block py-2 px-3"
                      }
                    >
                      Contact
                    </NavLink>
                    <div className=" w-[90%] mt-4 px-24">
                      <BtnProps text="Get Started" />
                    </div>
                  </div>
                </nav>
              </div>
            ) : null}

            {toggle2 ? (
              <div className="w-[300px] h-[200px] hidden bg-slate-100 border  rounded-lg justify-center items-center absolute top-[65px] right-[380px] md:flex">
                <div className=""></div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
