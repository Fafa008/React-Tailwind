import React from 'react'

const Nav = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-16 bg-white dark:bg-gray-900 z-50">
        <div className="flex items-center justify-between px-4">
          <h1 className="text-2xl font-bold">Logo</h1>
        </div>
      </nav>
    </>
  );
};

export default Nav