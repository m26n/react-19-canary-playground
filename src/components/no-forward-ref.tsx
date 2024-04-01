import { ComponentProps } from 'react';

interface Props extends ComponentProps<'div'> {}

export function NoForwardRef({ ...props }: Props) {
  return <div {...props}>hi there</div>;
}
