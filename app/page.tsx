import Link from "next/link";
import { notFound } from "next/navigation";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center gap-4 p-8">
        <Link href="/form" className="text-blue-600 hover:text-blue-800 text-lg font-semibold px-4 py-2 rounded-md hover:bg-gray-100 transition-colors">
          Form Page
        </Link>
        <Link href="/canada" className="text-blue-600 hover:text-blue-800 text-lg font-semibold px-4 py-2 rounded-md hover:bg-gray-100 transition-colors">
          Canada Data Page
        </Link>
        <Link href="/mexico" className="text-blue-600 hover:text-blue-800 text-lg font-semibold px-4 py-2 rounded-md hover:bg-gray-100 transition-colors">
          Mexico Data Page
        </Link>
      </div>
    </div>
  )
}

export const revalidate = 10;
