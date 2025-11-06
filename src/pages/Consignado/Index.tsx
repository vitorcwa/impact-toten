import style from "./Consignado.module.css";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar/Index";
import ImageHeader from "../../assets/images/img-venda.webp";
import Footer from "../../components/Footer/Index.tsx";

export default function Consignado() {
  return (
    <div>
      <header className={style.header}>
        <Navbar />

        <div className="container mx-auto px-4 md:mt-12 pb-16">
          <div className="grid md:grid-cols-4 gap-12 md:gap-24 items-start">
            <div className="md:col-span-2 mt-8 md:mt-0">
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
                <h1 className="dark">
                  <span className="text-2xl md:text-5xl font-bold block">
                    Vendemos o seu carro
                  </span>{" "}
                  <span className="text-2xl md:text-5xl font-bold block md:mt-4">
                    em tempo recorde!
                  </span>
                </h1>
                <p className="text-xl tmd:ext-2xl font-light md:font-regular dark mt-8">
                  Seu veículo será preparado para ser anunciado em todas as
                  plataformas digitais da Impact, que possuem um alcance mensal
                  de <span className="font-bold">3 milhões de pessoas.</span>
                </p>
                <p className="text-xl tmd:ext-2xl font-light md:font-regular dark mt-4">
                  Fazemos um contrato do período que o carro vai ficar em nossa
                  loja e do nosso seguro de pátio.
                </p>
                <motion.img
                  src={ImageHeader}
                  alt="Automóvel Club"
                  className="w-[450px] hidden md:block md:mt-16 text-center mx-auto"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {
                      marginLeft: "0rem",
                      opacity: 0,
                    },
                    visible: {
                      marginLeft: "0rem",
                      opacity: 1,
                      transition: {
                        delay: 0.25,
                      },
                    },
                  }}
                />
              </motion.div>
            </div>
            <div className={`bg-white rounded-xl px-6 md:col-span-2`}>
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/YOemTfa3Frex5OdAiplz"
                id="inline-YOemTfa3Frex5OdAiplz"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Formulário Consignado"
                data-height="891"
                data-layout-iframe-id="inline-YOemTfa3Frex5OdAiplz"
                data-form-id="YOemTfa3Frex5OdAiplz"
                title="Formulário Consignado"
              ></iframe>
              <script src="https://link.msgsndr.com/js/form_embed.js"></script>
            </div>
          </div>
        </div>
      </header>
      <Footer />
    </div>
  );
}
