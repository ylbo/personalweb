import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = React.useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="z-10 text-gray-500 flex justify-between items-center max-w-[1240px] mx-auto h-24 px-4 text-l">
      <h1 className="text-3xl font-bold primary-color ml-4">Tim Yang</h1>
      <ul className="hidden sm:flex">
        <li className="p-5">Home</li>
        <li className="p-5">Company</li>
        <li className="p-5">Resource</li>
        <li className="p-5">About</li>
        <li className="p-5">Contact</li>
      </ul>

      {/* className Mobile fisrt */}
      <div onClick={handleNav} className="block sm:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          nav
            ? "text-gray-300 fixed h-full left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#202121] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="text-3xl primary-color m-4">Tim Yangs</h1>
        <ul className="p-8 text-2xl">
          <li className="p-5">Home</li>
          <li className="p-5">Company</li>
          <li className="p-5">Resource</li>
          <li className="p-5">About</li>
          <li className="p-5">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
