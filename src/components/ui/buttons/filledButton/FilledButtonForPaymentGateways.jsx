import React from "react";


const FilledButtonForPaymentGateways = ({
  isIcon = false,
  icon: Icon,
  image,
  isIconLeft = false,
  isIconRight = false,
  iconSize = "",
  textColor = "bg-gradient-text-two",
  rounded = "rounded-[12px]",
  buttonText = "",
  height = "",
  width = "",
  fontWeight = "",
  fontSize = "",
  type = "button",
  onClick,
  px = "",
  disabled = false,
  bgImage = "",
}) => {
  const buttonStyle = bgImage
    ? {
        borderRadius: "12px",
        border: "1px solid rgba(3, 68, 157, 0.00)",
        borderTop: "none",
        background: bgImage || "var(--color-button-gradient)",
        boxShadow:
          "0 2.767px 2.214px 0 rgba(26, 0, 108, 0.02), 0 3px 3px 0 rgba(0, 0, 0, 0.04), 0 100px 80px 0 rgba(26, 0, 108, 0.05), 0 41.778px 33.422px 0 rgba(26, 0, 108, 0.05), 0 22.336px 17.869px 0 rgba(26, 0, 108, 0.04), 0 12.522px 10.017px 0 rgba(26, 0, 108, 0.04), 0 6.65px 5.32px 0 rgba(26, 0, 108, 0.03), 0 2.767px 2.214px 0 rgba(26, 0, 108, 0.02), 0 1px 0 0 #FFF inset, 0 -3px 0 0 #03449D inset",
      }
    : {
        borderRadius: "12px",
        border: "1px solid #DFDFEA",
        background: "#FFF",
        boxShadow:
          "0 2.767px 2.214px 0 rgba(26, 0, 108, 0.02), 0 3px 3px 0 rgba(0, 0, 0, 0.04), 0 100px 80px 0 rgba(26, 0, 108, 0.05), 0 41.778px 33.422px 0 rgba(26, 0, 108, 0.05), 0 22.336px 17.869px 0 rgba(26, 0, 108, 0.04), 0 12.522px 10.017px 0 rgba(26, 0, 108, 0.04), 0 6.65px 5.32px 0 rgba(26, 0, 108, 0.03), 0 2.767px 2.214px 0 rgba(26, 0, 108, 0.02), 0 1px 0 0 #FFF inset, 0 -3px 0 0 #DFDEFB inset",
      };

  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={`cursor-pointer flex justify-center items-center gap-2 ${height} ${width} ${rounded} ${px} ${fontWeight} ${fontSize} ${
        disabled ? "opacity-60 cursor-not-allowed" : ""
      } transition-all duration-200 hover:opacity-90`}
      style={buttonStyle}
    >
      {/* Left Icon */}
      {isIconLeft &&
        isIcon &&
        (Icon ? (
          <Icon className={iconSize} />
        ) : (
          <img src={image} alt="" width={20} height={20} />
        ))}

      {/* ✅ Text with Gradient Mask */}
      {buttonText && <span className={`${textColor}`}>{buttonText}</span>}

      {/* Right Icon */}
      {isIconRight &&
        isIcon &&
        (Icon ? (
          <Icon className={iconSize} />
        ) : (
          <img src={image} alt="" width={20} height={20} />
        ))}
    </button>
  );
};

export default FilledButtonForPaymentGateways;