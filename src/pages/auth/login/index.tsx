import AuthInput from '@/components/auth/AuthInput';

export default function Login() {
  return (
    <div className="flex flex-col">
      <div className="m-auto px-4">
        <AuthInput
          id="email"
          type="email"
          label="Email"
          placeholder="이메일을 입력하세요"
        />
        <AuthInput
          id="password"
          type="password"
          label="Password"
          placeholder="패스워드를 입력하세요"
        />
      </div>
    </div>
  );
}
