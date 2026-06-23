import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <div>    
        <div className = "min-h-screen">
        <main>
            <nav className="w-full bg-slate-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
            <div>
                <h1 className="text-2xl justify">❄ ESFRIAR ❄</h1>
            </div>
            <ul className="flex items-center gap-6">
                <li>
                <Link href="/">
                    <div className="NavText">
                    <h1>Home</h1>
                    </div>
                </Link>
                </li>
                <li>
                <Link href="/ar">
                    <div className="NavText">
                    <h1>Ar Condicionado</h1>
                    </div>
                </Link>
                </li>
                <li>
                <Link href="/instalar">
                    <div className="NavText">
                    <h1>Instalar</h1>
                    </div>
                </Link>
                </li>
            </ul>
            </nav>
        </main>
        </div>
        
    </div>    
  )

  

}
