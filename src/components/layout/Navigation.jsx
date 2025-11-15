function Navigation() {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-end items-center gap-10 m-0 p-0 list-none font-sans">
        <li>
          <a
            href="/"
            className="text-white hover:text-gray-400 px-3 py-2 rounded transition duration-200 hover:bg-gray-700 hover:bg-opacity-30"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/about"
            className="text-white hover:text-gray-400 px-3 py-2 rounded transition duration-200 hover:bg-gray-700 hover:bg-opacity-30"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="/features"
            className="text-white hover:text-gray-400 px-3 py-2 rounded transition duration-200 hover:bg-gray-700 hover:bg-opacity-30"
          >
            Features
          </a>
        </li>
        <li>
          <a
            href="/contact"
            className="text-white hover:text-gray-400 px-3 py-2 rounded transition duration-200 hover:bg-gray-700 hover:bg-opacity-30"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
