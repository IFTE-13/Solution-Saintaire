"use client"
import { useState } from 'react';
import Logo from '../../assets/logo.png'
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu, X } from 'lucide-react';

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20">
      <div className="py-5 relative bg-white/60 backdrop-blur-sm">
        <nav className="container mx-auto">
          <div className="flex items-center justify-between">
            <Link href={"/"} className='flex flex-row items-center gap-x-2'>
              <Image src={Logo} alt="Logo" height={40} width={40} className='cursor-pointer'/>
              <span className='text-xl font-semibold tracking-tight'>Solution Saintaire</span>
            </Link>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden z-30"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? 
                <X size={30} className="text-black" /> :
                <Menu size={30} className="text-black" />
              }
            </button>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <Link href={"/about"}>About</Link>
              <Link href={"/contact"}>Contact</Link>
            </nav>

            {/* Mobile Navigation with Blur Effect */}
            <div className={`
              absolute top-full left-0 right-0
              bg-white/90 backdrop-blur-md
              border-t border-gray-200/20
              shadow-lg md:hidden
              transition-all duration-300 ease-in-out
              ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}
            `}>
              <nav className="flex flex-col items-center py-8 gap-6">
                <Link 
                  href={"/about"}
                  className="text-black/70 hover:text-black transition-colors text-lg"
                >
                  About
                </Link>
                <Link 
                  href={"/contact"}
                  className="text-black/70 hover:text-black transition-colors text-lg"
                >
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};