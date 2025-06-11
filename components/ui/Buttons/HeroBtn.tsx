"use client"
import { HeroBtnProps } from "@/types"
import Image from "next/image"

const HeroBtn = ({ title , containerStyles, handleClick} : HeroBtnProps) => {
  return (
      <button
          disabled={false}
          type={"button"}
          className={`custom-btn ${containerStyles}`}
          onClick={handleClick}
      >
        <span className={`flex-1` }>
              {title}
        </span>
          
    </button>
  )
}

export default HeroBtn