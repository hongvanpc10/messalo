import { InputHTMLAttributes } from 'react';
import cn from '~/utils/cn';

export type InputProps = {
  icon: string;
  className?: {
    input?: string;
    container?: string;
    icon?: string;
  };
} & InputHTMLAttributes<HTMLInputElement>;

export default function Input({ icon, className, ...props }: InputProps) {
  return (
    <div
      className={cn(
        'flex items-center border-b border-gray-200',
        className?.container,
      )}
    >
      <i className={cn(icon, 'mr-3 text-gray-700', className?.icon)}></i>
      <input
        className={cn('outline-none flex-1 text-sm py-2', className?.input)}
        {...props}
      />
    </div>
  );
}
