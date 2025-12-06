const BgWhiteButton = ({
  buttonText = "Learn More",
  onClick,
  disabled = false,
  extraClass = "",
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
    relative
    flex items-center justify-center
    w-full
    rounded-xl
    font-semibold
    text-[18px]
    text-[#0A2A5E]
    bg-white
   shadow-[0px_-3px_0px_0px_#03449D_inset,
        0px_1px_0px_0px_#FFFFFF_inset,
        0px_2.77px_2.21px_0px_#1A006C05,
        0px_6.65px_5.32px_0px_#1A006C07,
        0px_12.52px_10.02px_0px_#1A006C09]
    transition-all duration-300
    ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
    ${extraClass}
    
    /* GRADIENT BORDER */
    p-px
    pb-0.5
    bg-[linear-gradient(180deg,#239CFF_0%,#03449D_100%)]
  `}
    >
      <span className="w-full py-2 h-full flex items-center justify-center bg-white rounded-xl">
        {buttonText}
      </span>
    </button>


  );
};

export default BgWhiteButton;
