
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const social = [
  { icons: <FaGithub />, path: 'https://github.com/mdantor383800' },
  { icons: <FaLinkedin />, path: 'https://www.linkedin.com/in/md-arif-a9413137b/' },
];

const Socials = ({ containerStyles = "flex gap-6", iconStyles = "w-12 h-12 border border-teal-500 rounded-full flex justify-center items-center text-teal-500 text-[20px] hover:bg-teal-500 hover:text-white hover:transition-all duration-500" }) => {
  return (
    <div className={containerStyles}>
      {social.map((item, index) => (
        <Link key={index} href={item.path} target="_blank" rel="noopener noreferrer">
          <span className={iconStyles}>{item.icons}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
