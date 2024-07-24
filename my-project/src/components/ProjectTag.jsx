import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-gray-900 border-primary-500"
    : "text-[#ADB7BE] border-slate-200 hover:border-white";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-1 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
