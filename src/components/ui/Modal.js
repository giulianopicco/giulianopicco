import React from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Slider from './Slider'

const backdrop = {
    visible: {opacity: 1},
    hidden: {opacity: 0}
}

const modal = {
    visible: {
        y: "40vh",
        opacity: 1,
        transition: {delay: 0.5}
    },
    hidden: {
        y: "-100vh",
        opacity: 0
    }
}


const Modal = ({showModal, setShowModal, modalImages}) => {

    const closeModal = (e) => {
        if(e.target.id === "backdrop"){
            setShowModal(false);
        }
    }
    
    return (
        <AnimatePresence exitBeforeEnter>
            {showModal && (
                <motion.div id="backdrop"  className="fixed top-0 left-0 w-screen h-screen z-100 bg-black bg-opacity-60"
                    variants={backdrop}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    onClick={(e) => closeModal(e, modalImages)}
                >
                <div className="block text-right text-white text-2xl lg:text-4xl font-bold z-100 p-3 cursor-pointer" onClick={() => setShowModal(false)}>Close Gallery</div>
                <motion.div variants={modal} className="mx-auto max-w-7xl flex justify-center items-center p-3 rounded-xl">
                    <Slider modalImages={modalImages}></Slider>
                </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Modal;
