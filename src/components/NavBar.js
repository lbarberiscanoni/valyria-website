// src/components/NavBar.js
"use client"

import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const pathname = usePathname();
  
  const isActive = (path) => {
    return pathname === path ? 'text-primary font-medium' : 'text-secondary hover:text-primary';
  };

  return (
    <nav className="py-4 border-b border-gray-200">
      <div className="container-2xl flex-between">
        {/* Logo */}
        <Link href="/" className="font-bold text-2xl text-primary">
          Valyria Studios
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-8">
          <Link href="/" className={`${isActive('/')} transition-colors duration-200`}>
            Home
          </Link>
          <Link href="/work" className={`${isActive('/work')} transition-colors duration-200`}>
            Work
          </Link>
          <Link href="/team" className={`${isActive('/team')} transition-colors duration-200`}>
            Team
          </Link>
          <Link href="/services" className={`${isActive('/services')} transition-colors duration-200`}>
            Services
          </Link>
        </div>
      </div>
    </nav>
  );
}