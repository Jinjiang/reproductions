import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './app';
import './mdx.css';

createRoot(document.getElementById('app')).render(<App />);