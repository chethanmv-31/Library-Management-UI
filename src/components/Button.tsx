import React from "react";

interface PropTypes {
  buttonText?: string;
  buttonColor?: string;
  textColor?: string;
  width?: string;
  icon?: any;
  onClick?: () => void;
}

const Button = ({
  buttonText,
  buttonColor,
  textColor,
  width,
  icon,
  onClick
}: PropTypes) => {
  
  return (
    <p 
      onClick={onClick}
      style={{
        background: `${buttonColor}`,
        color: `${textColor}`,
        width: `${width}`,
      }}
      className={`h-[61px] text-[20px] hover:opacity-85 cursor-pointer font-semibold flex justify-around items-center rounded-md px-3`}
    >
      {buttonText}
      {icon && (
        <>
          <div className="border border-white h-full" />
          <span>{icon}</span>
        </>
      )}
    </p>
  );
};

export default Button;
