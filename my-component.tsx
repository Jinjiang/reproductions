import React from 'react';
import type { ReactNode } from 'react';

export type MyComponentProps = {
  /**
   * sets the component children.
   */
  children: ReactNode;
};

export function MyComponent({ children }: MyComponentProps) {
  return (
    <div>
      {children}
    </div>
  );
}