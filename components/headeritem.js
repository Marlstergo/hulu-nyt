import React from "react";

function HeaderItem({ Icon, title }) {
  return (
    <div className="group flex mt-2 flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white ">
      <Icon className=" h-8 mb-1 animate-ping animate-spin animate-pulse " />
      <p className="opacity-0 group-hover:opacity-100 tracking-widest ">
        {title}
      </p>
    </div>
  );
}

export default HeaderItem;
