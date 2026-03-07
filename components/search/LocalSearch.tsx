"use client"
import Image from "next/image"
import { Input } from "../ui/input"
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { fromUrlQuery, removeKeyFromUrlQuery } from "@/lib/url";


interface Props {
    imgSrc: string;
    placeholder: string;
    otherClasses: string;
    route: string;
}


const LocalSearch = ({ route, imgSrc, placeholder, otherClasses }: Props) => {
    const pathname = usePathname()
    const router = useRouter()
    const searchParams = useSearchParams()
    const query = searchParams.get("query") || ""
    const [searchQuery, setSearchQuery] = useState(query)
    useEffect(() => {
        const delayDebouncedFn = setTimeout(() => {

            if (searchQuery) {
                const newUrl = fromUrlQuery({
                    params: searchParams.toString(),
                    key: "query",
                    value: searchQuery
                })
                router.push(newUrl, { scroll: false })
            } else {
                if (pathname === route) {
                    const newUrl = removeKeyFromUrlQuery({
                        params: searchParams.toString(),
                        keysToRemove: ["query"]
                    })

                    router.push(newUrl, { scroll: false })
                }
            }

        }, 300)
        return () => clearTimeout(delayDebouncedFn)
    }, [searchQuery, router, route, pathname])
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