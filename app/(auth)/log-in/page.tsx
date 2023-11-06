import { Metadata } from 'next';
import LogInForm from '../_components/log-in-form';

export const metadata: Metadata = {
  title: 'Đăng nhập tài khoản Messalo',
};

export default function LogIn() {
  return (
    <div className="flex flex-col items-center max-w-sm">
      <h1 className="text-4xl mb-4 text-primary-500 font-semibold font-mono">
        Messalo
      </h1>
      <h2 className="text-center mx-10 mb-6">
        Đăng nhập tài khoản Messalo để kết nối với ứng dụng Messalo Web
      </h2>
      <LogInForm />
    </div>
  );
}
