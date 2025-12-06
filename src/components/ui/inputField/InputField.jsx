// import React, { useState } from "react";

// const InputField = ({
//   register,
//   name,
//   label,
//   placeholder,
//   defaultValue = "",
//   type = "text",
//   errors = {},
//   validationRules = {},
//   width = "",
//   marginBottom = "",
//   icon,
//   onIconClick,
//   isVisible = false,
//   setIsVisible,
//   disabled = false,
//   onChange = () => {},
//   value = undefined,
//   preIcon,
//   altText = "",
//   min,
//   max,
//   step,
// }) => {
//   const [isFocused, setIsFocused] = useState(false);
//   const [hasValue, setHasValue] = useState(Boolean(defaultValue || value));

//   const isDateOrTime =
//     type === "date" || type === "time" || type === "datetime-local";

//   const handleChange = (e) => {
//     onChange(e);
//     setHasValue(e.target.value.trim().length > 0);
//   };

//   const handleIconClick = () => {
//     if (type === "password" && setIsVisible) {
//       setIsVisible(!isVisible);
//     } else if (onIconClick) {
//       onIconClick();
//     }
//   };

//   const autoCompleteValue = type === "password" ? "new-password" : "off";

//   const textColorClass = hasValue ? "bg-gradient-text-two" : "text-[#011837]";

//   return (
//     <div className={marginBottom}>
//       {label && (
//         <label
//           htmlFor={name}
//           className="block mb-1 text-[16px] font-medium bg-gradient-text-one"
//         >
//           {label}
//         </label>
//       )}

//       <div
//         className={`relative h-[44px] rounded-[12px] ${width} px-[14px] flex items-center ${
//           disabled ? "opacity-50" : ""
//         }`}
//         style={{
//           border: "1px solid #DFDFEA",
//           background: "#FFF",
//           boxShadow:
//             "0 6.65px 5.32px 0 rgba(26, 0, 108, 0.03), 0 2.767px 2.214px 0 rgba(26, 0, 108, 0.02), 0 1px 0 0 #FFF inset, 0 -3px 0 0 #DFDEFB inset",
//         }}
//       >
//         {preIcon && (
//           <div className="mr-2 flex items-center justify-center flex-shrink-0">
//             <img src={preIcon} alt={altText || "icon"} width={20} height={20} />
//           </div>
//         )}

//         <input
//           id={name}
//           name={name}
//           disabled={disabled}
//           autoComplete={autoCompleteValue}
//           defaultValue={defaultValue}
//           type={type === "password" && isVisible ? "text" : type}
//           placeholder={placeholder}
//           {...(register ? register(name, validationRules) : {})}
//           onChange={handleChange}
//           value={value ?? undefined}
//           aria-invalid={errors[name] ? "true" : "false"}
//           aria-describedby={`${name}-error`}
//           spellCheck="false"
//           {...(min ? { min } : {})}
//           {...(max ? { max } : {})}
//           {...(step ? { step } : {})}
//           onFocus={() => setIsFocused(true)}
//           onBlur={() => setIsFocused(false)}
//           className={`font-medium outline-none border-none w-full bg-transparent placeholder-gray-400 placeholder:text-[16px] transition-all duration-200 ${textColorClass} 
//     ${type === "number" ? "no-spinner" : ""}`}
//         />

//         {!isDateOrTime && icon && (
//           <div
//             className="ml-2 flex items-center justify-center flex-shrink-0 cursor-pointer"
//             onClick={handleIconClick}
//           >
//             <img src={icon} alt={altText || "icon"} width={20} height={20} />
//           </div>
//         )}
//       </div>

//       {errors?.[name] && (
//         <span
//           id={`${name}-error`}
//           className="text-red-500 text-sm mt-1 block"
//           role="alert"
//         >
//           {errors[name]?.message}
//         </span>
//       )}
//     </div>
//   );
// };

// export default InputField;




// import React, { useState, useEffect } from "react";

// const InputField = ({
//   register,
//   name,
//   label,
//   placeholder,
//   defaultValue = "",
//   type = "text",
//   errors = {},
//   validationRules = {},
//   width = "",
//   marginBottom = "",
//   icon,
//   onIconClick,
//   isVisible = false,
//   setIsVisible,
//   disabled = false,
//   onChange = () => {},
//   value = undefined,
//   preIcon,
//   altText = "",
//   min,
//   max,
//   step,
// }) => {
//   const [isFocused, setIsFocused] = useState(false);
//   const [hasValue, setHasValue] = useState(Boolean(defaultValue || value));

//   // Update hasValue whenever `value` changes (fixes color on form reset)
//   useEffect(() => {
//     setHasValue(Boolean(value && value.toString().trim() !== ""));
//   }, [value]);

//   const isDateOrTime =
//     type === "date" || type === "time" || type === "datetime-local";

//   const handleChange = (e) => {
//     let val = e.target.value;

//     if (type === "number") {
//       // Allow only digits, optional + at start
//       val = val.replace(/[^+\d]/g, ""); // remove invalid chars
//       val = val.replace(/(?!^)\+/g, ""); // allow only one '+' at the start
//       val = val.slice(0, 15); // limit to 15 characters
//     }

//     e.target.value = val;
//     onChange(e);
//     setHasValue(val.trim().length > 0);
//   };

//   const handleKeyDown = (e) => {
//     if (type === "number") {
//       const allowedKeys = [
//         "Backspace",
//         "ArrowLeft",
//         "ArrowRight",
//         "Tab",
//         "Delete",
//       ];
//       if (!allowedKeys.includes(e.key) && !/^[0-9+]$/.test(e.key)) {
//         e.preventDefault();
//       }
//     }
//   };

//   const handleIconClick = () => {
//     if (type === "password" && setIsVisible) {
//       setIsVisible(!isVisible);
//     } else if (onIconClick) {
//       onIconClick();
//     }
//   };

//   const autoCompleteValue = type === "password" ? "new-password" : "off";
//   const textColorClass = hasValue ? "bg-gradient-text-two" : "text-[#011837]";

//   return (
//     <div className={marginBottom}>
//       {label && (
//         <label
//           htmlFor={name}
//           className="block mb-1 text-[16px] font-medium bg-gradient-text-one"
//         >
//           {label}
//         </label>
//       )}

//       <div
//         className={`relative h-[44px] rounded-[12px] ${width} px-[14px] flex items-center ${
//           disabled ? "opacity-50" : ""
//         }`}
//         style={{
//           border: "1px solid #DFDFEA",
//           background: "#FFF",
//           boxShadow:
//             "0 6.65px 5.32px 0 rgba(26, 0, 108, 0.03), 0 2.767px 2.214px 0 rgba(26, 0, 108, 0.02), 0 1px 0 0 #FFF inset, 0 -3px 0 0 #DFDEFB inset",
//         }}
//       >
//         {preIcon && (
//           <div className="mr-2 flex items-center justify-center flex-shrink-0">
//             <img src={preIcon} alt={altText || "icon"} width={20} height={20} />
//           </div>
//         )}

//         <input
//           id={name}
//           name={name}
//           disabled={disabled}
//           autoComplete={autoCompleteValue}
//           defaultValue={defaultValue}
//           type={
//             type === "number"
//               ? "text"
//               : type === "password" && isVisible
//               ? "text"
//               : type
//           }
//           placeholder={placeholder}
//           {...(register ? register(name, validationRules) : {})}
//           onChange={handleChange}
//           onKeyDown={handleKeyDown}
//           value={value ?? undefined}
//           aria-invalid={errors[name] ? "true" : "false"}
//           aria-describedby={`${name}-error`}
//           spellCheck="false"
//           {...(min ? { min } : {})}
//           {...(max ? { max } : {})}
//           {...(step ? { step } : {})}
//           onFocus={() => setIsFocused(true)}
//           onBlur={() => setIsFocused(false)}
//           className={`font-medium outline-none border-none w-full bg-transparent placeholder-gray-400 placeholder:text-[16px] transition-all duration-200  ${textColorClass} 
//           ${type === "number" ? "no-spinner" : ""}`}
//         />

//         {!isDateOrTime && icon && (
//           <div
//             className="ml-2 flex items-center justify-center flex-shrink-0 cursor-pointer"
//             onClick={handleIconClick}
//           >
//             <img src={icon} alt={altText || "icon"} width={20} height={20} />
//           </div>
//         )}
//       </div>

//       {errors?.[name] && (
//         <span
//           id={`${name}-error`}
//           className="text-red-500 text-sm mt-1 block"
//           role="alert"
//         >
//           {errors[name]?.message}
//         </span>
//       )}
//     </div>
//   );
// };

// export default InputField;












import React, { useState, useEffect } from "react";

const InputField = ({
  register,
  name,
  label,
  placeholder,
  defaultValue = "",
  type = "text",
  errors = {},
  validationRules = {},
  width = "",
  marginBottom = "",
  icon,
  onIconClick,
  isVisible = false,
  setIsVisible,
  disabled = false,
  onChange = () => {},
  value = undefined,
  preIcon,
  altText = "",
  min,
  max,
  step,
  extraClasses = ""
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(Boolean(defaultValue || value));

  // Update hasValue whenever `value` changes (fixes color on form reset or autocomplete)
  useEffect(() => {
    setHasValue(Boolean(value && value.toString().trim() !== ""));
  }, [value]);

  const isDateOrTime =
    type === "date" || type === "time" || type === "datetime-local";

  const handleChange = (e) => {
    let val = e.target.value;

    if (type === "number") {
      val = val.replace(/[^+\d]/g, ""); // remove invalid chars
      val = val.replace(/(?!^)\+/g, ""); // allow only one '+' at start
      val = val.slice(0, 15); // limit length
    }

    e.target.value = val;
    onChange(e);
    setHasValue(val.trim().length > 0);
  };

  const handleKeyDown = (e) => {
    if (type === "number") {
      const allowedKeys = [
        "Backspace",
        "ArrowLeft",
        "ArrowRight",
        "Tab",
        "Delete",
      ];
      if (!allowedKeys.includes(e.key) && !/^[0-9+]$/.test(e.key)) {
        e.preventDefault();
      }
    }
  };

  const handleIconClick = () => {
    if (type === "password" && setIsVisible) {
      setIsVisible(!isVisible);
    } else if (onIconClick) {
      onIconClick();
    }
  };

  const autoCompleteValue = type === "password" ? "new-password" : "off";
  const textColorClass = hasValue ? "bg-gradient-text-two" : "text-[#011837]";

  return (
    <div className={marginBottom}>
      {label && (
        <label
          htmlFor={name}
          className="block mb-1 text-[16px] font-medium bg-gradient-text-one"
        >
          {label}
        </label>
      )}

      <div
        className={`relative rounded-xl ${width} px-3.5 flex items-center ${
          disabled ? "opacity-50" : ""
        }
        ${extraClasses ? extraClasses: "h-14"}`}
        style={{
          border: "1px solid #DFDFEA",
          background: "#FFF",
          boxShadow:
            "0 6.65px 5.32px 0 rgba(26, 0, 108, 0.03), 0 2.767px 2.214px 0 rgba(26, 0, 108, 0.02), 0 1px 0 0 #FFF inset, 0 -3px 0 0 #DFDEFB inset",
        }}
      >
        {preIcon && (
          <div className="mr-2 flex items-center justify-center flex-shrink-0">
            <img src={preIcon} alt={altText || "icon"} width={20} height={20} />
          </div>
        )}

        <input
          id={name}
          name={name}
          disabled={disabled}
          autoComplete={autoCompleteValue}
          defaultValue={defaultValue}
          type={
            type === "number"
              ? "text"
              : type === "password" && isVisible
              ? "text"
              : type
          }
          placeholder={placeholder}
          {...(register ? register(name, validationRules) : {})}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={value ?? undefined}
          aria-invalid={errors[name] ? "true" : "false"}
          aria-describedby={`${name}-error`}
          spellCheck="false"
          {...(min ? { min } : {})}
          {...(max ? { max } : {})}
          {...(step ? { step } : {})}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={{
            caretColor: "#000000", // <-- Black cursor always
          }}
          className={`font-medium outline-none border-none w-full bg-transparent placeholder-gray-400 placeholder:text-[16px] transition-all duration-200 ${textColorClass} 
          ${type === "number" ? "no-spinner" : ""} `}
        />

        {!isDateOrTime && icon && (
          <div
            className="ml-2 flex items-center justify-center flex-shrink-0 cursor-pointer"
            onClick={handleIconClick}
          >
            <img src={icon} alt={altText || "icon"} width={20} height={20} />
          </div>
        )}
      </div>

      {errors?.[name] && (
        <span
          id={`${name}-error`}
          className="text-red-500 text-sm mt-1 block"
          role="alert"
        >
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
};

export default InputField;
