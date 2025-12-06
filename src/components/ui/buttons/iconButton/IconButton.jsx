import React from "react";

const IconButton = ({ icon: Icon, size, color, onClick }) => {
  return (
    <button className="cursor-pointer bg-transparent p-0 text-transparent">
      <Icon onClick={onClick} className={`${size} ${color} text-center`} />
    </button>
  );
};

export default IconButton;
