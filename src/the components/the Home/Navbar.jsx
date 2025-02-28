import { FiSearch, FiUser, FiChevronDown } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { useRef, useEffect } from "react";

export function Navbar({
  searchTerm,
  setSearchTerm,
  sortCriteria,
  setSortCriteria,
  user,
  menuOpen = false, // Default value for menuOpen
  setMenuOpen,
  setShowFavourites,
}) {
  const menuRef = useRef(null);

  const toggleMobileMenu = () => {
    setMenuOpen((prevState) => !prevState); // Toggle the state correctly
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div className="shadow-md rounded-lg z-10 w-full bg-white/30 backdrop-blur-2xl p-6 border border-white/20 text-white transition-transform transform scale-100 hover:scale-105">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Search Input (Full Width on Mobile) */}
        <div className="relative w-full md:w-1/3">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FiSearch className="text-gray-400" />
          </div>
          <input
            type="search"
            placeholder="Search notes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        {/* Sort Select (Hidden on Mobile, Flex on Larger Screens) */}
        <div className="hidden md:flex items-center">
          <label htmlFor="sort" className="mr-2 text-sm font-medium text-black-700">
            Sort by:
          </label>
          <div className="relative">
            <select
              id="sort"
              value={sortCriteria}
              onChange={(e) => setSortCriteria(e.target.value)}
              className="block z-100 appearance-none w-full rela bg-blue-400 border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="dateAsc">Date (Oldest)</option>
              <option value="dateDesc">Date (Newest)</option>
              <option value="titleAsc">Title (A-Z)</option>
              <option value="titleDesc">Title (Z-A)</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <FiChevronDown className="h-4 w-4" />
            </div>
          </div>
        </div>

        {/* User Menu (Hamburger on Mobile) */}
        <div className="relative m-2">
  <button
    onClick={toggleMobileMenu}
    className="flex items-center justify-center px-3 py-2 border rounded text-gray-700 hover:text-gray-900 hover:border-gray-500 focus:outline-none focus:shadow-outline"
  >
    <FiUser className="h-5 w-5" /> {localStorage.getItem("name")}
  </button>
</div>

{/* Dropdown Menu Outside the Relative Container */}
{menuOpen && (
  <div
    ref={menuRef}
    className="fixed top right-1/99 w-48 bg-amber-200 text-black rounded-md shadow-xl z-[10000] p-2"
  >
    <NavLink
      to="/profile"
      className="block px-4 py-2 hover:bg-amber-300 rounded"
      onClick={() => setMenuOpen(false)}
    >
      Profile
    </NavLink>
    <NavLink
      to="/settings"
      className="block px-4 py-2 hover:bg-amber-300 rounded"
      onClick={() => setMenuOpen(false)}
    >
      Settings
    </NavLink>
    <button
      onClick={() => {
        localStorage.removeItem("token");
        localStorage.removeItem("name");
        window.location.href = "/signin";
        setMenuOpen(false);
      }}
      className="block w-full text-left px-4 py-2 hover:bg-red-300 rounded"
    >
      Logout
    </button>
  </div>
)}

          </div>
        </div>
      
    
  );
}