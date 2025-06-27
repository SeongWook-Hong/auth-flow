import { useState } from "react";
import AuthInput from "@/components/auth/AuthInput";
import Visible from "@/assets/icons/visible.svg";
import Unvisible from "@/assets/icons/unvisible.svg";

interface Props {
  id: "email" | "password" | "confirmPassword";
  label: string;
}

const PasswordInput = ({ id, label }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };
  return (
    <AuthInput id={id} type={isVisible ? "email" : "password"} label={label}>
      {isVisible ? (
        <Visible className="absolute right-4 top-4" onClick={handleClick} />
      ) : (
        <Unvisible className="absolute right-4 top-4" onClick={handleClick} />
      )}
    </AuthInput>
  );
};

export default PasswordInput;
