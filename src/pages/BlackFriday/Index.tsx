import style from "./Black.module.css";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/NavbarWhite.tsx";
import Destaques from "../../components/Destaques/Index.tsx";
import Hero from "./HeroBlack.tsx";
import Depoimentos from "./Depoimentos.tsx";
import Footer from '../../components/FooterHome/Index.tsx'
import { FloatingWhatsApp } from 'react-floating-whatsapp2'
import Ramon from "../../assets/images/ramon.webp"
import Sorteio from "../../assets/images/black-sorteio.webp"
import Fogo4 from "../../assets/images/black-fogo-4.webp"
import Fogo5 from "../../assets/images/black-fogo-5.webp"

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
    <div className="bodyBlack">
      <section className="mb-24">
        <header className={style.header}>
          <Navbar />
          <Hero />
        </header>

        <section className="container mx-auto px-4 md:mt-32">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card px-12 py-12 text-white">
              <ul>
                <li className="flex mb-2 text-xl"><Icon icon="fluent-color:star-32" width="23" height="23" className="mr-3" />ÓLEO</li>
                <li className="flex mb-2 text-xl"><Icon icon="fluent-color:star-32" width="23" height="23" className="mr-3" />FILTRO</li>
                <li className="flex mb-2 text-xl"><Icon icon="fluent-color:star-32" width="23" height="23" className="mr-3" />POLIMENTO</li>
                <li className="flex mb-2 text-xl"><Icon icon="fluent-color:star-32" width="23" height="23" className="mr-3" />HIGIENIZAÇÃO</li>
                <li className="flex mb-2 text-xl"><Icon icon="fluent-color:star-32" width="23" height="23" className="mr-3" />OXISANETIZAÇÃO</li>
              </ul>
            </div>
            <div className="card px-12 py-12 text-white">
              <ul>
                <li className="flex mb-2 text-xl"><Icon icon="fluent-color:star-32" width="23" height="23" className="mr-3" />IPVA</li>
                <li className="flex mb-2 text-xl"><Icon icon="fluent-color:star-32" width="23" height="23" className="mr-3" />MENOR TAXA</li>
                <li className="flex mb-2 text-xl"><Icon icon="fluent-color:star-32" width="23" height="23" className="mr-3" />MELHOR AVALIAÇÃO</li>
                <li className="flex mb-2 text-xl"><Icon icon="fluent-color:star-32" width="23" height="23" className="mr-3" />ATÉ 2 ANOS DE GARANTIA</li>
                <li className="flex mb-2 text-xl"><Icon icon="fluent-color:star-32" width="23" height="23" className="mr-3" />PRIMEIRA PARCELA EM 13 MESES</li>
              </ul>
            </div>
            <div className="card px-12 py-12 text-white">
              <ul>
                <li className="flex mb-2 text-xl"><Icon icon="fluent-color:star-32" width="23" height="23" className="mr-3" />RENOVA IMPACT</li>
                <li className="flex mb-2 text-xl"><Icon icon="fluent-color:star-32" width="23" height="23" className="mr-3" />TANQUE CHEIO</li>
                <li className="flex mb-2 text-xl"><Icon icon="fluent-color:star-32" width="23" height="23" className="mr-3" />BANCO DE COURO MULTIMÍDIA</li>
                <li className="flex mb-2 text-xl"><Icon icon="fluent-color:star-32" width="23" height="23" className="mr-3" />INDICAÇÃO DE OURO</li>
                <li className="flex mb-2 text-xl"><Icon icon="fluent-color:star-32" width="23" height="23" className="mr-3" />SORTEIO MOTO ELÉTRICA</li>
              </ul>
            </div>
          </div>
          <div className="md:-mt-6 flex justify-center relative">
            <motion.img
              src={Sorteio}
              alt="Impact Veículos"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  marginLeft: "10rem",
                  opacity: 0,
                },
                visible: {
                  marginLeft: "-4rem",
                  opacity: 1,
                  transition: {
                    delay: 0.25,
                  },
                },
              }}
            />
            <motion.img
              src={Fogo4}
              alt="Impact Veículos"
              className={`${style.fogo4}`}
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
              src={Fogo5}
              alt="Impact Veículos"
              className={`${style.fogo5}`}
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

        </section>

        <div className="bg-primary md:pb-86">
          <div className="container md:-mt-24 mx-auto px-4 py-12">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 mt-12">
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
                    className="w-20 h-20 object-contain grayscale"
                  />
                </Link>
              ))}
            </div>
          </div>
          <Destaques />
        </div>

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
