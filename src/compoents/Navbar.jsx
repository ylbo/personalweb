import React from "react";
import { AiOutlineMenu, AiOutLineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = React.useState(false);

  return (
    <div className="text-white text-6xl">
      <div className="block md:hidden">
        {nav ? <AiOutLineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
    </div>
  );
};

export default Navbar;
