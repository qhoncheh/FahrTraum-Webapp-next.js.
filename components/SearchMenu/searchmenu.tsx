"use client"
import { manufacturers } from "@/constants"
import { SearchMenuProps } from "@/types"
import { Combobox , Transition  } from "@headlessui/react"
import Image from "next/image"
  import { useState } from "react"
const SearchMenu = ({ menu, setMenu }: SearchMenuProps) => {
  const [query, setQuery] = useState()
  
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
          <Combobox.Input className="search-manufacture__input" 
            placeholder="Volkwagen"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </Combobox>
    </div>
  )
}

export default SearchMenu