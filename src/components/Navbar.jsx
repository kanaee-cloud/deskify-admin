import { MdMonitor } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="h-[6vh] bg-[#212529] border-b-[0.5px] border-[#E3B951]">
        <div className="h-full w-64 p-5 flex items-center gap-x-2">
        <MdMonitor size={24} className="text-[#E3B951]" />
        <h1 className=" text-white text-xl font-medium">Deskify</h1>
      </div>
    </div>
  );
};

export default Navbar;
