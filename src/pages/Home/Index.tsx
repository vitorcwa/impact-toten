import style from "./Home.module.css";
// import { motion } from "framer-motion";
// import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Index.tsx";
import Destaques from "../../components/Destaques/Index.tsx";
import Destaques2 from "../../components/Destaques2/Index.tsx";
import Hero from "./Hero.tsx";
import Depoimentos from "./Depoimentos.tsx";  
import Footer from '../../components/FooterHome/Index.tsx'
import { FloatingWhatsApp } from 'react-floating-whatsapp2'
import Ramon from "../../assets/images/ramon.webp"

const marcas = [
  { nome: "CHEVROLET", logo: "https://www.chevrolet.com.br/content/dam/chevrolet/south-america/brazil/portuguese/index/portable-navigation/primary-navigation/primary-subcontent/chevrolet-bowtie-120.svg" },
  { nome: "CITROEN", logo: "https://img.icons8.com/color/200/citroen.png" },
  { nome: "FIAT", logo: "https://cdn.worldvectorlogo.com/logos/fiat-logo-1.svg" },
  { nome: "FORD", logo: "https://www.ford.com.br/content/ford/br/pt_br/configuration/navigation-config/footer-config/jcr:content/footer/image1/image.imgs.full.high.png/1703786813878.png" },
  { nome: "HONDA", logo: "https://www.carlogos.org/car-logos/honda-logo-1981.png" },
  { nome: "HYUNDAI", logo: "https://www.pngplay.com/wp-content/uploads/13/Hyundai-Logo-PNG-Images-HD.png" },
  { nome: "JEEP", logo: "https://purepng.com/public/uploads/thumbnail//purepng.com-jeep-car-logologocar-brand-logoscarsjeep-car-logo-17015274282166aijb.png" },
  { nome: "KIA", logo: "https://freepnglogo.com/images/all_img/1720114100kia-logo-png-transparent-image.png" },
  { nome: "NISSAN", logo: "https://logodownload.org/wp-content/uploads/2014/09/nissan-logo-1-1.png" },
  { nome: "PEUGEOT", logo: "https://lezebre.lu/images/thumbnails/570/570/detailed/85/49285-Sticker-Peugeot-Nouveau-Logo-2021.png" },
  { nome: "RENAULT", logo: "https://logodownload.org/wp-content/uploads/2014/09/renault-logo-0-1.png" },
  { nome: "TOYOTA", logo: "https://freepnglogo.com/images/all_img/1731433480_toyota-logo-black.png" },
  { nome: "VOLKSWAGEN", logo: "https://ofertas.vw.com.br/_next/static/media/vwLogo.3bf47511.svg" },
  { nome: "BYD", logo: "https://images.seeklogo.com/logo-png/52/2/byd-atualizada-2024-logo-png_seeklogo-528892.png" },
  { nome: "CHERY", logo: "https://logosmarcas.net/wp-content/uploads/2021/08/Chery-Logo.png" },
];

export default function Home() {
  return (
    <div>
      <section className="mb-24">
        <header className={style.header}>
          <Navbar />
          <Hero />
        </header>

        <div className="container mx-auto px-4">
          {/* <div className="py-8 px-0 md:pt-24 md:px-8">
            <div className="flex flex-col-reverse md:flex-row md:grid-cols-2 justify-between items-center gap-8 md:gap-28 dark">
              <div>
                <motion.img
                  src={Image1}
                  alt="Impact Veículos"
                  className="relative inline w-full"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {
                      marginLeft: "-10rem",
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
              <div>
                <h4 className="h4 text-2xl md:text-4xl font-bold">
                  <span className="secondary">Até 180 Dias para Pagar </span> e
                  a maior aprovação do Rio!
                </h4>
                <p className="mt-8 text-2xl font-regular">
                  Viva uma experiência de carro premium na hora de acelerar seu
                  seminovo com a Impact.
                </p>
                <div className="mt-8 text-2xl font-bold grid grid-cols-12 gap-4 justify-start items-center">
                  <div className="col-span-2 md:col-span-1">
                    <Icon
                      icon="mingcute:calendar-fill"
                      width="48"
                      height="48"
                      className="dark"
                    />
                  </div>
                  <div className="col-span-10 md:col-span-11">
                    Até 180 dias paga pagar
                  </div>
                </div>
                <div className="mt-3 text-2xl font-bold grid grid-cols-12 gap-4 justify-start items-center">
                  <div className="col-span-2 md:col-span-1">
                    <Icon
                      icon="garden:security-26"
                      width="48"
                      height="48"
                      className="dark"
                    />
                  </div>
                  <div className="col-span-10 md:col-span-11">
                    Até 2 anos de garantia
                  </div>
                </div>
                <div className="mt-3 text-2xl font-bold grid grid-cols-12 gap-4 justify-start items-center">
                  <div className="col-span-2 md:col-span-1">
                    <Icon
                      icon="tabler:rosette-discount-filled"
                      width="48"
                      height="48"
                      className="dark"
                    />
                  </div>
                  <div className="col-span-10 md:col-span-11">
                    As menores taxas do Rio
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <div className="container md:mt-24 mx-auto px-4 py-12">
            <h2 className="text-2xl md:text-3xl font-bold text-left mb-10">
              Escolha a marca do seu carro
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {marcas.map((marca) => (
                <Link
                  key={marca.nome}
                  to={`/veiculos?marca=${marca.nome}`}
                  className="flex flex-col items-center justify-center p-4 border rounded-xl shadow hover:shadow-lg hover:bg-gray-50 transition"
                >
                  <img
                    src={marca.logo}
                    alt={marca.nome}
                    className="w-20 h-20 object-contain"
                  />
                  {/* <span className="text-lg font-semibold">{marca.nome}</span> */}
                </Link>
              ))}
            </div>
          </div>

          <Destaques />

          {/* <div className="card relative z-10 px-12 md:px-20 py-12 mt-8 mb-16 md:mb-0">
            <div className="grid md:grid-cols-4 gap-22 justify-between items-start mt-8 mb-8">
              <div>
                <p className="text-xl gray">
                  <Icon
                    icon="hugeicons:car-01"
                    width="72"
                    height="72"
                    className="mb-3 primary"
                  />
                  <span className="primary text-xl font-bold mb-4">
                    Estoque 100% selecionado
                  </span><br/>
                  Temos o orgulho de atuar com 100% dos carros vistoriados e
                  aprovados por laudo cautelar.
                </p>
              </div>
              <div>
                <p className="text-xl gray">
                  <Icon
                    icon="hugeicons:discount-tag-01"
                    width="72"
                    height="72"
                    className="mb-3 primary"
                  />
                  <span className="primary text-xl font-bold mb-4">
                    Taxas diferenciadas
                  </span><br/>
                  Aqui na Impact você conta com a maior aprovação e as menores
                  taxas.
                </p>
              </div>
              <div>
                <p className="text-xl gray">
                  <Icon
                    icon="carbon:calculator-check"
                    width="72"
                    height="72"
                    className="mb-3 primary"
                  />
                  <span className="primary text-xl font-bold mb-4">
                    Financiamento Impact
                  </span><br/>
                  Entrada parcelada no cartão, até 180 dias para pagar e as
                  menores taxas do Rio.
                </p>
              </div>
              <div>
                <p className="text-xl gray">
                  <Icon
                    icon="streamline-cyber:business-handshake-deal"
                    width="72"
                    height="72"
                    className="mb-3 primary"
                  />
                  <span className="primary text-xl font-bold mb-4">
                    Não perdemos negócio
                  </span><br/>
                  Te damos a total garantia do melhor atendimento e negociação
                  do Rio de Janeiro.
                </p>
              </div>
            </div>
          </div> */}
        </div>

        <Destaques2 />

        <Depoimentos />
      </section>
      
      <FloatingWhatsApp
        className='relative z-20'
        phoneNumber='21987399126'
        accountName='Ramon da Impact'
        avatar={Ramon}
        statusMessage='Costuma responder rápido'
        chatMessage='Fala chefe! Como posso te ajudar hoje?'
        darkMode={false}
        allowClickAway={true}
        allowEsc={true}
        notification={true}
        notificationSound={true}
        placeholder='Escreva sua mensagem...'
      />

      <Footer />
    </div>
  );
}
