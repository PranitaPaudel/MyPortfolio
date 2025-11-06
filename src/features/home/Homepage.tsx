import info from "@home/@utils/info.json";
import ContactCard from "@home/components/ContactCard";
import MyWorkCard from "@home/components/MyWorkCard";
import ContactForm from "@home/components/ContactForm";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const email = import.meta.env.VITE_EMAIL;
const phone = import.meta.env.VITE_PHONE;
const github = import.meta.env.VITE_GITHUB;
const linkedin = import.meta.env.VITE_LINKEDIN;

const Homepage = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-[#f6efdd] pb-8">
        <section className="flex flex-col md:flex-row lg:pt-30 lg:pl-42 py-10 px-4">
          <div className="flex-1">
            <h1 className="lg:text-[84px] text-[42px] font-extrabold text-black leading-tight">
              {info.profile.headline.greeting} <br />
              {info.profile.headline.intro}
            </h1>

            <p className="mt-6 text-gray-700 lg:max-w-md md:max-w-xs text-justify">
              {info.profile.bio}
            </p>
          </div>

          <div className="md:absolute lg:right-55 right-15">
            <div className="relative md:mt-20 mt-30">
              {/* Floating Labels */}
              <span className="absolute md:left-[-40px] left-5 top-8 bg-[#ffad1b] text-black text-sm px-4 py-2 rounded-full z-20">
                {info.profile.birthdate}
              </span>
              <span className="absolute md:right-[-50px] right-8 top-33 bg-[#ffad1b] text-black text-sm px-4 py-2 rounded-full z-20">
                {info.profile.nationality}
              </span>

              {/* Profile Image */}
              <img
                src={info.profile.image}
                alt="profile image"
                className="absolute z-10 top-[-176px] w-[250px] h-full md:left-7 left-20"
              />

              <ContactCard />
            </div>
          </div>
        </section>
      </div>
      {/* Resume Section */}
      <section className="bg-[#304d31] lg:px-42 py-10 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            {/* Education */}
            <div className="">
              <h1 className="text-[42px] text-[#ffad1b] font-bold pb-4">
                Education
              </h1>

              <div className="relative border-l-2 border-gray-300 pl-6">
                {info.education.map((item, index) => (
                  <div key={index} className="mb-10 relative">
                    <div className="absolute -left-9 top-1 w-5 h-5 rotate-45 bg-[#C4452F] border-2 border-white"></div>

                    <div className="grid grid-cols-[120px_1fr] gap-6">
                      <div className="text-[18px] font-semibold text-white">
                        {item.year}
                      </div>

                      <div>
                        <h3 className="font-semibold text-white">
                          {item.school}
                        </h3>
                        <p className="text-white text-[12px]">{item.degree}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="bg-[#ffad1b] p-6 shadow-md">
              <h1 className="text-[42px] text-[#000000] font-bold pb-4">
                Experience
              </h1>

              <div className="relative pl-10 mt-6">
                {info.experience.map((exp, index) => (
                  <div key={index} className="mb-10 relative">
                    <div className="absolute -left-9 top-1 w-5 h-5 rotate-45 bg-[#ffff] border-2 border-[#C4452F]"></div>

                    {/* Grid for proper alignment */}
                    <div className="grid md:grid-cols-[150px_1fr] gap-6 md:gap-6 flex flex-col md:grid">
                      {/* Year */}
                      <div className="text-[18px] font-semibold text-black">
                        {exp.year}
                      </div>

                      {/* Role + Description */}
                      <div>
                        <h3 className="font-semibold text-black">{exp.role}</h3>
                        <p className="text-black text-[12px]">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {info.experience[0].skills.map((skill, i) => (
                  <span
                    key={i}
                    className="inline-block bg-[#304d31] text-white px-4 py-2 rounded-full text-[14px]"
                  >
                    #{skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6 my-auto">
            {/* Technical Skills */}
            <div className="text-yellow-100 p-6 rounded-lg">
              <h1 className="text-[42px] text-[#ffad1b] pb-4 font-bold">
                Technical Skills
              </h1>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Languages */}
                <div>
                  <h4 className="font-semibold text-white">Languages</h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {info.skills.languages.map((lang, i) => (
                      <span
                        key={i}
                        className="px-3 py-2 bg-yellow-50 text-[#2f4634] rounded text-sm font-medium"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Frameworks */}
                <div>
                  <h4 className="font-semibold text-white">Frameworks</h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {info.skills.frameworks.map((fw, i) => (
                      <span
                        key={i}
                        className="px-3 py-2 bg-yellow-50 text-[#2f4634] rounded text-sm font-medium"
                      >
                        {fw}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tools */}
                <div className="sm:col-span-2">
                  <h4 className="font-semibold text-white">Tools</h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {info.skills.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="px-3 py-2 bg-yellow-50 text-[#2f4634] rounded text-sm font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <div id="projects" className="bg-[#f6efdd] lg:px-42 py-10 px-4">
        <h1 className="text-[42px] text-[#000000] pb-10 font-bold">My Work</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {info.projects.map((project) => (
            <MyWorkCard image={project.image} title={project.title} />
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div
        id="contact"
        className="py-10 px-4 lg:px-42 flex flex-col md:flex-row justify-between gap-10 bg-[#304d31]"
      >
        <div className="space-y-4">
          <h1 className="text-[42px] text-[#ffad1b] mb-4 font-bold">
            Get in Touch
          </h1>
          <p className="text-white">
            I’m currently looking for internship opportunities in web
            development, while also open to full-time roles. If you’d like to
            connect, share ideas, or collaborate on projects, I’d be happy to
            hear from you.
          </p>

          <div className="space-y-6 mt-16">
            {/* Email */}
            <a
              href="mailto:pranitapaudel67@gmail.com"
              className="flex items-center gap-3 text-white cursor-pointer"
            >
              <Mail size={20} color="#C4452F" />
              {email}
            </a>

            {/* Phone */}
            <a
              href="tel:+977-9866747433"
              className="flex items-center gap-3 text-white cursor-pointer"
            >
              <Phone size={20} color="#C4452F" />
              {phone}
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/pranitapaudel"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white cursor-pointer"
            >
              <Linkedin size={20} color="#C4452F" />
              {linkedin}
            </a>

            {/* GitHub */}
            <a
              href="https://linkedin.com/in/PranitaPaudel"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white cursor-pointer"
            >
              <Github size={20} color="#C4452F" />
              {github}
            </a>
          </div>
        </div>

        <ContactForm />
      </div>
    </>
  );
};

export default Homepage;
