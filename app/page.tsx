import Image from "next/image";
import Link from "next/link";

const links = [
  { name: "My Portfolio", url: "https://github.com/seary05", icon: "💻" },
  { name: "LinkTree Clone", url: "#", icon: "🚀" },
  { name: "Teh Djamin Website", url: "https://tehdjamin.com", icon: "🍵" },
  { name: "LinkedIn", url: "https://linkedin.com/in/muhammad-al-ghiffary-razan", icon: "👔" },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 p-4 text-white">
      
      {/* Profile Section */}
      <div className="mb-8 text-center">
        <div className="mx-auto h-24 w-24 overflow-hidden rounded-full border-2 border-blue-500">
           <Image 
             src="/profile.jpeg" 
             alt="Profile" 
             width={96} 
             height={96} 
             className="h-full w-full object-cover"
           />
        </div>
        <h1 className="mt-4 text-2xl font-bold">Muhammad Al Ghiffary Razan</h1>
        <p className="text-gray-400">Data Science Student & Web Dev</p>
      </div>

      {/* Links Section */}
      <div className="w-full max-w-md space-y-4">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.url}
            target="_blank"
            className="flex items-center justify-center gap-2 rounded-lg bg-gray-800 p-4 font-semibold transition hover:bg-blue-600 hover:scale-105"
          >
            <span>{link.icon}</span>
            <span>{link.name}</span>
          </Link>
        ))}
      </div>
      <div className="mt-8 rounded-xl border border-blue-500/30 bg-blue-900/20 p-4 text-center">
        <p className="text-sm text-blue-200">Support my work (SUI)</p>
        <code className="mt-2 block rounded bg-black/50 p-2 text-xs font-mono text-gray-300">
          0x06c87cf9e117af37e154a65caa473ab5b9c64dfbb31eabd6f3b69d39f2ed4b45
        </code>
      </div>

    </main>
  );
}
