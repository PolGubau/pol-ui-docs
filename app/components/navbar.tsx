"use client";
import { DarkThemeToggle, IconButton, Navbar as UINavbar } from "pol-ui";
import { TbBrandGithub, TbSearch } from "react-icons/tb";
import { metadata } from "lib/constants";
import { usePathname } from "next/navigation";
import { useRecoilState } from "recoil";
import { commandAtom } from "./Cmdk/state";
import Link from "next/link";
const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    href: "/docs",
    label: "Docs",
  },
  {
    href: "/theme-studio",
    label: "Studio",
  },
];

export default function Navbar() {
  const [open, setOpen] = useRecoilState(commandAtom);

  const isActive = (path: string) => {
    // if path is / and current path is /, return true
    if (path === "/" && pathname === "/") {
      return true;
    }

    // if path is not / and current path starts with path, return true
    if (path !== "/" && pathname.startsWith(path)) {
      return true;
    }
    return false;
  };

  const pathname = usePathname();
  return (
    <UINavbar
      className="  bg-secondary-50 dark:bg-secondary-900 sticky top-0"
      links={navItems.map((i) => {
        return {
          label: i.label,
          href: i.href,
          active: isActive(i.href),
        };
      })}
      rightContent={
        <div className="flex gap-2">
          <IconButton onClick={() => setOpen(!open)}>
            <TbSearch />
          </IconButton>
          <DarkThemeToggle />
          <Link href={metadata.links.github} target="_blank" rel="noopener">
            <IconButton label="Github">
              <TbBrandGithub />
            </IconButton>
          </Link>
        </div>
      }
      leftContent={
        <a href="/" className="flex items-center gap-2">
          <img
            src="https://ui.polgubau.com/isotype.png"
            className="h-6 sm:h-7"
            alt="Pol-ui Logo"
          />
          <span className="text-xl font-semibold">{metadata.name}</span>
        </a>
      }
    />
  );
}
