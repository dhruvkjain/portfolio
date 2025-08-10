import {
  FaJsSquare,
  FaPython,
  FaRust,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaLinux,
  FaFigma,
  FaCuttlefish, // used for C
  FaGithub,
  FaWindows
} from 'react-icons/fa';

import {
  SiTypescript,
  SiNextdotjs,
  SiQt,
  SiTailwindcss,
  SiBootstrap,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiRedis,
  SiPostman,
  SiVercel,
  SiExpress,
  SiSocketdotio,
  SiMongoose,
  SiThreedotjs,
  SiShadcnui,
  SiZod,
  SiJest,
  // SiSupertest,
  // SiHusky,
  SiPm2,
  SiArchlinux
} from 'react-icons/si';

import { VscVscode } from "react-icons/vsc";
import { TbBrandCpp } from "react-icons/tb";



const techs = {
  // Languages
   Languages: [
  { icon: <SiTypescript />, href: 'https://www.typescriptlang.org/', name: 'TypeScript' },
  { icon: <FaJsSquare />, href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', name: 'JavaScript' },
  { icon: <FaPython />, href: 'https://www.python.org/', name: 'Python' },
  { icon: <FaRust />, href: 'https://www.rust-lang.org/', name: 'Rust' },
  { icon: <FaCuttlefish />, href: 'https://en.wikipedia.org/wiki/C_(programming_language)', name: 'C' },
  { icon: <TbBrandCpp />, href: 'https://isocpp.org/', name: 'C++' },
   ],
  // Frameworks
  Frameworks: [
  { icon: <FaReact />, href: 'https://reactjs.org/', name: 'React.js' },
  { icon: <FaNodeJs />, href: 'https://nodejs.org/', name: 'Node.js' },
  { icon: <SiNextdotjs />, href: 'https://nextjs.org/', name: 'Next.js' },
  { icon: <SiQt />, href: 'https://www.qt.io/', name: 'QT' },
  { icon: <SiTailwindcss />, href: 'https://tailwindcss.com/', name: 'TailwindCSS' },
  { icon: <SiBootstrap />, href: 'https://getbootstrap.com/', name: 'Bootstrap' },
  ],
  // Databases
  Databases: [
  { icon: <SiMongodb />, href: 'https://www.mongodb.com/', name: 'MongoDB' },
  { icon: <SiPostgresql />, href: 'https://www.postgresql.org/', name: 'PostgreSQL' },
  { icon: <SiFirebase />, href: 'https://firebase.google.com/', name: 'Firebase' },
  { icon: <SiRedis />, href: 'https://redis.io/', name: 'Redis' },
  ],
  // Developer Tools
  "Developer Tools": [
  { icon: <FaGitAlt />, href: 'https://git-scm.com/', name: 'Git' },
  { icon: <FaGithub />, href: 'https://github.com/', name: 'GitHub' },
  { icon: <FaDocker />, href: 'https://www.docker.com/', name: 'Docker' },
  { icon: <VscVscode />, href: 'https://code.visualstudio.com/', name: 'VS Code' },
  { icon: <FaLinux />, href: 'https://www.kernel.org/', name: 'Linux Shell' },
  { icon: <FaFigma />, href: 'https://figma.com/', name: 'Figma' },
  { icon: <SiPostman />, href: 'https://www.postman.com/', name: 'Postman' },
  { icon: <SiVercel />, href: 'https://vercel.com/', name: 'Vercel' },
  ],
  // Libraries
  Libraries: [
  { icon: <SiExpress />, href: 'https://expressjs.com/', name: 'Express.js' },
  { icon: <SiSocketdotio />, href: 'https://socket.io/', name: 'Socket.IO' },
  { icon: <SiMongoose />, href: 'https://mongoosejs.com/', name: 'Mongoose' },
  { icon: <SiThreedotjs />, href: 'https://threejs.org/', name: 'Three.js' },
  { icon: <SiShadcnui />, href: 'https://ui.shadcn.com/', name: 'ShadcnUI' },
  { icon: <SiZod />, href: 'https://zod.dev/', name: 'Zod' },
  { icon: <SiJest />, href: 'https://jestjs.io/', name: 'Jest' },
//   { icon: <SiSupertest />, href: 'https://github.com/visionmedia/supertest', name: 'Supertest' },
//   { icon: <SiHusky />, href: 'https://typicode.github.io/husky/', name: 'Husky' },
  { icon: <SiPm2 />, href: 'https://pm2.keymetrics.io/', name: 'PM2' },
  ],
  "Operating Systems": [
    { icon: <SiArchlinux />, href: 'https://archlinux.org/', name: 'Arch Linux' },
    { icon: <FaWindows />, href: 'https://www.microsoft.com/windows', name: 'Windows' },
  ],
};

import Link from 'next/link';

export default function SkillsBlock() {
  return (
    <div className="space-y-8 h-full md:h-[430px] overflow-auto scrollbar-hide p-6">
      <h3 className="text-3xl font-semibold text-[#FFDDC0]"># skills</h3>
      {Object.entries(techs).map(([category, items]) => (
        <div key={category}>
          <h4 className="text-xl font-medium text-[#DAD9D8] mb-2">{category}</h4>
          <ul className="flex flex-wrap gap-3">
            {items.map((tech) => (
              <Link
                key={tech.name}
                href={tech.href}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/50 px-3 py-1 text-sm text-[#DAD9D8] flex items-center hover:text-zinc-500 transition-colors"
              >
                <span className="text-lg">{tech.icon}</span>
                <span className="ml-2">{tech.name}</span>
              </Link>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}