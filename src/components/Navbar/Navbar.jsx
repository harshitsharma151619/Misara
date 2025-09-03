import React, { useState } from "react";

const Navbar = ({ setsearchTerm, searchTerm, setsearch, favourite, openHome, setfavoutite, openFav }) => {
  const [isOpen, setIsOpen] = useState(false); 
  const [currentPage, setCurrentPage] = useState("home"); // 🔑 track active page

  const handleChange = (event) => {   
    setsearchTerm(event.target.value);
    setsearch(event.target.value);
  };

  const changePage = () => {
    setfavoutite(!favourite);
    if (!favourite) {
      openFav();
    }
    setCurrentPage("wishlist"); // set active
    setIsOpen(false);
  };

  const backHome = () => {
    setfavoutite(false);
    openHome();
    setCurrentPage("home"); // set active
    setIsOpen(false);
  };

  const goPage = (page) => {
    setCurrentPage(page);
    setIsOpen(false);
  };

  return (
    <div className="bg-amber-200 m-5 p-5 rounded-2xl shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between">
        
        <div>
          <img src="/misara-logo.jpg" alt="Misara Logo" className="h-12 w-auto" />
        </div>

        {/* Search */}
        <div className="flex border-amber-900 border-2 px-5 rounded-2xl py-1 bg-white">
          <input
            className="focus:outline-none"
            type="text"
            value={searchTerm}
            placeholder="SEARCH ..."
            onChange={handleChange}
          />
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-amber-900 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <a
            href="#home"
            onClick={backHome}
            className={`transition-colors duration-500 relative ${
              currentPage === "home" ? "text-[#E07A5F] after:content-[''] after:block after:h-[2px] after:bg-[#E07A5F] after:mt-1" : "hover:text-[#E07A5F]"
            }`}
          >
            Home
          </a>
          <a
            href="#wishlist"
            onClick={changePage}
            className={`transition-colors duration-500 relative ${
              currentPage === "wishlist" ? "text-[#E07A5F] after:content-[''] after:block after:h-[2px] after:bg-[#E07A5F] after:mt-1" : "hover:text-[#E07A5F]"
            }`}
          >
            Wishlist
          </a>
          <a
            href="#products"
            onClick={() => goPage("products")}
            className={`transition-colors duration-500 relative ${
              currentPage === "products" ? "text-[#E07A5F] after:content-[''] after:block after:h-[2px] after:bg-[#E07A5F] after:mt-1" : "hover:text-[#E07A5F]"
            }`}
          >
            Products
          </a>
          <a
            href="#about"
            onClick={() => goPage("about")}
            className={`transition-colors duration-500 relative ${
              currentPage === "about" ? "text-[#E07A5F] after:content-[''] after:block after:h-[2px] after:bg-[#E07A5F] after:mt-1" : "hover:text-[#E07A5F]"
            }`}
          >
            About
          </a>
          <a
            href="#contact"
            onClick={() => goPage("contact")}
            className={`transition-colors duration-500 relative ${
              currentPage === "contact" ? "text-[#E07A5F] after:content-[''] after:block after:h-[2px] after:bg-[#E07A5F] after:mt-1" : "hover:text-[#E07A5F]"
            }`}
          >
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
