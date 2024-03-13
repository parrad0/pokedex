import { AspectRatio } from "../ui/aspect-ratio";
import { Skeleton } from "../ui/skeleton";

export const GridCardLoading = () => {
    return (
        <>
            <div className="py-4 w-full">
                <Skeleton className="h-4 bg-slate-500 w-[250px]" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-2">
                <AspectRatio
                    ratio={1}
                    className="animate-pulse bg-slate-700 rounded w-full flex space-x-4"
                />

                <AspectRatio
                    ratio={1}
                    className="animate-pulse bg-slate-700 rounded w-full flex space-x-4"
                />

                <AspectRatio
                    ratio={1}
                    className="animate-pulse bg-slate-700 rounded w-full flex space-x-4"
                />

                <AspectRatio
                    ratio={1}
                    className="animate-pulse bg-slate-700 rounded w-full flex space-x-4"
                />

                <AspectRatio
                    ratio={1}
                    className="animate-pulse bg-slate-700 rounded w-full flex space-x-4"
                />

                <AspectRatio
                    ratio={1}
                    className="animate-pulse bg-slate-700 rounded w-full flex space-x-4"
                />

                <AspectRatio
                    ratio={1}
                    className="animate-pulse bg-slate-700 rounded w-full flex space-x-4"
                />
                <AspectRatio
                    ratio={1}
                    className="animate-pulse bg-slate-700 rounded w-full flex space-x-4"
                />
            </div>
        </>
    );
};