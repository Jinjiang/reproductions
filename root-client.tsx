import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './App';

const domNode = document.getElementById('root');

if (domNode) hydrateRoot(domNode, (<App />));
