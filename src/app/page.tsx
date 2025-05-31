import AboutCard from "@/components/cards/AboutCard";
import { FaSwatchbook, FaCameraRetro, FaCode } from "react-icons/fa6";
import { MdOutlineAppShortcut } from "react-icons/md";
import Image from "next/image";

const aboutCards = [
  {
    icon: <FaSwatchbook className="text-purple-400" />,
    title: "Ui/Ux Design",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.",
    color: "bg-purple-50",
  },
  {
    icon: <MdOutlineAppShortcut className="text-yellow-400" />,
    title: "App Development",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.",
    color: "bg-yellow-50",
  },
  {
    icon: <FaCameraRetro className="text-sky-400" />,
    title: "Photography",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.",
    color: "bg-sky-50",
  },
  {
    icon: <FaCode className="text-sky-400" />,
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.",
    color: "bg-sky-50",
  },
];

export default function Home() {
  return (
    <div className=" mx-auto bg-white rounded-3xl shadow p-8">
      {/* About Section */}
      <h2 className="text-3xl font-bold mb-2">About</h2>
      <div className="w-20 h-1 bg-sky-400 rounded mb-6" />
      <p className="text-gray-600 mb-2">
        I&apos;m Creative Director and UI/UX Designer from Sydney, Australia,
        working in web development and print media. I enjoy turning complex
        problems into simple, beautiful and intuitive designs.
      </p>
      <p className="text-gray-600 mb-8">
        My aim is to bring across your message and identity in the most creative
        way. I created web design for many famous brand companies.
      </p>

      {/* What I Do Section */}
      <h3 className="text-2xl font-semibold mb-4">What I Do!</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {aboutCards.map((card, idx) => (
          <AboutCard
            key={idx}
            icon={card.icon}
            title={card.title}
            description={card.description}
            color={card.color}
          />
        ))}
      </div>
    </div>
  );
}
