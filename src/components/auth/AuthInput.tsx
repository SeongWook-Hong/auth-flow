interface Props {
  id: 'email' | 'password' | 'confirmPassword';
  type: 'email' | 'password';
  label: string;
  placeholder?: string;
}

const AuthInput = ({ id, type, label, placeholder }: Props) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm" htmlFor={id}>
        {label}
      </label>
      <input
        className="border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        id={id}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default AuthInput;
