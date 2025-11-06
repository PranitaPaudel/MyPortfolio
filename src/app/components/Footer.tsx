const email = import.meta.env.VITE_EMAIL;
const github = import.meta.env.VITE_GITHUB;
const linkedin = import.meta.env.VITE_LINKEDIN;

const Footer = () => {
  return (
    <footer className="bg-[#f6efdd] text-black ">
      <div className="flex flex-col md:flex-row md:justify-between gap-2 items-center px-4 py-2 md:px-8 md:py-0 h-16">
        <p className="text-sm font-semibold">
          © {new Date().getFullYear()} Pranita Paudel. All rights reserved.
        </p>

        <div className="flex gap-10">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ffad1b] text-sm font-semibold"
          >
            GitHub
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ffad1b] text-sm font-semibold"
          >
            LinkedIn
          </a>
          <a
            href={email}
            className="hover:text-[#ffad1b] text-sm font-semibold"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
