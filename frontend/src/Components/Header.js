"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from '../../public/logo.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full font-poppins">

      {/* Top Purple Bar - Responsive */}
      <div className="w-full bg-[#312c63] px-4 sm:px-6 md:px-8 py-2 flex flex-wrap items-center justify-end gap-3 sm:gap-4 md:gap-6 min-h-14">
        
        {/* Search - responsive width */}
        <div className="relative order-2 sm:order-1 w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search"
            className="w-full sm:w-48 md:w-56 lg:w-64 h-8 rounded-full bg-[#4a457a] text-white placeholder-gray-300 pl-8 pr-4 text-sm outline-none focus:ring-2 focus:ring-white/50"
          />
          <span className="absolute left-3 top-1.5 text-white text-sm">
            🔍
          </span>
        </div>

        {/* Login/Signup Links */}
        <div className="flex items-center gap-4 order-1 sm:order-2">
          <Link href="#" className="text-white text-sm hover:underline whitespace-nowrap">
            Login
          </Link>
          <Link href="#" className="text-white text-sm hover:underline whitespace-nowrap">
            Sign Up
          </Link>
        </div>
      </div>


      {/* Main Navbar */}
      <div className="w-full bg-white h-20 flex items-center justify-between px-4 sm:px-6 md:px-10 shadow-sm relative">

        {/* Logo - responsive width */}
        <div className="flex items-center">
          <Image
            src={logo}
            alt="NPIT Logo"
            width={250}
            height={60}
            className="w-[140px] sm:w-[180px] md:w-[220px] lg:w-[250px] h-auto"
            priority
          />
        </div>

        {/* Desktop Menu - hidden on mobile */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-8 text-gray-800 font-bold text-sm">
          <Link href="#" className="hover:text-[#312c63] transition-colors">About Us</Link>
          <Link href="#" className="hover:text-[#312c63] transition-colors">Academic</Link>
          <Link href="#" className="hover:text-[#312c63] transition-colors">Admission</Link>
          <Link href="#" className="hover:text-[#312c63] transition-colors">Resources</Link>
          <Link href="#" className="hover:text-[#312c63] transition-colors">Life At NPIT</Link>
          <Link href="#" className="hover:text-[#312c63] transition-colors">Contact Us</Link>
          <Link
            href="#"
            className="bg-[#312c63] text-white px-4 py-2 rounded-full hover:bg-[#4a457a] transition-colors"
          >
            Apply Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-[#312c63] transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-[#312c63] transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-[#312c63] transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-20 left-0 w-full bg-white shadow-lg p-4 flex flex-col gap-3 md:hidden z-50 border-t">
            <Link href="#" className="py-2 px-4 hover:bg-gray-100 rounded" onClick={() => setIsMenuOpen(false)}>About Us</Link>
            <Link href="#" className="py-2 px-4 hover:bg-gray-100 rounded" onClick={() => setIsMenuOpen(false)}>Academic</Link>
            <Link href="#" className="py-2 px-4 hover:bg-gray-100 rounded" onClick={() => setIsMenuOpen(false)}>Admission</Link>
            <Link href="#" className="py-2 px-4 hover:bg-gray-100 rounded" onClick={() => setIsMenuOpen(false)}>Resources</Link>
            <Link href="#" className="py-2 px-4 hover:bg-gray-100 rounded" onClick={() => setIsMenuOpen(false)}>Life At NPIT</Link>
            <Link href="#" className="py-2 px-4 hover:bg-gray-100 rounded" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
            <Link href="#" className="bg-[#312c63] text-white px-4 py-2 rounded-full text-center hover:bg-[#4a457a]" onClick={() => setIsMenuOpen(false)}>Apply Now</Link>
          </div>
        )}
      </div>

    </header>
  );
}