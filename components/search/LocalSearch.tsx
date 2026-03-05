"use client"
import Image from "next/image"
import { Input } from "../ui/input"
import { useState } from "react";
import { useSearchParams } from "next/navigation";

interface Props {
    imgSrc: string;
    placeholder: string;
    otherClasses: string;
    route: string;
}
const LocalSearch = ({ route, imgSrc, placeholder, otherClasses }: Props) => {
    const searchParams = useSearchParams()
    const query = searchParams.get("query") || ""
    const [searchQuery, setSearchQuery] = useState(query)
    return (
        <div className={`background-light800_darkgradient flex min-h-14 grow items-center gap-4 rounded-[10px] px-4 ${otherClasses}`}
        >
            <Image
                src={imgSrc}
                alt="search"
                height={23}
                width={23}
                className="cursor-pointer"
            />
            <Input
                type="text"
                placeholder={placeholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="paragraph-regular no-focus placeholder text-dark400_light700 border-none shadow-none outline-none"
            />
        </div>
    )
}

export default LocalSearch