import React from 'react';

export default function Footer() {
  return (
    <footer className="text-center text-slate-400 text-sm p-4">
      <p>© 2024 LearnBloom Educational Platform. All rights reserved.</p>
      <div className="flex justify-center gap-6 mt-1">
        <a className="hover:text-primary transition-colors" href="#">Terms</a>
        <a className="hover:text-primary transition-colors" href="#">Privacy</a>
        <a className="hover:text-primary transition-colors" href="#">Accessibility</a>
      </div>
    </footer>
  );
}
