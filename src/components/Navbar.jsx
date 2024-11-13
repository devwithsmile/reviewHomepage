import { useState } from 'react';
import { FiShoppingCart, FiSun, FiMoon } from 'react-icons/fi';

const NavDropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="relative group">
      <button
        className="px-4 py-2 hover:text-primary"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {title}
      </button>
      {isOpen && (
        <div
          className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {items.map((item, index) => (
            <a
              key={index}
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const menuItems = {
    Landings: ['Landing 1', 'Landing 2', 'Landing 3'],
    Pages: ['Page 1', 'Page 2', 'Page 3'],
    Account: ['Account 1', 'Account 2', 'Account 3'],
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-primary">Logo</span>
          </div>

          {/* Main Menu - Centered */}
          <div className="hidden lg:flex items-center justify-center flex-1 space-x-4">
            {Object.entries(menuItems).map(([title, items]) => (
              <NavDropdown key={title} title={title} items={items} />
            ))}
            <a href="#" className="px-4 py-2 hover:text-primary">UIKit</a>
            <a href="#" className="px-4 py-2 hover:text-primary">Docs</a>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {darkMode ? (
                <>
                  <FiSun className="h-5 w-5" />
                  <span className="hidden sm:inline">Light</span>
                </>
              ) : (
                <>
                  <FiMoon className="h-5 w-5" />
                  <span className="hidden sm:inline">Dark</span>
                </>
              )}
            </button>
            <button className="flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90">
              <FiShoppingCart className="h-5 w-5" />
              <span>Buy Now</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;