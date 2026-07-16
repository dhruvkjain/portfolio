import Link from "next/link"
import Image from "next/image"
import FouroFoursvg from "../../public/images/fourofour.svg"

export default function NotFoundBlock() {
  return (
    <div className="flex flex-col justify-center items-center h-full p-6 md:h-[300px]">
      <Image src={FouroFoursvg} alt="404" height={80} />
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
