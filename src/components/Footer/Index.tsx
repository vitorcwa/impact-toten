import style from "./Footer.module.css";
import Logo from "../../assets/images/logo-white.webp";
import { Icon } from "@iconify/react";
import { FloatingWhatsApp } from 'react-floating-whatsapp2'
import Ramon from "../../assets/images/ramon.webp"

export default function Footer() {
  return (
    <footer className={`${style.footer} py-12 bg-dark text-white`}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 md:grid-cols-5 gap-8 justify-between items-start">
          <a href="/" className="col-span-1">
            <img
              src={Logo}
              alt="Impact Veículos"
              width={180}
            />
          </a>
          <div className="grid justify-start col-start-1 md:col-start-3">
            <h4 className="font-semibold mb-2">Telefone</h4>
            <a
              href="https://api.whatsapp.com/send?phone=%2B5521987399126"
              target="_blank"
              className="flex items-center gap-2"
            >
              <Icon icon="ic:baseline-whatsapp" width="24" height="24" />
              (21) 98739-9126
            </a>
            <a
              href="tel:+552126990118"
              target="_blank"
              className="flex items-center gap-2 mt-2"
            >
              <Icon icon="f7:phone-circle" width="24" height="24" />
              (21) 2699-0118
            </a>
            <h4 className="font-semibold mt-8 mb-2">
              Siga nossas redes sociais
            </h4>
            <div className="grid grid-cols-6 gap-3">
              <a
                href="https://api.whatsapp.com/send?phone=%2B5521987399126"
                target="_blank"
              >
                <Icon icon="ic:baseline-whatsapp" width="24" height="24" />
              </a>
              <a
                href="https://www.tiktok.com/@impactveiculos"
                target="_blank"
              >
                <Icon icon="hugeicons:tiktok" width="24" height="24" />
              </a>
              <a
                href="https://www.instagram.com/impactveiculos/"
                target="_blank"
              >
                <Icon icon="hugeicons:instagram" width="24" height="24" />
              </a>
              <a
                href="https://www.facebook.com/impactveiculos"
                target="_blank"
              >
                <Icon
                  icon="qlementine-icons:facebook-24"
                  width="24"
                  height="24"
                />
              </a>
              <a
                href="https://www.youtube.com/@Impactveiculos"
                target="_blank"
              >
                <Icon
                  icon="uit:youtube"
                  width="27"
                  height="27"
                />
              </a>
            </div>
          </div>
          <div className="grid justify-start md:justify-end">
            <h4 className="font-semibold mb-2">Nossos horários</h4>
            <div>
              Segunda à Sexta das 8h ás 18h
              <br />
              Sábado de 8h às 13h
            </div>
            <h4 className="font-semibold mt-8 mb-2">Endereço</h4>
            <a
              href="https://maps.app.goo.gl/Qwd8WX3ASRdgSkeZ8?g_st=iwb"
              target="_blank"
            >
              Avenida Automóvel Clube
              <br />
              1.700 Jardim Meriti - RJ
            </a>
          </div>
          <div className="grid justify-start md:justify-end">
            <h4 className="font-semibold mb-2">Mapa do site</h4>
            <a href="/">Home</a>
            <a href="/veiculos">Nosso estoque</a>
            <a href="/venda-seu-carro">Venda seu carro</a>
            <a href="/politicas-de-privacidade">Nossas Políticas</a>
          </div>
        </div>
      </div>

      <div className="container mx-auto pt-8 px-4 border-t-1 border-gray-600 mt-8 grid md:grid-cols-2 justify-between items-center">
        <div className="font-regular text-sm">
          Copyright © Impact Veículos - Todos os direitos reservados
        </div>
        <div className="font-regular text-sm grid justify-start md:justify-end mt-4 md:mt-0">
          <a href="https://www.cwadigital.com.br" target="_blank">
            Desenvolvido por Cwa Digital
          </a>
        </div>
      </div>
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
    </footer>
  );
}
