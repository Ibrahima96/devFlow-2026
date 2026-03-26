import LocalSearch from "@/components/search/LocalSearch";
import {Button} from "@/components/ui/button";
import ROUTES from "@/constants/route";
import Link from "next/link";
import HomeFilter from "@/components/filters/HomeFilter";
import QuestionCard from "@/components/cards/QuestionCard";

const questions = [
    {
        _id: "1", title: "How to learn react",
        description: "I want to learn React ,can anyone help me ?",
        tags: [
            {_id: "1", name: 'React'},
            {_id: "2", name: 'JavaScript'}
        ],
        author: {_id: "1", name: "Jun Noor"},
        upvote: 10,
        answers: 20,
        views: 1000,
        createdAt: Date.now()

    },
    {
        _id: "2", title: "How to learn JavaScript",
        description: "I want to learn React ,can anyone help me ?",
        tags: [
            {_id: "1", name: 'React'},
            {_id: "2", name: 'JavaScript'}
        ],
        author: {_id: "2", name: "Luna Wood"},
        upvote: 10,
        answers: 20,
        views: 1000,
        createdAt: Date.now()

    }
]

interface SearchParams {
    searchParams: Promise<{ [key: string]: string }>
}

export default async function Home({searchParams}: SearchParams) {
    const {query = "", filter} = await searchParams;

    const filteredQuestions = questions
        .filter((question) => question.title.toLowerCase().includes(query?.toLowerCase()))
    return (
        <>
            <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
                <h1 className="h1-bold text-dark100_light900">All Questions</h1>
                <Button
                    className="primary-gradient min-h-11.5 px-4 py-3 text-light-900!"
                    asChild
                >
                    <Link href={ROUTES.ASK_QUESTION} className="max-sm:w-full">
                        Ask a Question
                    </Link>
                </Button>
            </section>
            <section className="mt-11">
                <LocalSearch
                    route="/"
                    imgSrc="/icons/search.svg"
                    placeholder="Search quesstions..."
                    otherClasses="flex-1"
                />
            </section>
            <HomeFilter/>
            <div className="flex flex-col gap-6 w-full mt-10 ">
                {filteredQuestions.map((question) => (
                 <QuestionCard key={question._id} question={question}/>
                ))}
            </div>
        </>
    );
}
