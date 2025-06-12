"use client"
import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import AOS from 'aos';
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);
    
  return (
    <footer className='flex flex-col text-black-100  mt-5 border-t border-gray-100'>
      <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
        <div className='flex flex-col justify-start items-start gap-6'>
          <Image data-aos="fade-down" src='/logo.svg' alt='logo' width={118} height={18} className='object-contain' />
          <p data-aos="fade-down"  className='text-base text-gray-700'>
            Traum-Auto 2025 <br />

            Alle Rechte vorbehalten &copy;
          </p>
        </div>

        <div className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20">
          {footerLinks.map((item) => (
            <div key={item.title} className="flex flex-col gap-6 text-base min-w-[170px]">
              <h3 data-aos="fade-down" className="font-bold">{item.title}</h3>
              <div data-aos="fade-left"  className="flex flex-col gap-5">
                {item.links.map((link) => (
                  <Link
                    key={link.title}
                    href={link.url}
                    className="text-gray-500"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
        <p data-aos="fade-down" >@2025 Traum-Auto. Alle Rechte vorbehalten</p>

        <div className="flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10">
          <Link href="/" className="text-gray-500" data-aos="fade-down" >
            Datenschutzrichtlinie
          </Link>
          <Link href="/" className="text-gray-500" data-aos="fade-down" >
            Allgemeine Geschäftsbedingungen
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;