
import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/route";
import Link from "next/link";

export default async function Home() {


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
            homeFilter
            <div className="flex flex-col gap-6 w-full mt-10 ">
                <p>Question</p>
                <p>Question</p>
                <p>Question</p>
                <p>Question</p>
                <p>Question</p>
            </div>
        </>
    );
}
