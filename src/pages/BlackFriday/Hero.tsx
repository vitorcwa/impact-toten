// import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Image1 from "../../assets/images/180-dias.webp";
import ImageHeader from "../../assets/images/banner.webp";

function Fade() {
  const settings = {
    dots: false,
    arrows: true,
    fade: true,
    infinite: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <div className="md:container mx-auto pl-4 pr-4">
            <div className="grid md:grid-cols-5 justify-between items-center">
              <div className="md:col-span-2 mt-8 md:-mt-20">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  className="relative z-10"
                  variants={{
                    hidden: {
                      scale: 0.8,
                      opacity: 0,
                    },
                    visible: {
                      scale: 1,
                      opacity: 1,
                      transition: {
                        delay: 0.4,
                      },
                    },
                  }}
                >
                  <h1 className="dark text-3xl md:text-5xl font-bold">
                    <span className="">Venda seu carro com a</span>{" "}
                    <span className="secondary">TOP 1 do Rio!</span>
                  </h1>
                  <p className="text-xl font-regular md:font-regular dark mt-8">
                    Conte com toda nossa estrutura financeira, jurídica,
                    comercial e de marketing e venda seu carro em tempo recorde
                    e sem correr riscos com golpistas.
                  </p>
                  <a href="https://api.whatsapp.com/send?phone=%2B5521987399126" target="_blank">
                    <motion.button
                      className="button-white mt-12 mx-auto"
                      whileHover={{ scale: 1.1 }}
                    >
                      Fale agora com nosso time e saiba como!
                    </motion.button>
                  </a>
                </motion.div>
              </div>
              <div className="mt-8 md:mt-0 md:col-span-3 relative">
                <motion.img
                  src={ImageHeader}
                  alt="Impact Veículos"
                  className="w-full"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {
                      marginLeft: "10rem",
                      opacity: 0,
                    },
                    visible: {
                      marginLeft: "0",
                      opacity: 1,
                      transition: {
                        delay: 0.25,
                      },
                    },
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="md:container mx-auto pl-4 pr-4">
            <div className="grid md:grid-cols-12 justify-between items-center">
              <div className="md:col-span-5 mt-8 md:mt-0">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  className="relative z-10"
                  variants={{
                    hidden: {
                      scale: 0.8,
                      opacity: 0,
                    },
                    visible: {
                      scale: 1,
                      opacity: 1,
                      transition: {
                        delay: 0.4,
                      },
                    },
                  }}
                >
                  <h1 className="dark text-3xl font-bold">
                    <span className="secondary md:text-4xl">Até 180 dias para pagar na</span>{" "}
                    <span className="md:text-5xl">maior aprovação do Rio!</span>
                  </h1>
                  <p className="text-xl font-regular md:font-regular dark mt-8">
                    Viva uma experiência de carro premium na hora de acelerar seu seminovo com a Impact.
                  </p>
                  {/* <div className="mt-8 text-xl font-bold grid grid-cols-12 gap-2 justify-start items-center">
                    <div className="col-span-2 md:col-span-1">
                      <Icon
                        icon="mingcute:calendar-fill"
                        width="28"
                        height="28"
                        className="dark"
                      />
                    </div>
                    <div className="col-span-10 md:col-span-11">
                      Até 180 dias paga pagar
                    </div>
                  </div> */}
                  <div className="mt-8 text-xl font-bold flex">
                    <div>
                      <Icon
                        icon="garden:security-26"
                        width="28"
                        height="28"
                        className="dark mr-2"
                      />
                    </div>
                    <div className="col-span-10 md:col-span-11">
                      Até 2 anos de garantia
                    </div>
                  </div>
                  <div className="mt-2 text-xl font-bold flex">
                    <div>
                      <Icon
                        icon="tabler:rosette-discount-filled"
                        width="28"
                        height="28"
                        className="dark mr-2"
                      />
                    </div>
                    <div className="col-span-10 md:col-span-11">
                      As menores taxas do Rio
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="mt-8 md:mt-0 md:col-span-7 relative text-center">
                <motion.img
                  src={Image1}
                  alt="Impact Veículos"
                  className="w-10/12 m-auto"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {
                      opacity: 0,
                    },
                    visible: {
                      opacity: 1,
                      transition: {
                        delay: 0.25,
                      },
                    },
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="bg-[url('https://impactveiculos.com.br/wp-content/uploads/2025/02/Precisando-de-dinheiro-2-scaled.jpg')] bg-cover bg-center h-[400px] md:h-[600px]"></div>
        <div className="bg-[url('https://impactveiculos.com.br/wp-content/uploads/2024/11/banner4-scaled.jpg')] bg-cover bg-center h-[400px] md:h-[600px]"></div>
        <div className="bg-[url('https://impactveiculos.com.br/wp-content/uploads/2024/11/banner2-scaled.jpg')] bg-cover bg-center h-[400px] md:h-[600px]"></div>
        <div className="bg-[url('https://impactveiculos.com.br/wp-content/uploads/2025/02/Precisando-de-dinheiro-1-scaled.jpg')] bg-cover bg-center h-[400px] md:h-[600px]"></div> */}
      </Slider>
    </div>
  );
}

export default Fade;
