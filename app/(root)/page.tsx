import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/route";

export default async function Home() {
    const session = await auth();
    console.log(session);
    return (
        <>
            <h1 className=" h1-bold">
                hello world 🤩🕸️😏😁
            </h1>

            <form className="pt-30 px-12" action={async () => {
                "use server"
                await signOut({ redirectTo: ROUTES.SIGN_IN });
            }}>
                <Button type="submit">Logout</Button>
            </form>
        </>
    );
}
