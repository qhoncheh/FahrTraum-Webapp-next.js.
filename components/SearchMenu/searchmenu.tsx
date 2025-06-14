"use client"
import { SearchMenuProps } from "@/types"
import { Combobox, ComboboxOption, Transition } from "@headlessui/react"
import Image from "next/image"
import { Fragment, useState } from "react"
import { manufacturers } from "@/constants"
import { Volkhov } from "next/font/google"

const SearchMenu = ({ menu, setMenu }: SearchMenuProps) => {
  const [query, setQuery] = useState<string>('')


  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) => (
        item.toLowerCase()
        .replace(/\s+/g, ""))
        .includes(query.toLocaleLowerCase().replace(/\s+/g,
        "")
  ))

  return (
    <div className="flex-1 max-sm:w-full flex justify-start items-center">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className="absolute left-4 top-[2px] z-10">
            <Image src="/car-logo.svg"
              width={20}
              height={20}
              alt="Auto logo"
            />
          </Combobox.Button>
          <Combobox.Input
            className="search-manufacture__input pl-12"
            placeholder="Volkwagen"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Transition as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options>
                 { filteredManufacturers.map((item) => (
                    <ComboboxOption
                      key={item}
                      value={item}
                      className={({ active }) =>
                        `relative search-manufacturer__option ${active ? 'bg-primary-blue' : 'text-gray-900'}`
                      }
                    >
                 {({ selected, active }) => (
                   <>
                     <span className={`block truncate ${
                       selected ? 'font-medium' : 'font-normal'}`}
                     >
                       {item}
                     </span>
                     {selected ? (
                       <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                         active ? 'text-white' : 'text-teal-600'}`}
                       >
                       </span>
                     ) : null}
                   </>
                 )}
                     </ComboboxOption>
                  ))
              }
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchMenu