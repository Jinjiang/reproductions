import { ReactNode } from 'react';
import { Button as BaseButton } from '@bitdesign/sparks.actions.button';
import styles from './button.module.scss';

export type ButtonProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Button({ children }: ButtonProps) {
  return (
    <BaseButton className={styles.button}>
      {children}
    </BaseButton>
  );
}
