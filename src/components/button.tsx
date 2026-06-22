import React from 'react';

export function Button({ children }: { children: React.ReactNode }) {
  return (
    <button
      style={{
        padding: '8px 16px',
        background: '#4f46e5',
        color: 'white',
        border: 'none',
        borderRadius: 6,
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  );
}
