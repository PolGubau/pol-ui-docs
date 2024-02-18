const code = `
import { Copyright, Footer, FooterLinkGroup, Link } from "pol-ui";
import React from "react";

const FooterComponent = () => {
  return (
    <Footer>
    <div className="w-full p-6">
    <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
      <div>
        <FooterBrand
          href="https://ui.polgubau.com"
          src="https://ui.polgubau.com/logo.png"
          alt="Pol-ui Logo"
        />
      </div>
      <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
        <div>
          <FooterLinkGroup col title="about">
            <Link href="#">Pol-ui</Link>
            <Link href="#">Tailwind CSS</Link>
          </FooterLinkGroup>
        </div>
        <div>
          <FooterLinkGroup col title="Follow us">
            <Link href="#">Github</Link>
            <Link href="#">Discord</Link>
          </FooterLinkGroup>
        </div>
        <div>
          <FooterLinkGroup col title="Legal">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms &amp; Conditions</Link>
          </FooterLinkGroup>
        </div>
      </div>
    </div>
    <Divider />
    <div className="w-full sm:flex sm:items-center sm:justify-between">
      <Copyright href="#" by="Pol-ui™" year={2022} />
      <div className="mt-4 flex space-x-2 sm:mt-0 sm:justify-center">
        <IconButton href="#">
          <BsDribbble size={20} />
        </IconButton>
        <IconButton href="#">
          <BsInstagram size={20} />
        </IconButton>
        <IconButton href="#">
          <BsGithub size={20} />
        </IconButton>
        <IconButton href="#">
          <BsDribbble size={20} />
        </IconButton>
      </div>
    </div>
  </div>
    </Footer>
  );
};
export default FooterComponent;
`;
export default code;
