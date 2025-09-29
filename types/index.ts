import { MouseEventHandler } from "react";
import SearchMenu from './../components/SearchMenu/searchmenu';

export interface HeroBtnProps {
    title: string;
    containerStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "reset";
    dataAos?: string;
}
export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
  }
  
export interface SearchMenuProps {
    menu: string;
    setMenu: string
}

export interface FilterProps {
    manufacturer?: string;
    year?: number;
    model?: string;
    limit?: number;
    fuel?: string;
  }
export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
  }