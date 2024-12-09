"use client"; // Add this at the top of the file to make it a Client Component

import React, { useState } from "react";
import Topbar from "../Topbar/topbar";
import Link from "next/link";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";



const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="">
      <Topbar />
      <div className="header w-full h-[78px] px-6">
  <div className="grid grid-cols-12 items-center">
    {/* Logo Section */}
    <div className="col-start-1 col-end-4 sm:col-end-3">
      <a href="#" className="logo text-lg font-bold">
        Bandage
      </a>
    </div>

    {/* Navigation Section */}
    <div className="col-start-4 col-end-13 sm:col-start-3 sm:col-end-12 flex justify-end md:justify-between">
      <div className="navigations flex items-center w-full bg-white justify-around relative">
        {/* Hamburger Menu */}
          <button className="menu-toggle lg:hidden sm:block  text-2xl"
          onClick={toggleMenu}>
          <RxHamburgerMenu className="text-[#23A6F0]" />

        </button>

        {/* Menu */}
        <nav className="md:hidden block sm:absolute top-6 -left-10 sm:w-full bg-white">
          <ul className={`menu flex gap-6 ${menuOpen ? "active" : ""}`}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li className="dropdown relative group">
              <a href="#pages" className="dropdown-toggle">
                Shop
              </a>
              <ul className="dropdown-menu absolute hidden group-hover:block bg-white shadow-lg mt-2">
                <li>
                  <a href="#page1" className="block px-4 py-2 hover:bg-gray-200">
                    Page 1
                  </a>
                </li>
                <li>
                  <a href="#page2" className="block px-4 py-2 hover:bg-gray-200">
                    Page 2
                  </a>
                </li>
                <li>
                  <a href="#page3" className="block px-4 py-2 hover:bg-gray-200">
                    Page 3
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Icons Section */}
      <div className="icon-menu flex gap-3 items-center ml-4">
        {/* Login/Register */}
        <p className="hidden md:flex gap-3">
          <Link href="" className="flex gap-1 items-center">
            <CiUser />
            Login
          </Link>
          / <Link href="">Register</Link>
        </p>

        {/* Icons */}
        <div className="icons flex gap-3 text-xl">
          <Link href="">
            <CiSearch />
          </Link>
          <Link href="">
            <LuShoppingCart />
          </Link>
          <Link href="">
            <CiHeart />
          </Link>
        </div>
      </div>
    </div>
  </div>

  {/* Mobile Menu */}
  {menuOpen && (
    <div className="md:hidden bg-white shadow-lg p-4">
      <ul className="menu flex flex-col gap-3">
        <li>
          <a href="#home">Home</a>
        </li>
        <li className="dropdown">
          <a href="#pages" className="dropdown-toggle">
            Shop
          </a>
          <ul className="dropdown-menu ml-4">
            <li>
              <a href="#page1">Page 1</a>
            </li>
            <li>
              <a href="#page2">Page 2</a>
            </li>
            <li>
              <a href="#page3">Page 3</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#blog">Blog</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  )}
</div>

    </header>
  );
};

export default Header;
