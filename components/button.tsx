import { ButtonHTMLAttributes } from 'react';
import cn from '~/utils/cn';

export type ButtonProps = {
  variant?: 'primary' | 'secondary';
  width?: 'full';
  size?: 'large' | 'normal';
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  variant = 'primary',
  width,
  className,
  size = 'normal',
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'text-sm font-medium transition rounded-md',
        className,
        variant === 'primary' &&
          'bg-primary-500 hover:bg-primary-600 text-white',
        variant === 'secondary' &&
          'text-primary-500 border border-gray-200 hover:border-primary-300',
        width === 'full' && 'w-full',
        size === 'large' && 'px-10 py-3',
        size === 'normal' && 'px-6 py-2',
      )}
      {...props}
    >
      {children}
    </button>
  );
}
