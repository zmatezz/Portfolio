"use client"

import { TbArrowNarrowUp } from "react-icons/tb"
import { Button } from "../button"
import { useCallback, useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"


export const BackToTop = () => {
    const [show, setShow] = useState(false)

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const handleScroll = useCallback(() => {
        if (!show && window.scrollY > 500) setShow(true)
        if (show && window.scrollY <= 500) setShow(false)
    }, [show])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [handleScroll])


    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    className="fixed right-4 bottom-4 z-20"
                    initial={{ opacity: 0, bottom: -10 }}
                    animate={{ opacity: 1, bottom: 16 }}
                    exit={{ opacity: 0, bottom: -10 }}
                    transition={{ duration: 0.3 }}
                >
                    <Button
                        onClick={scrollToTop}
                        className="shadow-lg shadow-red-400/20"
                    >
                        <TbArrowNarrowUp size={20} />
                    </Button>
                </motion.div>
            )}
        </AnimatePresence>
    )
}