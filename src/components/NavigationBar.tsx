import { NavLink } from "react-router-dom";

export default function NavigationBar() {
  return (
    <div className="top-0">
      {/* Navigation Bar */}
      <nav className="border-b border-[color-mix(in_oklch,var(--color-primary)_5%,transparent)] bg-background/80 backdrop-blur-sm relative z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center py-3">
            <div className="flex gap-8">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `transition-all ${isActive ? "font-bold border-b-2 border-current" : "hover:text-[var(--color-primary)]"}`
                }
              >
                About
              </NavLink>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `transition-all ${isActive ? "font-bold border-b-2 border-current" : "hover:text-[var(--color-primary)]"}`
                }
              >
                Projects
              </NavLink>
              <NavLink
                to="/certifications"
                className={({ isActive }) =>
                  `transition-all ${isActive ? "font-bold border-b-2 border-current" : "hover:text-[var(--color-primary)]"}`
                }
              >
                Certifications
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
