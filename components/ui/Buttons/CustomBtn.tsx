"use client"
import { HeroBtnProps } from "@/types"
import Image from "next/image"

const CustomBtn = ({ title, containerStyles, btnType, handleClick, dataAos }: HeroBtnProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
      data-aos={dataAos}
    >
      <span className={`flex-1`}>
        {title}
      </span>

    </button>
  )
}

export default CustomBtn