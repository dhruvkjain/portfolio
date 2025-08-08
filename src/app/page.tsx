"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import ConcentricPanel from "@/components/concentric-panel"
import SidebarNav from "@/components/sidebar-nav"
import ContactsCard from "@/components/contacts-card"
import SkillsBlock from "@/components/skills"
import GetAge from "@/lib/age"
import Hellosvg from "../../public/images/hello.svg"
import FouroFoursvg from "../../public/images/fourofour.svg"

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

type TabKey = "hello" | "about" | "skills" | "projects" | "404"

export default function Page() {
  const [active, setActive] = useState<TabKey>("hello")

  return (
    <main className="md:flex md:justify-center md:items-center min-h-screen md:max-h-screen bg-black text-[#DAD9D8]">
      <div className="md:min-w-[80vw] max-w-7xl">
        {/* Outer frame */}
        <div className="w-full">
          {/* Header */}
          <div className="flex justify-between items-center md:block border border-[#DAD9D8] px-6 py-8">
            <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
              Dhruv Jain
            </h1>
            {/* <div>
              <Sheet>
                <SheetTrigger asChild>
                  <button
                    className="group m-0 w-full h-full bg-black text-left"
                    aria-label="Menubar"
                  >
                    <CiMenuKebab className="w-6 h-6 md:hidden block"/>
                  </button>
                </SheetTrigger>
                  <SheetContent side="left" className="bg-black text-[#DAD9D8]">
                  <SheetHeader>
                    <SheetTitle>Contacts</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6 grid gap-3">
                    <Link className="underline-offset-4 hover:underline" href="mailto:you@example.com">
                      you@example.com
                    </Link>
                    <Link
                      className="underline-offset-4 hover:underline"
                      href="https://www.linkedin.com/"
                      target="_blank"
                    >
                      LinkedIn
                    </Link>
                    <Link
                      className="underline-offset-4 hover:underline"
                      href="https://github.com/your-github"
                      target="_blank"
                    >
                      GitHub
                    </Link>
                  </div>
                </SheetContent>
              </Sheet>
            </div> */}
          </div>

          {/* Body */}
          <div className="w-full h-full grid grid-cols-12 md:gap-6 gap-2 border-b border-[#DAD9D8]">
            {/* LEFT SIDEBAR */}
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
                {/* CENTER CONTENT */}
                <section className="w-full md:h-full pt-12 pb-12 flex justify-center items-center col-span-10 md:col-span-6 lg:col-span-6">
                  <div className="w-full md:h-full border border-white/60">
                    {active === "hello" && <HelloBlock />}
                    {active === "about" && <AboutBlock />}
                    {active === "skills" && <SkillsBlock />}
                    {active === "projects" && <ProjectsBlock />}
                    {active === "404" && <Block404 />}
                  </div>
                </section>

                {/* RIGHT DECORATIVE PANEL */}
                <section className="w-full h-full col-span-10 md:col-span-4 lg:col-span-4">
                  <ConcentricPanel />
                </section>
              </div>

              {/* Footer band */}
              <div className="flex items-center justify-between gap-4 px-4 py-6 md:px-6 border-r border-t border-l border-[#DAD9D8]">
                <p className="w-full text-center text-2xl font-bold md:text-3xl">
                  You do it right <span className="px-2">&</span> You do it everyday
                </p>
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
    <div className="h-full md:h-[430px] p-6 overflow-auto scrollbar-hide">
        <Image src={Hellosvg} alt="Hello" height={80}/>
        <p className="pt-8 max-w-prose text-sm md:text-base">
          (He/Him) • {GetAge()+"y/o"} • India
          <br></br>
          Rust Developer • Full-Stack Developer • Open Source Contributor
          <br></br>
          <br></br>
          Just exploring and goofing around the tech fields with project based learning approach 😋.
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
      <p className="max-w-prose text-sm md:text-base">
        {/* I build delightful web experiences with modern React, TypeScript, and
        design systems. I enjoy crafting minimal, tactile interfaces and
        shipping fast. */}
        I build in binary fashion, 
        <br></br>
        either low level projects involving <span className="hover:text-white cursor-default">Rust, C++ and C</span> 
        <br></br>
        or industrial level, high performance, reliable, scalable systems using <span className="hover:hover:text-white cursor-default">Javascript, Typescript and Python</span>
        <br></br>
        <br></br>
        I was <span className="hover:text-white cursor-default">Google Developer Groups on Campus (GDGC) DA-IICT Core member</span> and Team member of <span className="hover:text-white cursor-default">AI Club DA-IICT</span>.
        <br></br>
        <span className="hover:text-white cursor-default">Won SIH Internal Hackathon in 2024</span>
      </p>

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

function ProjectsBlock() {
  const items = [
    {
      title: "nn-rs",
      href: "https://github.com/dhruvkjain/nn-rs",
      desc: (
        <>
          a generalized and modularized <span className="font-bold text-[#DAD9D8]">neural network library</span> from scratch in <span className="font-bold text-[#DAD9D8]">rust</span>
        </>
      ),
    },
    {
      title: "orderbook-rs",
      href: "https://github.com/dhruvkjain/orderbook-rs",
      desc: (
        <>
          <span className="font-bold text-[#DAD9D8]">in-memory low-latency multi-order type</span> orderbook written in <span className="font-bold text-[#DAD9D8]">rust</span> from scratch
        </>
      ),
    },
    {
      title: "Inkling",
      href: "https://github.com/dhruvkjain/Inkling",
      desc: (
        <>
          <span className="font-bold text-[#DAD9D8]">full-stack game</span> where one player draws a word or phrase while others race against the clock to guess what it is
        </>
      ),
    },
  ]
  return (
    <div className="space-y-4 h-full md:h-[430px] overflow-auto scrollbar-hide p-6">
      <h3 className="text-3xl font-semibold text-[#FFDDC0]"># projects</h3>
      <div className="grid gap-3">
        {items.map((p) => (
          <Link
            key={p.title}
            href={p.href}
            className="group flex items-start justify-between  border border-white/60 p-4 transition-colors hover:bg-white/5"
          >
            <div>
              <div className="text-lg font-semibold">{p.title}</div>
              <p className="text-sm text-zinc-400">{p.desc}</p>
            </div>
            <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        ))}
      </div>
    </div>
  )
}

function Block404() {
  return (
    <div className="flex flex-col justify-center items-center h-full p-6 md:h-[300px]">
      <Image src={FouroFoursvg} alt="404" height={80}/>
      <h3 className="mt-8 text-3xl text-center font-semibold text-[#FFDDC0]">Nothing happens here</h3>
      <p className="text-xl mt-2 text-center font-semibold text-[#FFDDC0]">But there is something neat over there:</p>
      <p><span className="hover:underline hover:text-white/50">{<Link
        href="https://github.com/dhruvkjain"
        target="_blank"
        className="hover:underline"
      >[github]</Link>}</span>
      <span className="ml-4 hover:underline hover:text-white/50">{<Link
        href="https://dhruvkjain.github.io/pkms/what_im_learning"
        target="_blank"
        className="hover:underline"
      >[pkms]</Link>}</span></p>
    </div>
  )
}