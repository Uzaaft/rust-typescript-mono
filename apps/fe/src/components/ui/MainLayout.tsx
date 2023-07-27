import React from 'react';
import { MainNav } from './MainNav';
import Search from './Search';
import UserNav from './UserNav';

interface Layout {
  children: React.ReactNode;
}

export default function MainLayout({ children }: Layout) {
  return (
    <>
      <div className="flex-col md:flex">
        {/** Nav -> TODO: move to layout.tsx */}
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <Search />
              <UserNav />
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
}
