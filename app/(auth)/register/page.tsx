import RegisterForm from '../_components/register-form';

export default function Register() {
  return (
    <div className="flex flex-col items-center max-w-sm">
      <h1 className="text-4xl mb-4 text-primary-500 font-semibold font-mono">
        Messalo
      </h1>
      <h2 className="text-center mx-10 mb-6">
        Đăng kí tài khoản Messalo để kết nối với ứng dụng Messalo Web
      </h2>
      <RegisterForm />
    </div>
  );
}
