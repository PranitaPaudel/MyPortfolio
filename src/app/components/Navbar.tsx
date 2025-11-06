import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import StarIcon from "@src/assets/icons/StarIcon.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(id);
        section?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const section = document.getElementById(id);
      section?.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 left-0 w-full z-50 bg-[#f6efdd]">
      <div className="px-4 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex gap-2 justify-center items-center cursor-pointer"
          onClick={() => {
            if (location.pathname !== "/") {
              navigate("/");
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }, 100);
            } else {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
            setIsOpen(false);
          }}
        >
          <img src={StarIcon} alt="Star Icon" className="size-8" />
          <span className="text-[24px] font-bold">Pranita Paudel</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-12 font-medium text-[16px]">
          <li>
            <NavLink
              to="/resume"
              className={({ isActive }) =>
                `cursor-pointer transition ${
                  isActive
                    ? "text-[#F89D29] font-semibold"
                    : "hover:text-[#F89D29]"
                }`
              }
            >
              Resume
            </NavLink>
          </li>

          <li
            className="cursor-pointer hover:text-[#F89D29] transition"
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </li>

          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-[#ffad1b] text-black px-4 py-1.5 hover:opacity-90 transition rounded-3xl"
            >
              Get in touch!
            </button>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#f6efdd] shadow-md px-4 py-6 space-y-6 text-gray-700 font-medium">
          <NavLink
            to="/resume"
            className={({ isActive }) =>
              `block transition ${
                isActive
                  ? "text-[#F89D29] font-semibold"
                  : "hover:text-[#F89D29]"
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            Resume
          </NavLink>

          <div
            className="cursor-pointer transition hover:text-[#F89D29]"
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </div>

          <button
            onClick={() => scrollToSection("contact")}
            className="bg-[#ffad1b] text-black w-full px-4 py-1.5 transition rounded-3xl"
          >
            Get in touch!
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
