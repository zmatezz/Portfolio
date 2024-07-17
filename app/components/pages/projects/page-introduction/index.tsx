import { Link } from "@/app/components/link"
import { SectionTitle } from "@/app/components/section-title"
import { HiArrowNarrowLeft } from "react-icons/hi"

export const PageIntroduction = () => {
    return (
    <section className="w-full h-[450px] lg:h-[630px] bg-gradient-to-tl from-slate-700 via-gray-800 to-zinc-900 flex flex-col items-center justify-center px-2">
        <SectionTitle subtitle="projetos" title="Meus projetos" className="text-center items-center [&>h3]:text-4xl" />
        <div className="flex flex-col items-center">
            <p className="text-gray-400 text-center max-w-[640px] my-6 text-sm sm:text-base">Aqui você poderá ver alguns dos projetos que eu desenvolvi. Navegue à vontade e explore os projetos para ver como foram criados, as tecnologias utilizadas e as funcionalidades implementadas.</p>
            <Link href="/">
                <HiArrowNarrowLeft size={20} />
                Voltar para Home
            </Link>
        </div>
    </section>
    )
}