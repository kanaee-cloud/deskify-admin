/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { HiOutlineChevronRight } from "react-icons/hi";
import { FaLaptop } from "react-icons/fa";
import { BiSolidPackage } from "react-icons/bi";
import { IoLogOut } from "react-icons/io5";
import { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { logout } = useContext(AuthContext);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`h-full bg-[#212529] text-white border-r-[0.5px] border-[#E3B951] flex flex-col ${
        isCollapsed ? "w-16 p-3" : "w-64 p-4"
      } transition-all duration-200 ease-in-out`}
    >
      <div className={`flex justify-center gap-x-3 items-center`}>
        {!isCollapsed && (
          <div className="flex items-center">
            <h2 className="text-xl font-bold text-nowrap">Control Panel</h2>
          </div>
        )}
        <button
          onClick={toggleCollapse}
          className="focus:outline-none transition-all duration-300 ease-in-out hover:bg-gray-700 p-2 rounded"
        >
          {isCollapsed ? (
            <HiOutlineChevronRight size={20} />
          ) : (
            <HiOutlineChevronRight  size={20}  className="rotate-180" />
          )}
        </button>
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div className="flex flex-col gap-3 mt-2">
          <NavItem
            to="/packages"
            icon={<BiSolidPackage size={22} />}
            text="Packages"
            isCollapsed={isCollapsed}
          />
          <NavItem
            to="/laptop"
            icon={<FaLaptop size={22} />}
            text="Laptop"
            isCollapsed={isCollapsed}
          />
        </div>

        {/* Bottom nav item */}
        <div className="mt-auto">
          <NavItem
            to="#"
            icon={<IoLogOut size={22} />}
            text="Log Out"
            isCollapsed={isCollapsed}
            onClick={logout}
          />
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ to, icon, text, isCollapsed, onClick }) => {
  const className = `flex items-center p-2 font-medium border-b border-transparent ${
    isCollapsed ? "justify-start" : "justify-start pl-3"
  } hover:border-b-[#E3B951] hover:border-b-2 transition-all duration-200 ${
    !onClick ? "text-white" : "text-red-500 hover:text-red-400"
  }`;

  return onClick ? (
    <button onClick={onClick} className={className}>
      <span className="transition-transform duration-200">{icon}</span>
      {!isCollapsed && (
        <span className="ml-3 transition-opacity duration-300 text-nowrap">
          {text}
        </span>
      )}
    </button>
  ) : (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${className} ${isActive ? "bg-[#E3B951] rounded text-[#212529]" : ""}`
      }
    >
      <span className="transition-transform duration-200">{icon}</span>
      {!isCollapsed && (
        <span className="ml-3 transition-opacity duration-300 text-nowrap">
          {text}
        </span>
      )}
    </NavLink>
  );
};

export default Sidebar;