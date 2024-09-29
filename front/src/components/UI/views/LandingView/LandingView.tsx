"use client";
import ActionButton from "@/components/UI/ActionButton/ActionButton";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Importamos framer-motion
import ReusableModal from "../../Modal/ReusableModal";
import FormComponent from "../../ReusableFormComponent/FormComponent";
import {
  buttonProductRegisterForm,
  productRegisterDataConstructor,
  productRegisterInitialValues,
  productRegisterSchema,
} from "./formData";
import { postProductRegister } from "@/api/postProductRegister";
import { IProductRegister } from "@/interfaces/productRegister";

const LandingView: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [openWarranty, setOpenWarranty] = useState(false);
  const [message, setMessage] = useState("");
  const [startAnimation, setStartAnimation] = useState(false); // Controla el inicio de la animación

  // Usamos useEffect para retrasar la animación
  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true); // Inicia la animación después de 2 segundos
    }, 3000);

    return () => clearTimeout(timer); // Limpia el temporizador
  }, []);

  const submitForm = async (data: IProductRegister) => {
    try {
      const response = await postProductRegister(data);
      console.log(response);
      if (response) {
        setModalOpen(false);
        setMessage(response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col w-screen h-screen ">
      {/* Background with scaling animation */}
      <div className="bg-landing-bg bg-cover bg-center absolute inset-0 animate-scaleImage">
        <div className="absolute inset-0 overflow-hidden w-full bg-black opacity-50"></div>
      </div>

      {/* Content over the background */}
      <div className="relative z-20 flex flex-col justify-evenly w-full md:mt-[5%]">
        <div className="flex flex-col items-center justify-center text-white p-8 overflow-hidden ">
          <div className="flex flex-col items-center md:w-3/4 ">
            <Image
              src="/images/Whispering Winds-Logotypewhite.png"
              width={256}
              height={256}
              alt="logo"
              className="mx-auto mb-20 mt-10 md:mb-20 md:mt-0 "
            />
            <h1 className="text-5xl text-center text-yellow-600 mt-0 mx-auto w-full cyGroteskBold tracking-tighter uppercase md:text-7xl lg:text-8xl hover:scale-110">
              Empowering adventurous souls
            </h1>
            <h3 className="firaRegular text-2xl text-center md:text-4xl mt-10 uppercase">
              [Unveiling soon] Stay curious.
            </h3>

            {/* Motion animation para el botón con framer-motion */}
            <motion.div
              initial={{ x: 300, opacity: 0 }}
              animate={startAnimation ? { x: 0, opacity: 1 } : {}}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              <ActionButton
                className="mt-16 firaRegular text-xl md:text-2xl hover:underline uppercase bg-yellow-600 px-6 py-4"
                onClick={() => {
                  setModalOpen(true);
                }}
              >
                register your product for extended warranty
              </ActionButton>
            </motion.div>
          </div>
        </div>
      </div>

      {modalOpen && (
        <ReusableModal
          isOpen={modalOpen}
          onClose={() => {
            setModalOpen(false);
            setOpenWarranty(false); // Cierra la sección de garantía al cerrar el modal
          }}
          blurBackground={true}
          className={`bg-black/75 transition-all duration-300 ${
            openWarranty
              ? "w-[95%] h-[80%] lg:w-1/2 lg:h-[65%] scrollbar-hide"
              : "w-1/2 h-1/2 scrollbar-hide"
          }`}
        >
          <FormComponent
            iniValues={productRegisterInitialValues}
            valiSchema={productRegisterSchema}
            buttonsForm={buttonProductRegisterForm}
            dataContructor={productRegisterDataConstructor}
            handlerSubmit={submitForm}
          ></FormComponent>
          <div className="mt-4">
            <ActionButton
              className="text-white underline uppercase firaRegular"
              onClick={() => setOpenWarranty((prev) => !prev)}
            >
              {openWarranty ? "Hide Warranty" : "Extended Warranty"}
            </ActionButton>
          </div>
          {openWarranty && (
            <p className="text-white firaRegular mt-4">
              By registering your product, you receive an extended warranty of
              up to 6 months from the date of purchase, covering manufacturing
              defects and material issues only. This warranty does not cover
              wear and tear, accidental damage, or misuse.
            </p>
          )}
        </ReusableModal>
      )}

      {message && (
        <div className="fixed bottom-5 right-5 bg-gray-800 text-white p-4 firaRegular rounded-md shadow-lg">
          {message}
        </div>
      )}
    </div>
  );
};

export default LandingView;
