import { useState } from "react";

interface Props {
  id: "email" | "password" | "confirmPassword";
  type: "email" | "password";
  label: string;
}

const AuthInput = ({ id, type, label }: Props) => {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const isFloating = value.length > 0 || isFocused;
  return (
    <div
      tabIndex={0}
      className="relative flex flex-col border px-4 pt-6 pb-2 rounded-md focus-within:ring-2 focus-within:ring-blue-500"
    >
      <input
        className="peer focus:outline-none"
        id={id}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <label
        htmlFor={id}
        className={`absolute left-4 transition-all text-gray-500 ${
          isFloating ? "top-1 text-sm" : "top-4 text-base"
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default AuthInput;
