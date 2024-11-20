import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/logo.png';
import { FacebookIcon, InstagramIcon, TwitterIcon } from 'lucide-react';

const socialLinks = [
  { href: '#', label: 'Facebook', icon: <FacebookIcon />, color: 'hover:text-blue-700' },
  { href: '#', label: 'Instagram', icon: <InstagramIcon />, color: 'hover:text-red-500' },
  { href: '#', label: 'Twitter', icon: <TwitterIcon />, color: 'hover:text-blue-500' },
];

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container flex flex-col items-center justify-between p-4 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
        <Link href={"/"}>
          <Image
            src={Logo}
            alt='company logo'
            height={50}
            width={50}
          />
        </Link>

        <p className="text-sm text-gray-600">© Copyright 2021. All Rights Reserved.</p>

        <div className="flex -mx-2">
          {socialLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`mx-2 text-zinc-700 transition-colors duration-300 ${link.color}`}
              aria-label={link.label}
            >
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
