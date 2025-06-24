interface Props {
  id: "email" | "password" | "confirmPassword";
  type: "email" | "password";
  label: string;
}

const AuthInput = ({ id, type, label }: Props) => {
  return (
    <div
      tabIndex={0}
      className="relative flex flex-col border px-4 pt-6 pb-2 rounded-md focus-within:ring-2 focus-within:ring-blue-500"
    >
      <input className="peer focus:outline-none" id={id} type={type} />
      <label
        className="absolute left-4 top-4 text-m text-gray-500 transition-all peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-500"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

export default AuthInput;
