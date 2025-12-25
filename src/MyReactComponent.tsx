import React, { useState } from 'react';
import { incrementCounter } from './utils';

interface MyReactComponentProps {
  label?: string;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export const MyReactComponent: React.FC<MyReactComponentProps> = ({
  label = 'Click me',
  variant = 'primary',
  disabled = false,
}) => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(incrementCounter(clickCount));
  };

  const btnClass = `btn btn-${variant}`;

  return (
    <button
      className={btnClass}
      disabled={disabled}
      onClick={handleClick}
      style={{
        padding: '8px 16px',
        fontSize: '14px',
        border: '2px solid',
        borderRadius: '4px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        fontWeight: 600,
        transition: 'all 0.2s ease',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        opacity: disabled ? 0.6 : 1,
        ...(variant === 'primary' && {
          backgroundColor: '#007bff',
          color: 'white',
          borderColor: '#0056b3',
        }),
        ...(variant === 'secondary' && {
          backgroundColor: '#6c757d',
          color: 'white',
          borderColor: '#545b62',
        }),
      }}
    >
      {label}
      {clickCount > 0 && (
        <span
          style={{
            fontSize: '12px',
            padding: '2px 6px',
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            borderRadius: '10px',
          }}
        >
          {clickCount}
        </span>
      )}
    </button>
  );
};

export default MyReactComponent;
