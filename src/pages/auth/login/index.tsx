import AuthInput from "@/components/auth/AuthInput";
import PasswordInput from "@/components/auth/PasswordInput";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center gap-12  min-h-screen">
      <div className="flex flex-col gap-2 m-auto px-6 max-w-md min-w-80 w-full">
        <AuthInput id="email" type="email" label="Email" />
        <PasswordInput id="password" label="Password" />
      </div>
    </div>
  );
}
