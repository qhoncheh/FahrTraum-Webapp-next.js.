import Link from "next/link"
import Image from "next/image"
import CustomBtn from "../ui/Buttons/CustomBtn"

export const Header = () => {
    return (
        <header className="w-full absolute z-10">
            <nav className="w-max-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
                <Link className="flex justify-center items-center" href="/">
                    <Image src="/logo.svg"
                    alt="Traum Auto"
                        width={118}
                        height={18}
                        className="object-contain"
                    />
                </Link>

                <CustomBtn 
                    title="anmelden"
                    containerStyles="text-primary-blue 
                    rounded-full bg-white min-w-[130px]"
                    btnType="button"
                />

            </nav>

        </header>
    )
}
