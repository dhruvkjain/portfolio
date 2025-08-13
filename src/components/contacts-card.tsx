"use client"

import Link from "next/link"
import Image from "next/image"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ArrowUpRight } from 'lucide-react'
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

export default function ContactsCard() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          className="group cursor-pointer m-0 w-full h-full text-left"
          aria-label="Open contacts"
        >
          <div className="w-full h-20 border border-[#DAD9D8] flex justify-between pl-2 pb-2 bg-[#DAD9D8]">
            <div className="w-full h-full flex items-end justify-start">
              <div className="text-black text-xl font-semibold">contacts</div>
            </div>
            <ArrowUpRight className="text-black h-10 w-10" />
          </div>
          {/* Decorative arcs block (provided asset) */}
          <div className="relative border-b md:border-t md:border-r md:border-l border-[#DAD9D8] h-24 md:h-42 w-full overflow-hidden">
            <Image
              src="/images/half_concentric_ovals.png"
              alt=""
              fill
              className="object-contain md:object-cover object-bottom"
              priority={true}
            />
          </div>
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="bg-black p-8 text-[#DAD9D8]">
        <SheetHeader>
          <SheetTitle>Contacts</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-4 text-zinc-400 h-[60%] justify-center items-center">
        <Link
          href="https://github.com/dhruvkjain"
          target="_blank"
          className="hover:text-[#DAD9D8]"
        >
          <FaGithub className="w-10 h-10" />
        </Link>

        <Link
          href="https://linkedin.com/in/dhruvkjain05"
          target="_blank"
          className="hover:text-[#DAD9D8]"
        >
          <FaLinkedin className="w-10 h-10" />
        </Link>

        <Link
          href="https://twitter.com/dhruvkjain"
          target="_blank"
          className="hover:text-[#DAD9D8]"
        >
          <FaTwitter className="w-10 h-10" />
        </Link>

        <Link
          href="https://instagram.com/dhruvkjain"
          target="_blank"
          className="hover:text-[#DAD9D8]"
        >
          <FaInstagram className="w-10 h-10" />
        </Link>

        <Link
          href="mailto:dkjain2005co@gmail.com"
          target="_blank"
          className="hover:text-[#DAD9D8]"
        >
          <FaEnvelope className="w-10 h-10" />
        </Link>
      </div>
      </SheetContent>
    </Sheet>
  )
}
