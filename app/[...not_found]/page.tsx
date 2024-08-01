"use client"

import Link from 'next/link'
import { Button } from './../components/button'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { motion } from "framer-motion";

export const metadata = {
    title: "Página não encontrada",
    description: "Página não encontrada",
  }

export default function NotFound() {
    return (
        <motion.div initial={{ opacity: 0, scale: 0.5, y: 200 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeInOut" }} className="flex flex-col items-center justify-center h-screen origin-center">
            <h1 className="text-9xl font-bold text-[#6BBAFF]">404</h1 >
            <h2 className="text-3xl font-medium text-gray-400 mb-4">
                Página não encontrada
            </h2>
            <Link href="/">
                <Button>
                    <HiArrowNarrowLeft size={20} />
                    Voltar para Home
                </Button>
            </Link>
        </motion.div >
    )
}