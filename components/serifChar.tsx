import React from 'react';

interface SerifCharProps {
  children: React.ReactNode;
}

const SerifChar: React.FC<SerifCharProps> = ({ children }) => {
  return <span className="font-jacques-francois">{children}</span>;
};

export default SerifChar;