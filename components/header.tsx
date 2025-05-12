import Link from 'next/link'

function Header() {
    return (
        <header className="p-4 bg-gray-800 text-white">
            <Link href="/">
                <h1 className="text-xl font-bold cursor-pointer">Home</h1>
            </Link>
        </header>
    )
}

export default Header