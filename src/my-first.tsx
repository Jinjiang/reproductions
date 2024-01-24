import type { ReactNode } from 'react';

export type MyFirstProps = {
  /**
   * sets the component children.
   */
  children?: ReactNode;
};

export function MyFirst({ children }: MyFirstProps) {
  return (
    <div>
      {children}
    </div>
  );
}
