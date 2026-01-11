import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen p-4 md:p-8 bg-slate-900 text-slate-50 font-sans">
      {/* 
        Simulating Next.js globals.css via scoped styles. 
        In a real Next.js app, these would often be in app/globals.css or CSS Modules.
      */}
      <style>{`
        .glass-card {
          background: rgba(30, 41, 59, 0.7);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .glass-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .gradient-text {
          background: linear-gradient(90deg, #60a5fa, #a78bfa, #f472b6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .badge-kling { background: #3b82f6; }
        .badge-runway { background: #8b5cf6; }
        .badge-veo { background: #ec4899; }
        
        .price-tag {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid #475569;
        }

        .step-number {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          font-weight: bold;
          flex-shrink: 0;
        }
      `}</style>
      
      <div className="max-w-6xl mx-auto">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;