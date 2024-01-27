//import Image from "next/image";
import { Home as HomeIcon, Search, Library } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1">
        <aside className="w-72 ml-2 mr-1 my-2">
          <nav className="w-72 p-6 bg-zinc-800 mb-2">
            <ul className="space-y-6">
              <li><a href="#" className="flex">
                <HomeIcon className="mr-4" />
                Início</a>
              </li>
              <li><a href="#" className="flex">
                <Search className="mr-4" />
                Buscar</a>
              </li>
            </ul>
          </nav>
          <div className="w-72 p-6 bg-zinc-800 mb-2">
            <a href="#" className='flex'>
              <Library className="mr-4" />
              Sua Biblioteca
            </a>
          </div>
        </aside>
        <main className="flex-1 p-4 bg-zinc-800 ml-1 mr-2 my-2">
          <h1>mains</h1>
        </main>
      </div>
      <footer className="p-4 m-1">
        <h1>footer</h1>
      </footer>
    </div>
  );
}