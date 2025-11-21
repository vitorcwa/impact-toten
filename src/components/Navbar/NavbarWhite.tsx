import style from "./Navbar.module.css";
import Logo from "../../assets/images/logo-white.webp";
import { useState } from "react";
import { Icon } from "@iconify/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`${style.navbar}`}>
      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="grid grid-cols-2 md:grid-cols-5 justify-between md:items-center">
          <a href="/" className="md:col-span-2">
            <img
              src={Logo}
              alt="Impact Veículos"
              className="w-96 md:w-48"
            />
          </a>
          <div className="md:col-span-3 md:items-center grid justify-end">
            {/* Menu Desktop */}
            <div className="hidden md:flex gap-10 justify-end text-lg font-semibold text-white">
              <a href="/">Home</a>
              <a href="/veiculos">Nosso estoque</a>
              {/* <a href="/venda-seu-carro">Venda seu carro</a>
              <a href="/agendamento">Agende uma visita</a>
              <a
                href="https://api.whatsapp.com/send?phone=%2B5521987399126"
                target="_blank"
              >
                <Icon icon="ic:baseline-whatsapp" width="26" height="26" />
              </a> */}
            </div>

            {/* Botão do menu mobile */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
              <Icon
                icon={isOpen ? "mdi:close" : "mdi:menu"}
                width="24"
                height="24"
              />
            </button>

            {/* Menu mobile */}
            {isOpen && (
              <nav className="menu-mobile flex flex-col md:hidden gap-4">
                <a href="/">Home</a>
                <a href="/veiculos">Nosso estoque</a>
                <a href="/venda-seu-carro">Venda seu carro</a>
                <a href="/agendamento">Agende uma visita</a>
                <h4 className="font-semibold mt-4">Telefones</h4>
                <a
                  href="https://api.whatsapp.com/send?phone=%2B5521987399126"
                  target="_blank"
                  className="flex justify-end items-center gap-2"
                >
                  <Icon icon="ic:baseline-whatsapp" width="24" height="24" />
                  (21) 98739-9126
                </a>
                <a
                  href="tel:+552132688194"
                  target="_blank"
                  className="flex justify-end items-center gap-2"
                >
                  <Icon icon="f7:phone-circle" width="24" height="24" />
                  (21) 3268-8194
                </a>
                <h4 className="font-semibold mt-8 mb-2">
                  Nossas redes sociais
                </h4>
                <div className="grid grid-cols-4 gap-3">
                  <a
                    href="https://api.whatsapp.com/send?phone=%2B5521987399126"
                    target="_blank"
                  >
                    <Icon icon="ic:baseline-whatsapp" width="24" height="24" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@automovelclub_motors"
                    target="_blank"
                  >
                    <Icon icon="hugeicons:tiktok" width="24" height="24" />
                  </a>
                  <a
                    href="https://www.instagram.com/automovelclub_motors/"
                    target="_blank"
                  >
                    <Icon icon="hugeicons:instagram" width="24" height="24" />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61557069214333"
                    target="_blank"
                  >
                    <Icon
                      icon="qlementine-icons:facebook-24"
                      width="24"
                      height="24"
                    />
                  </a>
                </div>
              </nav>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
