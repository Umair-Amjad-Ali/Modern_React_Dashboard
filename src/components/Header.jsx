import React from "react";

const Header = ({ catagory, title }) => {
  return (
    <div>
      <div className="mb-0">
        <p className="text-gray-400">{catagory}</p>
        <p className="text-2xl font-extrabold tracking-tight text-gray-900 mb-4">
          {title}
        </p>
      </div>
    </div>
  );
};

export default Header;
