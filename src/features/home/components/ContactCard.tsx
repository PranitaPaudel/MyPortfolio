import { MapPin, Mail, Phone } from "lucide-react";
import Info from "@home/@utils/info.json";

const email = import.meta.env.VITE_EMAIL;
const phone = import.meta.env.VITE_PHONE;

function ContactCard() {
  return (
    <div className="bg-[#304d31] flex items-center justify-center">
      <div className="relative md:w-[280px] overflow-hidden w-full">
        {/* Top Section */}
        <div className="relative flex flex-col items-center bg-[#2f4634] w-full md:w-[280px] h-[200px]">
          <div className="absolute bg-white rounded-full w-43 h-43 top-5"></div>
        </div>

        {/* Contact Section */}
        <div className="bg-black text-white px-6 py-5 text-center">
          <h1 className="text-[32px] font-bold mb-3">Contact</h1>
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-center gap-2">
              <MapPin size={16} />
              <span>{Info.contact.location}</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Mail size={16} />
              <span>{email}</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Phone size={16} />
              <span>{phone}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
