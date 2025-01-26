import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <h1>Header</h1>
      {children}
    </div>
  );
}

export default Layout;