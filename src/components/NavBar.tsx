const NavBar = ({
  brand = "Mon Site",
  links = [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
}) => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white dark:bg-gray-800 shadow-md">
      <div className="text-2xl font-bold">
        <a
          href="/"
          className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300"
        >
          {brand}
        </a>
      </div>
      <div className="hidden md:flex space-x-8">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white font-medium transition-colors duration-300"
          >
            {link.label}
          </a>
        ))}
      </div>
      {/* Menu mobile */}
      <div className="md:hidden">
        <button className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
