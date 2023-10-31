import React from "react";
import { Link } from "react-router-dom";
import { navItems } from "../../static/data";
import styles from "../../styles/styles";

const Navbar = ({ active }) => {
  return (
    <div className={`block 800px:${styles.noramlFlex}`}>
      {navItems &&
        navItems.map((i, index) => (
          <div className="flex">
            <Link
              to={i.url}
              className={`${
                active === index + 1
                  ? "text-[#000000]"
                  : " text-[#1f1c1c] 800px:text-[#fffafaba]"
              } pb-[30px] 800px:pb-0  px-7 cursor-pointer  font-bold font-Poppins}`}
            >
              {i.title}
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Navbar;
