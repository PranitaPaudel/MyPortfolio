import type { CardProps } from "@home/@types/types";

export default function MyWorkCard({ image, title }: CardProps) {
  return (
    <div className="cursor-pointer bg-[#ffad1b] rounded-2xl shadow-md overflow-hidden md:w-85 w-full transform transition duration-300 hover:scale-105 hover:shadow-xl">
      {/* Image Section */}
      <div className="w-full h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="px-5 py-4">
        <h2 className="text-lg font-semibold text-[#000000] mb-2">{title}</h2>

        {/* Accent underline */}
        <div className="h-1 w-16 bg-[#304d31] rounded-full"></div>
      </div>
    </div>
  );
}
