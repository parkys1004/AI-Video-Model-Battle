import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center mb-16 pt-8">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 gradient-text">
        AI Video Model Battle
      </h1>
      <p className="text-gray-400 text-lg">
        뮤직비디오 제작을 위한 Kling O1 vs Runway Gen-3 vs Google Veo 비교
      </p>
    </header>
  );
};

export default Header;