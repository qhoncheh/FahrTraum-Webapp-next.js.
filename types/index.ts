import { MouseEventHandler } from "react";

export interface HeroBtnProps {
    title: string;
    containerStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "reset";
    dataAos?: string;
}