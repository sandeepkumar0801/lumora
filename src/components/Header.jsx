"use client"; // Only needed if using Next.js App Router

import { useState, useEffect, useRef, useContext } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import gsap from "gsap";
import Link from "next/link";
import { EnquiryFormContext } from "@/context/EnquiryFormContext";

const Header = ({ lgScreen, bgHeader }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false); // State to track if header is fixed
  const menuRef = useRef(null);
  const menuItemsRef = useRef([]);
  const lastNavRefs = useRef([]); // Remaining items
  const navLogoRef = useRef(null);
  const headerRef = useRef(null);


  const handleScroll = () => {
    // debugger
    const win = window;
    console.log(win);
    
    if (window.scrollY > 0.5) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };
  // Scroll event handler
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP animation for menu
  useEffect(() => {
    if (menuOpen) {
      gsap.to(menuRef.current, { x: 0, duration: 0.5, ease: "power3.out" });

      gsap.fromTo(
        menuItemsRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.2,
          ease: "power3.out",
        }
      );
    } else {
      gsap.to(menuRef.current, { x: "100%", duration: 0.3, ease: "power3.in" });
    }
  }, [menuOpen]);

  const { openPopup } = useContext(EnquiryFormContext);

  return (
    <header
      ref={headerRef}
      className={` z-[40] w-full ${bgHeader === undefined ? "" : bgHeader} right-0 ${
        isFixed ? "fixed top-0 bg-greenTheme lg:full animate-slideDown" : `absolute ${lgScreen}`
      }`}
    >
      <nav className="relative">
        <ul className="flex font-cinzel text-white px-6 lg:px-10 450:py-4 py-4 items-center justify-between lg:justify-evenly">
          {/* Logo */}
          <li className="hidden lg:block">
            <Link href="/about-us">About Us</Link>
          </li>
          <li className="hidden cursor-pointer lg:block">
            Projects
          </li>
          <li ref={navLogoRef}>
            <Link href="/">
              <img
                className="w-[27.5vw] 450:w-[15.5vw] sm:w-[12.5vw] lg:w-44"
                src="/logo.png"
                alt="logo"
              />
            </Link>
          </li>
          {["Amenities", "Contact Us", "Gallery"].map((item, index) => (
            <li
              key={index}
              ref={(el) => (lastNavRefs.current[index] = el)}
              className="hidden lg:block"
            >
              <Link href={`/${item.replace(/\s+/g, "-").toLowerCase()}`}>
                {item}
              </Link>
            </li>
          ))}
          {/* Menu Icon (Only for Small Screens) */}
          <li className="lg:hidden">
            <button onClick={() => setMenuOpen(true)}>
              <FaBars className="text-2xl text-mainText" />
            </button>
          </li>
        </ul>

        {/* Sidebar Menu */}
        <div
          ref={menuRef}
          className="fixed z-50 top-0 right-0 h-screen w-[100%] 450:w-[40%] bg-greenTheme lg:hidden text-white transform translate-x-full"
        >
          {/* Close Button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-6 text-2xl"
          >
            <FaTimes className="text-mainText" />
          </button>

          {/* Menu Items */}
          <ul className="flex flex-col text-mainText items-center justify-center h-full space-y-6 text-xl">
            {["About us", "Projects", "Amenities", "Contact Us", "Gallery"].map(
              (item, index) => (
                <li
                  className="cursor-pointer"
                  key={index}
                  ref={(el) => (menuItemsRef.current[index] = el)}
                  onClick={item === "Projects" ? openPopup : undefined} // Add onClick for "Projects"
                >
                  {item === "Projects" ? (
                    item // Render just the text without a Link
                  ) : (
                    <Link href={`/${item.replace(/\s+/g, "-").toLowerCase()}`}>
                      {item}
                    </Link>
                  )}
                </li>
              )
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;