// src/components/Layout.jsx
import { ReactNode } from 'react';
import SplashCursor from './SplashCursor';

export default function Layout({ children }) {
  return (
    <div className="relative w-full h-full min-h-screen z-[-10]">
      {/* Fluid Background - behind everything */}
      <SplashCursor />
      
      {/* Page Content - in front of the background */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}