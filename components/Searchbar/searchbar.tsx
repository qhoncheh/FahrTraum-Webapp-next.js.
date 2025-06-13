"use client"
import { useState } from "react"
import SearchMenu from "../SearchMenu/searchmenu"

const Searchbar = () => {
    const [menu, setMenu] = useState()
    const handleSearch = () => {}
  return (
    <form className="searchbar" onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchMenu />  
        </div>
          
    </form>
  )
}

export default Searchbar