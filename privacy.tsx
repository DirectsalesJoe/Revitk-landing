import React from 'react';
import { createRoot } from 'react-dom/client';
import { PrivacyPolicy } from './components/PrivacyPolicy';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<PrivacyPolicy />);
}
