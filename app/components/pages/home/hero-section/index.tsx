import { Button } from "@/app/components/button";
import { TechBadge } from "@/app/components/tech-badge";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi"
import { TbBrandGithub, TbBrandLinkedin, TbBrandWhatsapp } from "react-icons/tb";


const MOCK_CONTACTS = [
    {
        url: 'https://github.com/zmatezz',
        icon: <TbBrandGithub />
    },
    {
        url: 'https://github.com/zmatezz',
        icon: <TbBrandLinkedin />
    },
    {
        url: 'https://github.com/zmatezz',
        icon: <TbBrandWhatsapp />
    }
]

export const HeroSection = () => {
    return (
        <section className="w-full lg:h-[755px] bg-gradient-to-tl from-slate-700 via-gray-800 to-zinc-900 bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
            <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
                <div className="w-full lg:max-w-[530px]">
                    <p className="font-mono text-red-400">Olá, meu nome é</p>
                    <h2 className="text-4xl font-medium mt-2">Matheus Guedes</h2>

                    <p className="text-gray-400 my-6 text-sm sm:text-base">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est sequi error tempora soluta? Voluptas non repellendus eligendi, ratione, odit unde aliquam impedit voluptatibus voluptatum quibusdam vero libero. Minus, blanditiis rem?</p>

                    <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">{Array.from({ length: 7 }).map((_, index) => (<TechBadge name="Stack" key={index} />))}</div>
                    <div className="flex sm:items-center mt-6 lg:mt-10 sm:gap-5 flex-col sm:flex-row"><Button className="w-max shadow-button">Entre em contato <HiArrowNarrowRight size={18} /></Button>

                        <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
                            {MOCK_CONTACTS.map((contact, index) => (
                                <a href={contact.url} key={`contact-${index}`} target="_blank" className="hover:text-gray-100 transition-colors">
                                    {contact.icon}
                                </a>
                            ))}
                        </div></div>
                </div>

                <Image width={420} height={404} className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover" src="/images/profile-pic.png" alt="Foto de perfil do Matheus Guedes" />
            </div>
        </section>
    );
};