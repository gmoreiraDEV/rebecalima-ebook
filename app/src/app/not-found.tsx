import CloudImage from "@/components/CloudImage";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col text-brand-marsala text-center">
      <div className="max-w-[300px] sm:max-w-lg m-auto p-10 h-full">
        <h1 className="text-3xl font-bold">
          Ops, parece que não encontrei o que procura
        </h1>
        <Link href="/">Voltar ao início</Link>
      </div>
    </main>
  );
}
