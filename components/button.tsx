import { ButtonHTMLAttributes } from 'react';
import cn from '~/utils/cn';

export type ButtonProps = {
  variant?: 'primary' | 'secondary';
  width?: 'full';
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  variant = 'primary',
  width,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'text-sm font-medium py-3 transition rounded-md',
        className,
        variant === 'primary' &&
          'bg-primary-500 hover:bg-primary-600 text-white',
        variant === 'secondary' && 'text-primary-500 border border-gray-200 hover:border-primary-300',
        width === 'full' && 'w-full',
      )}
    >
      {children}
    </button>
  );
}
