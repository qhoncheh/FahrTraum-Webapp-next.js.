import { MouseEventHandler } from "react";

export interface HeroBtnProps {
    title: string;
    containerStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>
}