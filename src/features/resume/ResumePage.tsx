import cv from "@resume/assets/images/CV.jpg";
import cvPdf from "@resume/assets/cv.pdf";
import { Download } from "lucide-react";

const ResumePage = () => {
  return (
    <div className="bg-[#f6efdd] min-h-screen flex flex-col items-center py-8 px-4">
      {/* Title + Subtitle */}
      <div className="text-center max-w-2xl mb-12">
        <h1 className="text-[42px] font-extrabold text-black">My Resume</h1>
        <p className="text-gray-700 mt-4">
          A quick snapshot of my education, experience, and technical expertise.
          You can preview it below or download the PDF version.
        </p>
      </div>

      {/* Download Button */}
      <a
        href={cvPdf}
        download="Pranita_Paudel_CV.pdf"
        className="mb-10 flex items-center justify-center gap-2 bg-[#ffad1b] text-black px-8 py-3 rounded-xl font-semibold shadow-md hover:opacity-90 transition text-lg"
      >
        <Download size={22} />
        <span>Download CV</span>
      </a>

      {/* Resume Preview */}
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-200">
        <img src={cv} alt="resume" className="w-full h-auto object-contain" />
      </div>
    </div>
  );
};

export default ResumePage;
