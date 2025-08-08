"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { ArrowUpRight, Github } from 'lucide-react'
import Image from "next/image"

export default function ConcentricPanel() {
  const [pos, setPos] = useState({ x: 0.5, y: 0.5 })
  const rafRef = useRef<number | null>(null)
  const startRef = useRef<number | null>(null)

  useEffect(() => {
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (reduceMotion) {
      setPos({ x: 0.5, y: 0.5 })
      return
    }

    const FREQ = 0.45 // cycles per second
    const AMP = 0.2 // oscillation amplitude (0..0.5). 0.3 => 0.2..0.8 range

    const loop = (t: number) => {
      if (startRef.current == null) startRef.current = t
      const elapsed = (t - startRef.current) / 1000 // seconds
      const x = 0.5 + AMP * Math.sin(2 * Math.PI * FREQ * elapsed)
      setPos({ x, y: 0.5 })
      rafRef.current = requestAnimationFrame(loop)
    }

    rafRef.current = requestAnimationFrame(loop)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      startRef.current = null
    }
  }, [])

  const circleSize = 60

  return (
    <div className="relative h-full w-full overflow-hidden border-r border-[#DAD9D8]">
      {/* Provided concentric rounded-rectangle artwork */}
      <Image
        src="/images/concentric_ovals.png"
        alt=""
        fill
        className="w-full h-full object-cover"
        priority
      />

      {/* Floating circle follows pointer */}
      <div
        className="absolute rounded-full bg-[#DAD9D8]"
        style={{
          width: circleSize,
          height: circleSize,
          left: `calc(${pos.x * 100}% - ${circleSize / 2}px)`,
          top: `calc(${pos.y * 100}% - ${circleSize / 2}px)`,
          // border: "2px solid rgba(0,0,0,0.6)",
        }}
        aria-hidden
      />

      {/* GitHub tile */}
      <Link
        href="https://github.com/dhruvkjain"
        target="_blank"
        className="absolute bottom-0 right-0"
      >
        <div className="h-20 w-fit pl-2 pb-2 flex justify-between bg-[#DAD9D8]">
          <div className="w-full h-full flex items-end justify-start">
              <div className="text-black text-4xl font-semibold">github</div>
            </div>
          <ArrowUpRight className="text-black h-10 w-10" />
        </div>
      </Link>
    </div>
  )
}
