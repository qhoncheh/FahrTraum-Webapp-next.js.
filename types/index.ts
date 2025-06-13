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

export interface SearchMenuProps {
    menu: string;
    setMenu: string
}