import React from 'react';

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        padding: 16,
        border: '1px solid #e5e7eb',
        borderRadius: 8,
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        marginBottom: 16,
      }}
    >
      {children}
    </div>
  );
}
