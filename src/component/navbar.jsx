import React from "react";

const navbar = () => {
  return (
    <div className="text-gray flex justify-between items-center h-24">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">Hive</h1>
      <ul className="">
        <li>Home</li>
        <li>Tracking</li>
        <li>About Us</li>
        <li>Services</li>
      </ul>
    </div>
  );
};

export default navbar;
