import React from 'react'
import Link from "next/link";
import ROUTES from "@/constants/route";
import Image from "next/image";
import {ChevronRight} from "lucide-react";
import TagCard from "@/components/cards/TagCard";

const RightSidebar = () => {
    const hostQuestion = [
        {_id: "1", title: "How to create custom Hook in React ?"},
        {_id: "2", title: "How to create custom Hook in React ?"},
        {_id: "3", title: "How to use  React Router ?"},
        {_id: "4", title: "How to use  React Redux ?"},
        {_id: "5", title: "How to use  React and NextJs ?"},
    ]
    const popularTags = [
        {_id: "1", name: "React", questions: 180}
        , {_id: "2", name: "NextJs", questions: 500}
        , {_id: "3", name: "Redux", questions: 190}
        , {_id: "4", name: "Tailwind", questions: 100}
        , {_id: "5", name: "Typescript", questions: 1110}
        , {_id: "6", name: "Javascript", questions: 1000}
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
                            <ChevronRight size={20}/>
                        </Link>

                    ))}
                </div>
            </div>
            <div className="mt-16">
                <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
                <div className="mt-7 flex flex-col gap-4">
                    {popularTags.map(({_id, name, questions}) => (
                        <TagCard key={_id} _id={_id} name={name} questions={questions} showCount compact/>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default RightSidebar
