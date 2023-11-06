import { ReactNode } from 'react';
import Background from './_components/background';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col h-screen">
      <Background />
      <main className="h-full flex items-center justify-center">
        {children}
      </main>

      <ul className="flex text-xs py-12 text-primary-500 space-x-3 items-center justify-center">
        <li className="font-medium transition hover:underline cursor-pointer">Tiếng Việt</li>
        <li className='transition hover:underline cursor-pointer'>English</li>
      </ul>
    </div>
  );
}
