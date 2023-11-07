import NextImage, { ImageProps as NextImageProps } from 'next/image';
import cn from '~/utils/cn';

export interface ImageProps extends NextImageProps {}

export default function Image({ className, ...props }: NextImageProps) {
  return (
    <NextImage
      {...props}
      className={cn(
        'object-cover',
        !className?.includes('w-') && 'w-full',
        !className?.includes('h-') && 'h-auto',
        className,
      )}
      width={100}
      height={100}
    />
  );
}
