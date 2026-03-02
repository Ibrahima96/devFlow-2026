import React from 'react'
import Link from "next/link";
import ROUTES from "@/constants/route";
import {Badge} from "@/components/ui/badge";

interface Props {
    _id: string;
    name: string;
    questions?: number;
    showCount?: boolean;
    compact?: boolean;
}

const TagCard = ({_id, name, questions, showCount, compact}: Props) => {
    return (
        <Link href={ROUTES.TAGS(_id)} className={"flex justify-between gap-3"}>
            <Badge
                className={"background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase"}>
                <i>icone</i>
                <span> {name}</span>
            </Badge>
            {showCount && (<p className={"small-medium text-dark500_light700"}>{questions}</p>)}
        </Link>
    )
}
export default TagCard
