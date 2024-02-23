const code = `
import { Navbar } from "pol-ui";
const Tab = () => (
  <div className="h-64 w-96 grid place-items-center">Some fancy lists</div>
);
const NavbarComponent = () => {
  return (
    <Navbar
    linkClassName="text-primary-100 bg-primary-800 w-[150px]"
      leftContent={
        <img
          src="https://ui.polgubau.com/logo.png"
          className="h-6 sm:h-7"
          alt="Pol-ui Logo"
        />
      }
      links={[
        { href: "#", label: "Home" },
        { href: "#", label: "About", content: <Tab /> },
        { href: "#", label: "Services", content: <Tab /> },
        { href: "#", label: "Pricing" },
        { href: "#", label: "Contact" },
      ]}
    />
  );
};
export default NavbarComponent;
`;
export default code;