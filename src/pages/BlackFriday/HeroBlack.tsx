// import React from "react";
import style from "./Black.module.css";
import Slider from "react-slick";
import { motion } from "framer-motion";
// import { Icon } from "@iconify/react";
// import Image1 from "../../assets/images/180-dias.webp";
import ImageHeader from "../../assets/images/black-hero.webp";
import Fogo1 from "../../assets/images/black-fogo-1.webp";
import Fogo2 from "../../assets/images/black-fogo-2.webp";
import Fogo3 from "../../assets/images/black-fogo-3.webp";

function Fade() {
  const settings = {
    dots: false,
    arrows: false,
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
        <div className="relative">
          <div className="md:container mx-auto pl-4 pr-4 mt-8">
            <div className="grid md:grid-cols-5 grid-flow-dense justify-between items-center">
              <div className="md:col-span-2 md:order-1 order-2 mt-8 md:-mt-20 md:pr-16 md:mb-0 mb-16">
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
                  <h1 className="text-white text-3xl md:text-5xl font-bold">
                    <span className="">Você está na</span>{" "}
                    <span className="primary">maior Black de todos os tempos!</span>
                  </h1>
                  
                  {/* <a href="https://api.whatsapp.com/send?phone=%2B5521987399126" target="_blank">
                    <motion.button
                      className="button-white mt-12 mx-auto"
                      whileHover={{ scale: 1.1 }}
                    >
                      Fale agora com nosso time
                    </motion.button>
                  </a> */}
                </motion.div>
              </div>
              <div className="md:col-span-3 md:order-2 order-1 mt-8 md:mt-0  relative">
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
                <motion.img
                  src={Fogo1}
                  alt="Impact Veículos"
                  className={`${style.fogo1}`}
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
                <motion.img
                  src={Fogo2}
                  alt="Impact Veículos"
                  className={`${style.fogo2}`}
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
          <motion.img
            src={Fogo3}
            alt="Impact Veículos"
            className={`${style.fogo3}`}
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
      </Slider>
    </div>
  );
}

export default Fade;
