import React from "react";
import Image from "next/image";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* SEARCHBAR */}
      <div className="hidden md:flex">
        <Image src="/search.png" alt="search icon" width={14} height={14} />
        <input className="" type="text" placeholder="Search..." />
      </div>
      {/* ICONS AND USER */}
      <div className="flex items-center gap-6">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/message.png" alt="Messages" width={20} height={20} />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image
            src="/announcement.png"
            alt="Messages"
            width={20}
            height={20}
          />
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">JP Soro</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>
        <Image
          className="rounded-full"
          src="/avatar.png"
          alt="avatar"
          width={36}
          height={36}
        />
      </div>
    </div>
  );
};

export default Navbar;
