"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useMemo, useEffect } from "react"
import ConcentricPanel from "@/components/concentric-panel"
import SidebarNav from "@/components/sidebar-nav"
import ContactsCard from "@/components/contacts-card"
import SkillsBlock from "@/components/skills"
import GetAge from "@/lib/age"
import Hellosvg from "../../public/images/hello.svg"
import Dhruvjpeg from "../../public/images/dhruvkjain2.jpeg"
import dynamic from "next/dynamic";
const Dither = dynamic(() => import("@/components/dither-bg"), { ssr: false });

import { ArrowUpRight } from 'lucide-react'
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
// import { CiMenuKebab } from "react-icons/ci";

// import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

type TabKey = "hello" | "about" | "skills" | "projects" | "experience"

export default function Page() {
  const [active, setActive] = useState<TabKey>("hello")
  const [showDither, setShowDither] = useState<boolean>(false)

  useEffect(() => {
    const handleResize = () => {
      setShowDither(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const DitherBackground = useMemo(() => (
    <Dither
      waveColor={[0.5, 0.5, 0.5]}
      disableAnimation={false}
      enableMouseInteraction={true}
      mouseRadius={0.3}
      colorNum={4}
      waveAmplitude={0.3}
      waveFrequency={3}
      waveSpeed={0.05}
    />
  ), []);

  return (
    <main className="bg-[#131010] relative min-h-screen overflow-hidden">
      {/* {showDither && (
        <div className="absolute inset-0 w-full h-full">
          {DitherBackground}
        </div>
      )} */}
      <div className="relative z-10 md:flex md:justify-center md:items-center min-h-screen md:max-h-screen text-[#DAD9D8]">
        <div className="md:min-w-[80vw] max-w-7xl bg-[#131010]">

          <div className="w-full">

            <div className="w-full flex justify-between items-center border border-[#DAD9D8] px-6 py-8">
              <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
                Dhruv Jain
              </h1>
            </div>

            <div className="w-full h-full grid grid-cols-12 md:gap-6 gap-2 border-b border-[#DAD9D8]">
              <aside className="col-span-12 md:col-span-2 lg:col-span-2 md:w-fit h-full">
                <SidebarNav
                  active={active}
                  onChange={(k) => setActive(k as TabKey)}
                />

                <div className="hidden md:block mt-6 text-2xl -translate-x-10 text-[#FFDDC0]">thinking</div>

                <div className="hidden mt-6 md:flex md:justify-end md:items-end">
                  <ContactsCard />
                </div>
              </aside>

              <div className="w-full h-full flex flex-col justify-between col-span-12 md:col-span-9 lg:col-span-10">
                <div className="w-full h-full grid grid-cols-10 gap-2">
                  <section className="w-full md:h-full pt-12 pb-12 flex justify-center items-center col-span-10 md:col-span-6 lg:col-span-6">
                    <div className="w-full md:h-full border border-white/60 bg-black">
                      {active === "hello" && <HelloBlock />}
                      {active === "about" && <AboutBlock />}
                      {active === "skills" && <SkillsBlock />}
                      {active === "projects" && <ProjectsBlock />}
                      {active === "experience" && <ExperienceBlock />}
                    </div>
                  </section>

                  <section className="w-full h-full col-span-10 md:col-span-4 lg:col-span-4">
                    <ConcentricPanel />
                  </section>
                </div>

                <div className="flex items-center justify-between gap-4 px-4 py-6 md:px-6 border-r border-t border-l border-[#DAD9D8]">
                  <div className="w-full text-center text-2xl font-bold md:text-3xl">
                    <div className="w-full hover:underline hover:text-white/50">
                      <Link
                        href="https://drive.google.com/file/d/1JawGiaOZwy7GvFlfL4xZeNbBNEdku7h6/view?usp=sharing"
                        target="_blank"
                        className=""
                      ><span className="flex items-center justify-center">
                          <span className="pr-2">[cv of success]</span>
                          <ArrowUpRight className="h-10 w-10" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            
          </div>
        </div>
      </div>
    </main>
  )
}

function HelloBlock() {
  return (
    <div className="space-y-4 h-full md:h-[430px] overflow-auto scrollbar-hide p-6">
      {/* <img
        src="/images/dhruvkjain.jpeg"
        alt="dhruvkjain"
        className="w-auto h-[150px] rounded-md"
      /> */}
      <div className="grid col-auto md:flex md:items-center">
      <Image src={Dhruvjpeg} className="mb-4 md:mb-0 rounded-md mr-10" alt="Dhruv Jain" height={110} />
      <Image src={Hellosvg} alt="Hello" height={80} />
      </div>
      <p className="pt-0 max-w-prose text-sm md:text-base">
        (He/Him) • {GetAge() + "y/o"} • India
        <br></br>
        <br></br>
        <strong>Ex-Quant Dev Intern</strong> @<span className="hover:underline hover:text-white/50">{<Link
          href="https://obsidiancapital.in/"
          target="_blank"
          className=""
        >Obsidian  Capital</Link>}</span> • <strong>OSS Maintainer</strong> @<span className="hover:underline hover:text-white/50">{<Link
          href="https://github.com/kornia"
          target="_blank"
          className=""
        >Kornia</Link>}</span>
        <br></br> 
        Rust Dev • Full-Stack Dev • Open Source Contributor
        <br></br>
        <br></br>
        just exploring and goofing around the tech fields with project based learning approach
        <br></br>
        <br></br>
        curious what I am learning ? check here <span className="hover:underline hover:text-white/50">{<Link
          href="https://dhruvkjain.github.io/pkms/what_im_learning"
          target="_blank"
          className=""
        >[pkms]</Link>}</span>
        <br></br>
        curious what I am building ? check here <span className="hover:underline hover:text-white/50">{<Link
          href="https://github.com/dhruvkjain"
          target="_blank"
          className="hover:underline"
        >[github]</Link>}</span>
        <br></br>
        <br></br>
        Currently pursuing B.Tech. in Information and Communication Technology from <span className="hover:underline hover:text-white/50 cursor-pointer">{<Link
          href="https://daiict.ac.in/"
          target="_blank"
          className="hover:underline"
        >Dhirubhai Ambani Institute of Information and Communication Technology (DA-IICT)</Link>}</span>
      </p>
    </div>
  )
}

function AboutBlock() {
  return (
    <div className="space-y-4 h-full md:h-[430px] overflow-auto scrollbar-hide text-[#DAD9D8] p-6">
      <div>
        <h3 className="text-3xl font-semibold text-[#FFDDC0]"># what_im_learning</h3>
        <p className="m-2 max-w-prose text-sm md:text-base">
          <span className="hover:underline hover:text-white/50">{<Link
            href="https://dhruvkjain.github.io/pkms/what_im_learning"
            target="_blank"
            className="hover:underline"
          >[pkms]</Link>}</span>
        </p>
      </div>
      <h3 className="text-3xl font-semibold text-[#FFDDC0]"># about</h3>
      {/* <Image src={Snowflake} alt="snowflake" height={50}/> */}
      <div className="max-w-prose text-sm md:text-base">
        <details className="pl-5">
          <summary className="cursor-pointer hover:underline hover:text-white/50">[about me]</summary>
          <div>
          I build in binary fashion,
          <br></br>
          either low level projects involving <span className="hover:text-white cursor-default">Rust, C++ and C</span>
          <br></br>
          or industrial level, high performance, reliable, scalable systems using <span className="hover:hover:text-white cursor-default">Javascript, Typescript and Python</span>
          </div>
        </details>
        <br></br>
        <ul className="list-disc pl-5 space-y-2">
        <li className="p-0 m-0">currently contributing to a rust-based <span className="hover:text-white cursor-default">Computer Vision library</span>, <span className="hover:underline hover:text-white/50">{<Link
            href="https://github.com/kornia/kornia-rs/pulls?q=is%3Apr+author%3Adhruvkjain"
            target="_blank"
            className="hover:underline"
          >[kornia-rs]</Link>}</span></li>
        <li className="p-0 m-0"><span className="hover:text-white cursor-default">top 3 finalist in IICPC Dev Hackathon</span> in Network & Application Blocking System category out of 200+ developers</li>
        <li className="p-0 m-0">i was <span className="hover:text-white cursor-default">Google Developer Groups on Campus (GDGC) DA-IICT Core member</span> and Team member of <span className="hover:text-white cursor-default">AI Club DA-IICT</span></li>
        <li className="p-0 m-0">achieved <span className="hover:text-white cursor-default">AIR 13026</span> in JEE Advance and <span className="hover:text-white cursor-default">AIR 15850</span> in JEE Mains</li>
        <li className="p-0 m-0">won <span className="hover:text-white cursor-default">SIH Internal Hackathon in 2024</span></li>
        </ul>
      </div>

      <div className="flex gap-4 text-zinc-400">
        <Link
          href="https://github.com/dhruvkjain"
          target="_blank"
          className="hover:text-[#DAD9D8]"
        >
          <FaGithub className="w-5 h-5" />
        </Link>

        <Link
          href="https://linkedin.com/in/dhruvkjain05"
          target="_blank"
          className="hover:text-[#DAD9D8]"
        >
          <FaLinkedin className="w-5 h-5" />
        </Link>

        <Link
          href="https://twitter.com/dhruvkjain"
          target="_blank"
          className="hover:text-[#DAD9D8]"
        >
          <FaTwitter className="w-5 h-5" />
        </Link>

        <Link
          href="https://instagram.com/dhruvkjain"
          target="_blank"
          className="hover:text-[#DAD9D8]"
        >
          <FaInstagram className="w-5 h-5" />
        </Link>

        <Link
          href="mailto:dkjain2005co@gmail.com"
          target="_blank"
          className="hover:text-[#DAD9D8]"
        >
          <FaEnvelope className="w-5 h-5" />
        </Link>
      </div>
    </div>
  )
}

function SkillTags({ tags }: { tags: string[] }) {
  return (
    <ul className="mt-3 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li
          key={tag}
          className="border border-white/50 px-2 py-0.5 text-xs text-[#DAD9D8]"
        >
          {tag}
        </li>
      ))}
    </ul>
  )
}

function ProjectsBlock() {
  const items = [
    {
      title: "blackice_proctor",
      href: "https://github.com/dhruvkjain/blackice_proctor",
      desc: (
        <>
          a <span className="font-bold text-[#DAD9D8]">system-level proctoring desktop application</span> built in <span className="font-bold text-[#DAD9D8]">rust</span> designed to enforce strict testing environments by reporting unauthorized networks, applications, and hardware bypasses to a <span className="font-bold text-[#DAD9D8]">axum</span> rust cloud server
        </>
      ),
      skills: ["Rust", "Axum", "Systems", "Windows APIs"],
    },
    {
      title: "rl_for_dynamic_resource_allocation",
      href: "https://github.com/dhruvkjain/rl_for_dynamic_resource_allocation",
      desc: (
        <>
          <span className="font-bold text-[#DAD9D8]">deep reinforcement learning</span> for <span className="font-bold text-[#DAD9D8]">dynamic resource allocation</span> and <span className="font-bold text-[#DAD9D8]">task scheduling</span> in edge-based IoT systems
        </>
      ),
      skills: ["Python", "Deep RL", "PyTorch", "EdgeSimpy"],
    },
    {
      title: "argus-ligand",
      href: "https://github.com/dhruvkjain/argus-ligand",
      desc: (
        <>
          a features/motifs finder in DNA sequences that run on <span className="font-bold text-[#DAD9D8]">cloudflare workers</span> and uses <span className="font-bold text-[#DAD9D8]">workers ai (ollama 3.1 8b, json mode)</span> to process natural language request, all in <span className="font-bold text-[#DAD9D8]">rust</span>
        </>
      ),
      skills: ["Rust", "Cloudflare Workers", "Workers AI", "KV Cache"],
    },
    {
      title: "nn-rs",
      href: "https://github.com/dhruvkjain/nn-rs",
      desc: (
        <>
          a generalized and modularized <span className="font-bold text-[#DAD9D8]">neural network library</span> from scratch in <span className="font-bold text-[#DAD9D8]">rust</span>
        </>
      ),
      skills: ["Rust", "Neural Networks"],
    },
    {
      title: "orderbook-rs",
      href: "https://github.com/dhruvkjain/orderbook-rs",
      desc: (
        <>
          <span className="font-bold text-[#DAD9D8]">in-memory low-latency multi-order type</span> orderbook written in <span className="font-bold text-[#DAD9D8]">rust</span> from scratch
        </>
      ),
      skills: ["Rust", "Low-Latency", "Data Structures"],
    },
    {
      title: "COCO-SSD",
      href: "https://dhruvkjain.github.io/COCO-SSD-webcam/",
      desc: (
        <>
          <span className="font-bold text-[#DAD9D8]">multiple object detection locally</span>, using pre trained model in <span className="font-bold text-[#DAD9D8]">tensorFlow.js</span>
        </>
      ),
      skills: ["JavaScript", "TensorFlow.js", "Computer Vision"],
    },
    {
      title: "Inkling",
      href: "https://github.com/dhruvkjain/Inkling",
      desc: (
        <>
          <span className="font-bold text-[#DAD9D8]">full-stack game</span> where one player draws a word or phrase while others race against the clock to guess what it is
        </>
      ),
      skills: ["Full-Stack", "Real-Time", "WebSockets"],
    },
    {
      title: "Synapse",
      href: "https://dhruvkjain.github.io/Synapse2024/",
      desc: (
        <>
          A <span className="font-bold text-[#DAD9D8]">creative and interactive website</span> for DA-IICT&apos;s annual cultural fest
        </>
      ),
      skills: ["Frontend", "Web"],
    },
  ]
  return (
    <div className="space-y-4 h-full md:h-[430px] overflow-auto scrollbar-hide p-6">
      <h3 className="text-3xl font-semibold text-[#FFDDC0]"># projects</h3>
      <div className="grid gap-3">
        {items.map((p) => (
          <Link
            key={p.title}
            target="_blank"
            href={p.href}
            className="group flex items-start justify-between  border border-white/60 p-4 transition-colors hover:bg-white/5"
          >
            <div>
              <div className="text-lg font-semibold">{p.title}</div>
              <p className="text-sm text-zinc-400">{p.desc}</p>
              <SkillTags tags={p.skills} />
            </div>
            <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        ))}
      </div>
    </div>
  )
}

function ExperienceBlock() {
  const items = [
    {
      title: "Quantitative Developer Intern",
      org: "Obsidian Capital | HFT",
      date: "May'26 - July'26",
      href: "https://obsidiancapital.in/",
      points: [
        <>
          built a scalable, easily-integrable market-data shard collector using <span className="font-bold text-[#DAD9D8]">kernel-bypass networking</span>, provisioning shards per stream and processing <span className="font-bold text-[#DAD9D8]">UDP</span> packets in <span className="font-bold text-[#DAD9D8]">400-600 ns</span>, now <span className="font-bold text-[#DAD9D8]">deployed in production</span>
        </>,
        <>
          engineered a low-latency, kernel-bypass <span className="font-bold text-[#DAD9D8]">TCP</span> order-entry protocol to the <span className="font-bold text-[#DAD9D8]">NSE&apos;s</span> gateway router, handling packet formation and transmitting orders to market in <span className="font-bold text-[#DAD9D8]">550-700 ns</span> via <span className="font-bold text-[#DAD9D8]">proprietary delegated-send APIs</span>
        </>,
        <>
          architected the COLO server to GUI log pipeline over a constrained <span className="font-bold text-[#DAD9D8]">0.5 MBps</span> uplink where each event crosses the WAN <span className="font-bold text-[#DAD9D8]">once</span> and fans out to all 7+ clients from a single <span className="font-bold text-[#DAD9D8]">FastAPI</span> backend, cutting link bandwidth from <span className="font-bold text-[#DAD9D8]">O(N)</span> to <span className="font-bold text-[#DAD9D8]">O(1)</span>, now <span className="font-bold text-[#DAD9D8]">deployed in production</span>
        </>,
        <>
          benchmarked <span className="font-bold text-[#DAD9D8]">15</span> compression schemes on live <span className="font-bold text-[#DAD9D8]">NSE</span> payloads and adopted <span className="font-bold text-[#DAD9D8]">streaming LZ4</span> (dictionary-continuation), exploiting inter-packet redundancy for a <span className="font-bold text-[#DAD9D8]">194.8×</span> ratio (<span className="font-bold text-[#DAD9D8]">8 KB to 42 B</span>) at <span className="font-bold text-[#DAD9D8]">20.9 GB/s</span> compress and <span className="font-bold text-[#DAD9D8]">72.9 GB/s</span> decompress vs ~<span className="font-bold text-[#DAD9D8]">2.3×</span> for Zstd/zlib, keeping the <span className="font-bold text-[#DAD9D8]">FlatBuffers</span> feed well under the 0.5 MBps link
        </>,
      ],
      skills: ["Kernel-Bypass", "UDP", "TCP", "FastAPI", "FlatBuffers", "LZ4", "Low-Latency"],
    },
    {
      title: "Open Source Maintainer",
      org: "Kornia-rs",
      note: "(Rust-based Computer Vision library)",
      href: "https://github.com/kornia/kornia-rs",
      points: [
        <>
          implemented <span className="font-bold text-[#DAD9D8]">6 major features</span> including morphological operations, contour detection, camera undistortion, and padding functions, in the <span className="font-bold text-[#DAD9D8]">kornia-imgproc</span> crate
        </>,
        <>
          actively <span className="font-bold text-[#DAD9D8]">mentored</span> new contributors via Discord, <span className="font-bold text-[#DAD9D8]">reviewed</span> incoming PRs, and provided technical guidance to ensure code quality and consistency in features, testing and benchmarking
        </>,
      ],
      skills: ["Rust", "Computer Vision", "Open Source", "Mentoring"],
    },
  ]
  return (
    <div className="space-y-4 h-full md:h-[430px] overflow-auto scrollbar-hide p-6">
      <h3 className="text-3xl font-semibold text-[#FFDDC0]"># experience</h3>
      <div className="grid gap-3">
        {items.map((e) => (
          <Link
            key={e.title + e.org}
            target="_blank"
            href={e.href}
            className="group flex items-start justify-between  border border-white/60 p-4 transition-colors hover:bg-white/5"
          >
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <div className="text-lg font-semibold">{e.title}</div>
                {e.date && <div className="text-xs text-zinc-400">{e.date}</div>}
              </div>
              <div className="text-sm text-[#FFDDC0]">
                {e.org}
                {e.note && <span className="ml-2 italic text-zinc-400">{e.note}</span>}
              </div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-400">
                {e.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <SkillTags tags={e.skills} />
            </div>
            <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        ))}
      </div>
    </div>
  )
}