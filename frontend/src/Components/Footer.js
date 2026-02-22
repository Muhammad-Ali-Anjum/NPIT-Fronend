"use client";

import React from "react";
import Image from "next/image";
import logo from '../image/logo.png'
import Link from "next/link";
import { Linkedin, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react";
// import { FaGoogle } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full">
      {/* ================= TOP SECTION ================= */}
      <div className="bg-gray-200 py-8 sm:py-10 px-5 sm:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          {/* LEFT SIDE */}
          <div className="text-center md:text-left">
            <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 mb-4">
              {/* Put your logo inside public folder and name it logo.png */}
              <Image
                src={logo}
                alt="logo"
                width={200}
                height={70}
                priority
              />
            </div>

            <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-md mx-auto md:mx-0 mb-4">
              Shaping future innovators through quality education,
              industry-focused programs, and academic excellence.
            </p>

            {/*Social Icons */}
            <div className="flex justify-center md:justify-start gap-4">
              <Link
                href="#"
                className="bg-white p-3 rounded-lg shadow hover:scale-110 transition"
              >
                <Linkedin size={20} className="text-[#0077B5]" />
              </Link>

              <Link
                href="#"
                className="bg-white p-3 rounded-lg shadow hover:scale-110 transition"
              >
                <Facebook size={20} className="text-[#1877F2]" />
              </Link>

              <Link
                href="#"
                className="bg-white p-3 rounded-lg shadow hover:scale-110 transition"
              >
                <Twitter size={20} className="text-[#1DA1F2]" />
              </Link>

              {/* <Link
                href="#"
                className="bg-white p-3 rounded-lg shadow hover:scale-110 transition"
              >
                <FaGoogle size={20} className="text-[#DB4437]" />
              </Link> */}
            </div>
          </div>

          {/* RIGHT SIDE - NEWSLETTER */}
          <div className="text-center md:text-right">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 text-center">
              Join Our Newsletter
            </h3>
            <p className="text-gray-600 text-sm sm:text-base mb-4 text-left">
              Subscribe to receive official updates on admissions,
              campus events, and academic offerings.
            </p>

            <div className="flex flex-col sm:flex-row md:justify-end gap-3 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900 w-full sm:w-72"
              />
              <button className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition w-full sm:w-auto mr-32">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM SECTION ================= */}
      <div className="bg-blue-950 text-white py-8 sm:py-10 px-5 sm:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/courses" className="hover:text-white">Courses</Link></li>
              <li><Link href="/admissions" className="hover:text-white">Admissions</Link></li>
              <li><Link href="/news" className="hover:text-white">News & Events</Link></li>
              <li><Link href="/alumni" className="hover:text-white">Alumni</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
            </ul>
          </div>

          {/* Academic */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Academic</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link href="/programs" className="hover:text-white">Academic Programs</Link></li>
              <li><Link href="/scholarships" className="hover:text-white">Scholarships</Link></li>
              <li><Link href="/fee-structure" className="hover:text-white">Fee Structure</Link></li>
              <li><Link href="/prospectus" className="hover:text-white">Prospectus (PDF)</Link></li>
              <li><Link href="/apply" className="hover:text-white">Apply Now</Link></li>
            </ul>
          </div>

          {/* Additional Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Additional Info</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms & Conditions</Link></li>
              <li><Link href="/faqs" className="hover:text-white">FAQs</Link></li>
              <li><Link href="/student-portal" className="hover:text-white">Student Portal</Link></li>
              <li><Link href="/support" className="hover:text-white">Help & Support</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Information</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-orange-400" /> Alamdar Chowk Skardu
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-green-400" /> +923555601122 | +923462717292
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-red-400" /> nextplannersl@gmail.com
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm mt-8 border-t border-blue-800 pt-6">
          © 2026 Next Planner Institute Of Technology. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;

