'use client';

import { Tab } from '@headlessui/react';
import Link from 'next/link';
import Button from '~/components/button';
import Input from '~/components/input';

export default function LogInForm() {
  return (
    <div className="bg-white rounded-sm shadow-lg w-full">
      <Tab.Group defaultIndex={0}>
        <Tab.List className='flex items-center border-b border-gray-200 text-sm relative font-medium after:content-[""] after:block after:absolute after:w-[1px] after:h-1/2 after:left-1/2 after:bg-gray-200'>
          <Tab className="flex-1 py-3.5 after:content-[''] after:absolute after:block ui-not-selected:after:bg-transparent after:h-[1px] after:w-1/2 after:-bottom-[1px] after:left-1/2 after:-translate-x-1/2 relative after:bg-gray-500 outline-none ui-selected:font-semibold ui-not-selected:text-gray-700 transition">
            VỚI EMAIL
          </Tab>
          <Tab className="flex-1 py-3.5 after:content-[''] after:absolute after:block ui-not-selected:after:bg-transparent after:h-[1px] after:w-1/2 after:-bottom-[1px] after:left-1/2 after:-translate-x-1/2 relative after:bg-gray-500 outline-none ui-selected:font-semibold ui-not-selected:text-gray-700 transition">
            VỚI SSO
          </Tab>
        </Tab.List>

        <Tab.Panels className="py-8 px-10">
          <Tab.Panel>
            <form>
              <div className="space-y-6">
                <Input placeholder="Email" type="email" icon="ri-mail-fill" />

                <Input
                  placeholder="Mật khẩu"
                  type="password"
                  icon="ri-lock-fill"
                />
              </div>

              <Button width="full" className="mt-10">
                Đăng nhập với mật khẩu
              </Button>

              <Button width="full" variant="secondary" className="mt-3">
                Đăng kí tài khoản mới
              </Button>

              <div className="flex justify-center mt-4">
                <Link
                  href={''}
                  className="text-xs transition hover:text-primary-500 hover:underline"
                >
                  Quên mật khẩu?
                </Link>
              </div>
            </form>
          </Tab.Panel>
          <Tab.Panel>123</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
