"use client"
import { SearchMenuProps } from "@/types"
import { Combobox , Transition  } from "@headlessui/react"
import Image from "next/image"
  
const SearchMenu = ({ menu, setMenu }: SearchMenuProps) => {
  return (
    <div className="flex-1 max-sm:w-full flex justify-start items-center">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image src="/car-logo.svg"
              width={20}
              height={20}
              alt="Auto logo"
              className="ml-4"
            />
          </Combobox.Button>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchMenu