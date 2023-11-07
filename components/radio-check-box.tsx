import { InputHTMLAttributes, useId } from 'react';
import cn from '~/utils/cn';

export type RadioCheckBoxProps = {} & InputHTMLAttributes<HTMLInputElement>;

export default function RadioCheckBox({
  className,
  ...props
}: RadioCheckBoxProps) {
  const id = useId();

  return (
    <div className="inline-flex">
      <input type="radio" className="peer" hidden id={id} {...props} />
      <label
        htmlFor={id}
        className={cn(
          'inline-flex items-center justify-center w-4 h-4 rounded-full border-[1.5px] border-gray-300 transition hover:border-primary-500 cursor-pointer peer-checked:[&>*:first-child]:block peer-checked:border-primary-500',
          className,
        )}
      >
        <div className="w-2 h-2 transition-all hidden rounded-full bg-primary-500"></div>
      </label>
    </div>
  );
}
