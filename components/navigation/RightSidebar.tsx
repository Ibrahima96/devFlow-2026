import React from 'react'
import Link from "next/link";
import ROUTES from "@/constants/route";
import Image from "next/image";
import {ChevronRight} from "lucide-react";

const RightSidebar = () => {
    const hostQuestion = [
        {_id: "1", title: "How to create custom Hook in React ?"},
        {_id: "2", title: "How to create custom Hook in React ?"},
        {_id: "3", title: "How to use  React Router ?"},
        {_id: "4", title: "How to use  React Redux ?"},
        {_id: "5", title: "How to use  React and NextJs ?"},

    ]
    return (
        <section
            className="pt-32 custom-scrollbar background-light900_dark200 light-border sticky top-0 right-0 flex h-screen flex-col w-87.5 gap-6 overflow-y-auto border-l  shadow-light-300 p-6 dark:shadow-none max-lg:hidden">
            <div>
                <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
                <div className="mt-7 flex w-full gap-7.5 flex-col">
                    {hostQuestion.map(({_id, title}) => (
                        <Link href={ROUTES.PROFILE(_id)} key={_id}
                              className="flex items-center gap-7 justify-between cursor-pointer">
                            <p className="body-medium text-dark500_light700">{title}</p>
                            <ChevronRight  size={20} />
                        </Link>

                    ))}
                </div>
            </div>
        </section>
    )
}
export default RightSidebar
