'use client';

import { useState } from 'react';
import Button from '~/components/button';
import Image from '~/components/image';
import Input from '~/components/input';
import RadioCheckBox from '~/components/radio-check-box';

export default function RegisterForm() {
  const [step, setStep] = useState(1);

  return (
    <form className="bg-white rounded shadow-lg w-full py-8 px-10">
      {step === 1 && (
        <>
          <div className="space-y-4">
            <Input
              icon="ri-mail-fill"
              autoFocus
              placeholder="Email"
              type="email"
            />
            <Input placeholder="Mật khẩu" type="password" icon="ri-lock-fill" />
            <Input
              placeholder="Nhập lại mật khẩu"
              type="password"
              icon="ri-lock-fill"
            />
          </div>
          <Button
            type="button"
            className="mt-10"
            width="full"
            size="large"
            onClick={() => setStep(2)}
          >
            Tiếp tục
          </Button>
        </>
      )}

      {step === 2 && (
        <>
          <h2 className="text-lg font-medium mb-2 text-center">Mã xác thực</h2>
          <h3 className="text-center text-sm mb-6 mx-4">
            Nhập mã xác thực chúng tôi đã gửi qua email bạn đã đăng kí
          </h3>
          <input
            autoFocus
            placeholder="XXXXXX"
            type="email"
            className="text-xl py-2 text-center border-b border-gray-200 outline-none"
          />

          <div className="flex items-center space-x-2 mt-10">
            <Button
              type="button"
              width="full"
              variant="secondary"
              size="large"
              onClick={() => setStep(1)}
            >
              Quay lại
            </Button>
            <Button
              type="button"
              width="full"
              size="large"
              onClick={() => setStep(3)}
            >
              Tiếp tục
            </Button>
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <div className="flex flex-col mx-auto items-center">
            <Image
              alt="avatar"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJIyiiNbz3VC9Afr-LqWpcw7loxjPnacfZSA&usqp=CAU"
              className="h-20 w-20 rounded-full"
            />
            <button
              className="text-xs py-1 px-3 mt-2 text-primary-500 font-medium hover:border-primary-100 border border-transparent transition rounded"
              type="button"
            >
              Tải lên
            </button>
          </div>

          <div className="space-y-4 mt-4">
            <Input icon="ri-user-3-fill" autoFocus placeholder="Họ và tên" />

            <Input
              icon="ri-calendar-fill"
              onFocus={(e) => {
                e.target.type = 'date';
                e.target.focus();
              }}
              placeholder="Ngày sinh"
            />

            <div>
              <label className="text-sm inline-block mb-2">Giới tính</label>
              <div className="flex items-center text-sm text-gray-600">
                <div className="flex items-center">
                  <RadioCheckBox
                    name="gender"
                    defaultChecked
                    value="male"
                    className="mr-2"
                  />
                  Nam
                </div>
                <div className="flex items-center ml-10">
                  <RadioCheckBox
                    name="gender"
                    value="female"
                    className="mr-2"
                  />
                  Nữ
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2 mt-10">
            <Button
              type="button"
              width="full"
              variant="secondary"
              size="large"
              onClick={() => setStep(1)}
            >
              Quay lại
            </Button>
            <Button width="full" size="large">
              Tiếp tục
            </Button>
          </div>
        </>
      )}
    </form>
  );
}
