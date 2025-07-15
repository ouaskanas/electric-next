import { FaPhoneAlt } from "react-icons/fa";

export default function ButtonCall() {
  const phone = "33756888275";

  return (
    <div className="fixed bottom-20 right-6 z-[9999] text-center">
      <a
        href={`tel:+${phone}`}
        className="bg-blue-900 hover:bg-blue-800 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition"
      >
        <FaPhoneAlt size={20} />
      </a>
    </div>
  );
}