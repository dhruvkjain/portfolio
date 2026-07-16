import Link from "next/link"
import NotFoundBlock from "@/components/notfound-block"

export const metadata = {
  title: "404 — Dhruv Jain",
}

export default function NotFound() {
  return (
    <main className="bg-[#131010] relative min-h-screen overflow-hidden">
      <div className="relative z-10 md:flex md:justify-center md:items-center min-h-screen md:max-h-screen text-[#DAD9D8]">
        <div className="md:min-w-[80vw] max-w-7xl bg-[#131010]">
          <div className="w-full">

            <div className="w-full flex justify-between items-center border border-[#DAD9D8] px-6 py-8">
              <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
                Dhruv Jain
              </h1>
            </div>

            <div className="w-full border-b border-l border-r border-[#DAD9D8] px-6 py-12">
              <div className="w-full border border-white/60 bg-black">
                <NotFoundBlock />
              </div>
            </div>

            <div className="flex items-center justify-between gap-4 px-4 py-6 md:px-6 border-b border-r border-l border-[#DAD9D8]">
              <div className="w-full text-center text-2xl font-bold md:text-3xl">
                <div className="w-full hover:underline hover:text-white/50">
                  <Link href="/">[take me home]</Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  )
}
