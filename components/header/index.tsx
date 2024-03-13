import Link from "next/link"

const Header = () => {
    return (
        <div className="max-w-sm md:max-w-xl px-4 mx-auto">
            <div className="mt-2 sticky top-0 z-50 w-full py-4 px-2 bg-primary rounded mx-auto">
                <Link href={"/"} className="text-white font-sans font-bold px-2">Pokedex 2.0</Link>
            </div>
        </div>
    )
}

export default Header