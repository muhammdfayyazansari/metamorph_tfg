import React from "react";


const OutlineButton = ({
  isIcon = false,
  icon: Icon, // React icon component
  image, // ✅ Next.js image
  isIconLeft = false,
  isIconRight = false,
  iconSize = "",
  textColor = "text-white",
  rounded = "rounded-[10px]",
  buttonText = "",
  height = "h-[40px]",
  width = "",
  fontWeight = "font-medium",
  fontSize = "text-[16px]",
  type = "button",
  onClick,
  px = "px-[14px] py-[10px]",
  disabled = false,
  bgImage, // ✅ allow custom background like FilledButton
  border = "1px solid rgba(255, 255, 255, 0.10)",
}) => {
  return (
    <button
      disabled={disabled}
      className={`cursor-pointer ${textColor} ${height} ${width} ${fontWeight} ${fontSize} text-center ${rounded} ${px} ${
        disabled ? "opacity-60" : ""
      } flex justify-center items-center`}
      type={type}
      onClick={onClick}
      style={{
        border: border,
        backgroundImage: bgImage
          ? bgImage
          : "linear-gradient(180deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.02) 100%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Left side */}
      {isIconLeft && (
        <>
          {isIcon && Icon && (
            <span className={`${buttonText ? "mr-[8px]" : "mr-0"}`}>
              <Icon className={iconSize} />
            </span>
          )}
          {isIcon && image && (
            <span className={`${buttonText ? "mr-[8px]" : "mr-0"}`}>
              <img src={image} alt="button-icon" width={20} height={20} />
            </span>
          )}
        </>
      )}

      {/* Text */}
      {buttonText && <span>{buttonText}</span>}

      {/* Right side */}
      {isIconRight && (
        <>
          {isIcon && Icon && (
            <span className={`${buttonText ? "ml-[8px]" : "ml-0"}`}>
              <Icon className={iconSize} />
            </span>
          )}
          {isIcon && image && (
            <span className={`${buttonText ? "ml-[8px]" : "ml-0"}`}>
              <img src={image} alt="button-icon" width={20} height={20} />
            </span>
          )}
        </>
      )}
    </button>
  );
};

export default OutlineButton;
