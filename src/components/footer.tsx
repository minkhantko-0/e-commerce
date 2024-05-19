import Link from "next/link";
import MaxWidthWrapper from "./max-width-warpper";
import { FOOTER_LINKS } from "@/constants/footer-links";

const Footer = () => {
  return (
    <footer className="bg-white h-20 relative">
      <MaxWidthWrapper>
        <div className="border-t border-gray-200" />

        <div className="h-full flex flex-col md:flex-row md:justify-between items-center justify-center">
          <div className="text-center md:text-left md:pb-0 pb-2">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <div className="flex space-x-8">
              {FOOTER_LINKS.map(({ desc, link }, idx) => (
                <Link
                  href={link}
                  key={idx}
                  className="text-sm text-muted-foreground hover:text-gray-600"
                >
                  {desc}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
