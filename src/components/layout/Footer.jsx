import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-[#FFD700] w-full">
      {/* Top row: Brand + Socials */}
      <div className="max-w-[1440px] mx-auto px-6 flex justify-between items-center py-6">
        <div className="text-2xl font-bold">KyleCars.ke</div>
        <div className="flex gap-4 text-lg">
          <a href="#"><FaInstagram className="hover:text-white transition" /></a>
          <a href="#"><FaFacebookF className="hover:text-white transition" /></a>
          <a href="#"><FaTwitter className="hover:text-white transition" /></a>
          <a href="#"><FaGithub className="hover:text-white transition" /></a>
        </div>
      </div>

      {/* Divider line */}
      <div className="border-t border-gray-700 mx-6"></div>

      {/* Columns row */}
      <div className="max-w-[1440px] mx-auto px-6 py-8 flex justify-between gap-8">
        {/* Column 1: Our Cars */}
        <div className="flex-1 flex flex-col gap-2 min-w-[180px]">
          <h3 className="font-semibold text-lg">Our Cars</h3>
          <a href="#" className="hover:text-white transition">Luxury Sedans</a>
          <a href="#" className="hover:text-white transition">SUVs</a>
          <a href="#" className="hover:text-white transition">Sports Cars</a>
          <a href="#" className="hover:text-white transition">Electric Cars</a>
        </div>

        {/* Column 2: Services */}
        <div className="flex-1 flex flex-col gap-2 min-w-[180px]">
          <h3 className="font-semibold text-lg">Services</h3>
          <a href="#" className="hover:text-white transition">Car Financing</a>
          <a href="#" className="hover:text-white transition">Maintenance</a>
          <a href="#" className="hover:text-white transition">Custom Orders</a>
          <a href="#" className="hover:text-white transition">Test Drives</a>
        </div>

        {/* Column 3: Support */}
        <div className="flex-1 flex flex-col gap-2 min-w-[180px]">
          <h3 className="font-semibold text-lg">Support</h3>
          <a href="#" className="hover:text-white transition">FAQ</a>
          <a href="#" className="hover:text-white transition">Contact Us</a>
          <a href="#" className="hover:text-white transition">Warranty</a>
          <a href="#" className="hover:text-white transition">Customer Care</a>
        </div>

        {/* Column 4: Company */}
        <div className="flex-1 flex flex-col gap-2 min-w-[180px]">
          <h3 className="font-semibold text-lg">Company</h3>
          <a href="#" className="hover:text-white transition">About Us</a>
          <a href="#" className="hover:text-white transition">Press</a>
          <a href="#" className="hover:text-white transition">Events</a>
          <a href="#" className="hover:text-white transition">Careers</a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-4 py-4 text-center text-sm">
        &copy; 2025 KyleCars.ke - All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
