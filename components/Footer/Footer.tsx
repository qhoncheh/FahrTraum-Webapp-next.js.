import Image from "next/image"
import Link from "next/link"
import { footerLinks } from "@/constants"
 const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100 ">
      <div className="flex max-md:flex-col gap-5 justify-between sm:px-16 px-6 py-10 flex-wrap">
        <div className="flex flex-col gap-6 justify-start items-start">
          <Image
            src="/logo.svg" alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            Traum-Auto <br />
            Alle Rechte vorbehalten
          </p>
        </div>
        <div className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20">
          {footerLinks.map((link) => (
            <div key={link.title} className="flex flex-col gap-6 text-base min-w-[170px]">
              <h3>{ link.title}</h3>
          </div>
          ))}
      </div>
      </div>

    </footer>
  )
}
 export default Footer