
import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
      <div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary text-white">
        <span className="font-bold">SK</span>
      </div>
      <span>SEO Keyword Guru</span>
    </Link>
  );
};

export default Logo;
