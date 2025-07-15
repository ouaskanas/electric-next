import {
  FaTools,
  FaBolt,
  FaClipboardCheck,
  FaHome,
  FaRedoAlt,
  FaSearch,
} from "react-icons/fa";

const services = [
  { icon: FaTools, label: "Dépannage tableau électrique" },
  { icon: FaBolt, label: "Disjoncteur qui saute" },
  { icon: FaClipboardCheck, label: "Mise aux normes NF C 15-100" },
  { icon: FaHome, label: "Coupure électricité maison" },
  { icon: FaRedoAlt, label: "Rénovation électrique" },
  { icon: FaSearch, label: "Diagnostic et entretien" },
];

export default function ServiceInto() {
  return (
    <section id="service" className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
          ⚡ Nos Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-yellow-50 hover:bg-yellow-100 transition duration-200 rounded-xl p-5 shadow-sm flex items-center gap-4"
            >
              <service.icon className="text-yellow-500 text-2xl" />
              <span className="text-gray-800 font-medium text-base">
                {service.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
