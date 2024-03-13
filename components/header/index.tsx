import Link from "next/link"

const Header = () => {
    return(<div className="box-content	mt-2 sticky top-0 z-50 w-full max-w-4xl p-4 md:maxw-4xl bg-primary rounded mx-auto">
        <Link href={"/"} className="text-white font-sans font-bold px-2">Pokedex</Link>
    </div>)
}

export default Header