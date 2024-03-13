import TeamGenerator from "@/components/team/TeamGenerator";
import { Metadata, Viewport } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
    title: "Create your pokemon team",
    description:
        "Create the best pokemon team",
};

export const viewport: Viewport = {
    themeColor: "#FFFFFF",
};

export default async function Page({
    searchParams,
}: { searchParams: any }) {
    console.log('Types:', searchParams.types);
    console.log('Members:', searchParams.members);
    if (!searchParams?.types || !searchParams?.members) {
        return <p>Not found</p>;
    }



    return (
        <section className="max-w-sm mx-auto md:max-w-4xl mx-auto px-4">
            <div className="flex flex-col items-start  mt-4 sm:text-5xl sm:mt-20 justify-start">
                <p className="font-sans text-gray-700 text-sm">Team Created with AI</p>
            </div>
            <Suspense fallback={<p>Loading</p>}>
                <TeamGenerator types={[searchParams.types]} members={3} />
            </Suspense>
        </section>
    );
}
