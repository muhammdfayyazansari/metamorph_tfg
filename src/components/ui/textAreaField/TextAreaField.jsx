

// import React, { useState } from "react";

// const TextAreaField = ({
//   register,
//   name,
//   label,
//   placeholder,
//   defaultValue = "",
//   errors = {},
//   validationRules = {},
//   width = "",
//   marginBottom = "",
//   rows = 4,
//   disabled = false,
//   onChange = () => {},
//   value = undefined,
//   maxLength,
// }) => {
//   const [isFocused, setIsFocused] = useState(false);
//   const [hasValue, setHasValue] = useState(Boolean(defaultValue || value));

//   const handleChange = (e) => {
//     onChange(e);
//     setHasValue(e.target.value.trim().length > 0);
//   };

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
//         className={`relative rounded-[12px] ${width} px-[14px] py-[10px] flex items-start ${
//           disabled ? "opacity-50" : ""
//         }`}
//         style={{
//           border: "1px solid #DFDFEA",
//           background: "#FFF",
//           boxShadow:
//             "0 6.65px 5.32px 0 rgba(26, 0, 108, 0.03), 0 2.767px 2.214px 0 rgba(26, 0, 108, 0.02), 0 1px 0 0 #FFF inset, 0 -3px 0 0 #DFDEFB inset",
//         }}
//       >
//         <textarea
//           id={name}
//           name={name}
//           rows={rows}
//           disabled={disabled}
//           defaultValue={defaultValue}
//           placeholder={placeholder}
//           className={`w-full resize-none outline-none border-none bg-transparent placeholder-gray-400 placeholder:text-[16px] font-medium transition-all duration-200 ${textColorClass}`}
//           {...(register ? register(name, validationRules) : {})}
//           onChange={handleChange}
//           value={value ?? undefined}
//           aria-invalid={errors[name] ? "true" : "false"}
//           aria-describedby={`${name}-error`}
//           maxLength={maxLength}
//           spellCheck="false"
//           onFocus={() => setIsFocused(true)}
//           onBlur={() => setIsFocused(false)}
//         />
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

// export default TextAreaField;


import React, { useState, useEffect } from "react";

const TextAreaField = ({
  register,
  name,
  label,
  placeholder,
  defaultValue = "",
  errors = {},
  validationRules = {},
  width = "",
  marginBottom = "",
  rows = 4,
  disabled = false,
  onChange = () => {},
  value = undefined,
  maxLength,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(Boolean(defaultValue || value));

  // Update hasValue whenever `value` changes (fixes color on form reset or autocomplete)
  useEffect(() => {
    setHasValue(Boolean(value && value.toString().trim() !== ""));
  }, [value]);

  const handleChange = (e) => {
    onChange(e);
    setHasValue(e.target.value.trim().length > 0);
  };

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
        className={`relative rounded-[12px] ${width} px-[14px] py-[10px] flex items-start ${
          disabled ? "opacity-50" : ""
        }`}
        style={{
          border: "1px solid #DFDFEA",
          background: "#FFF",
          boxShadow:
            "0 6.65px 5.32px 0 rgba(26, 0, 108, 0.03), 0 2.767px 2.214px 0 rgba(26, 0, 108, 0.02), 0 1px 0 0 #FFF inset, 0 -3px 0 0 #DFDEFB inset",
        }}
      >
        <textarea
          id={name}
          name={name}
          rows={rows}
          disabled={disabled}
          defaultValue={defaultValue}
          placeholder={placeholder}
          {...(register ? register(name, validationRules) : {})}
          onChange={handleChange}
          value={value ?? undefined}
          aria-invalid={errors[name] ? "true" : "false"}
          aria-describedby={`${name}-error`}
          maxLength={maxLength}
          spellCheck="false"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`w-full resize-none outline-none border-none bg-transparent placeholder-gray-400 placeholder:text-[16px] font-medium transition-all duration-200 ${textColorClass}`}
          style={{
            caretColor: "#000000", // Black cursor
          }}
        />
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

      {/* Autofill / browser suggestion styling */}
      <style jsx>{`
        textarea:-webkit-autofill {
          -webkit-box-shadow: 0 0 0px 1000px #fff inset !important;
          -webkit-text-fill-color: currentColor !important;
          caret-color: #000 !important;
        }
        textarea:-webkit-autofill:focus {
          -webkit-box-shadow: 0 0 0px 1000px #fff inset !important;
          -webkit-text-fill-color: currentColor !important;
          caret-color: #000 !important;
        }
      `}</style>
    </div>
  );
};

export default TextAreaField;
