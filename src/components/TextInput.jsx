import React from "react";

const TextInput = ({
  label,
  id,
  type,
  placeholder,
  value,
  handleFormValue,
  error,
}) => {
  return (
    <div>
      <header className="flex justify-between items-center gap-2 mb-4">
        <label htmlFor={id} className="text-lg leading-4 text-darkGrey">
          {label}
        </label>
        {error ? (
          <p className="hidden md:block text-[0.75rem] text-red-500">{error}</p>
        ) : null}
      </header>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        name={id}
        value={value}
        onChange={handleFormValue}
        className="textInput h-[72px] w-full rounded-lg bg-[#f4f4f4] border-none outline-none px-3 text-[18px] md:text-[22px] text-lightGrey leading-5 font-medium"
      />
    </div>
  );
};

export default TextInput;
