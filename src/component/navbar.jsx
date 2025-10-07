import React from "react";
import { Menu, X, Home, User, Briefcase, Mail } from "lucide-react";
import logo from "../../public/logo.png"; // Adjust the path as necessary

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Projects", href: "#projects", icon: Briefcase },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <>
      <nav className="fixed w-full top-0 left-0 z-50 px-4 pt-6 shadow-2xl-green-600">
        <div
          className={`max-w-2xl mx-auto transition-all duration-300 ${
            scrolled
              ? "bg-black/15 shadow-lg shadow-gray-900/50"
              : "bg-black/10"
          } backdrop-blur-md border border-gray-700/50 rounded-4xl`}
        >
          <div className="px-4">
            <div className="flex items-center justify-center">
              <div className="flex-shrink-0">
                <a href="#" className="text-xl font-bold text-white">
                  {/* public assets should be referenced with absolute path (/) when in /public */}
                  <img src={logo} alt="Logo" className="h-18 w-25" />
                </a>
              </div>

              <div className="hidden md:block">
                <div className="flex items-center space-x-1">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-gray-300 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg text-sm font-medium flex items-center transition-all duration-200"
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-white/10 inline-flex items-center justify-center p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white/50 transition-all duration-200"
                  aria-controls="mobile-menu"
                  aria-expanded={isOpen}
                >
                  <span className="sr-only">Open main menu</span>
                  {isOpen ? (
                    <X className="block h-5 w-5" aria-hidden="true" />
                  ) : (
                    <Menu className="block h-5 w-5" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {isOpen && (
            <div className="md:hidden border-t border-gray-700/50">
              <div className="px-4 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg text-base font-medium flex items-center transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="mr-3 h-5 w-5" />
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
