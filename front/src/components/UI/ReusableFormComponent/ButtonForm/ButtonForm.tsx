import React from "react";
import { IButtonForm } from "../FormInterface";

const ButtonForm: React.FC<IButtonForm> = ({ name, type }) => {
  return (
    <div className="flex flex-col mt-10 w-[240px]">
      <button
        className=" items-center text-center justify-center  py-[8px] px-[10px]  text-white  rounded-lg hover:shadow-lg hover:shadow-white cyGroteskLight uppercase"
        type={type}
      >
        {name}
      </button>
    </div>
  );
};

export default ButtonForm;
