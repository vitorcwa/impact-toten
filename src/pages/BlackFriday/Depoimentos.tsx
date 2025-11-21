// import React from "react";
import Slider from "react-slick";
import style from "./Black.module.css";
import { Icon } from "@iconify/react";

function Fade() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToShow: 3,
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
    <div className="px-4 md:px-16 mt-12 md:mt-0">
      <div className="container mx-auto mt-0 md:-mt-86 card-white relative z-10 pt-10 md:pt-16 pb-16 px-8">
        <h3 className="rubik text-xl md:text-3xl font-bold dark mb-16 mx-auto text-left md:text-center">
          O que nossos clientes dizem sobre nós
        </h3>
        <Slider {...settings}>
          <div className="px-0 md:px-10 mb-4 md:mb-0">
            <div className="flex justify-start items-center mb-4 primary">
              <Icon icon="tabler:star-filled" width="24" height="24" />
              <Icon icon="tabler:star-filled" width="24" height="24" />
              <Icon icon="tabler:star-filled" width="24" height="24" />
              <Icon icon="tabler:star-filled" width="24" height="24" />
              <Icon icon="tabler:star-filled" width="24" height="24" />
            </div>
            <p className={`${style.card} bg-white border-radius-40 text-md`}>
              "Profissionais excelentes, loja muito bem estruturada, tudo muito
              bem organizado e transparente!!! Deixo meu agradecimento para o
              vendedor Hebert Lemos que me ajudou desde o primeiro contato
              através do WhatsApp até o final da compra e ainda me surpreendeu
              com a entrega de um fone Bluetooth sem fio sensacional de brinde
              quando fui buscar meu veículo."
              <span className="text-xl md:text-xl font-bold mt-4 block">
                Allan Motta
              </span>
            </p>
          </div>
          <div className="px-0 md:px-10 mb-4 md:mb-0">
            <div className="flex justify-start items-center mb-4 primary">
              <Icon icon="tabler:star-filled" width="24" height="24" />
              <Icon icon="tabler:star-filled" width="24" height="24" />
              <Icon icon="tabler:star-filled" width="24" height="24" />
              <Icon icon="tabler:star-filled" width="24" height="24" />
              <Icon icon="tabler:star-filled" width="24" height="24" />
            </div>
            <p className={`${style.card} bg-white border-radius-40 text-lg`}>
              "Tive o melhor atendimento pela Patrícia Liane, ótima com público,
              muito atenciosa, paciente , esforçada e carinhosa, super recomendo
              a agência e a vendedora"
              <span className="text-xl md:text-xl font-bold mt-4 block">
                Vitoria Freitas
              </span>
            </p>
          </div>
          <div className="px-0 md:px-10 mb-4 md:mb-0">
            <div className="flex justify-start items-center mb-4 primary">
              <Icon icon="tabler:star-filled" width="24" height="24" />
              <Icon icon="tabler:star-filled" width="24" height="24" />
              <Icon icon="tabler:star-filled" width="24" height="24" />
              <Icon icon="tabler:star-filled" width="24" height="24" />
              <Icon icon="tabler:star-filled" width="24" height="24" />
            </div>
            <p className={`${style.card} bg-white border-radius-40 text-lg`}>
              "Patrícia obrigada pela dedicação pelo carinho de fazer de tudo
              pra deixar os clientes satisfeitos, a minha esposa gostou muito,
              ela se adaptou rápido muito obrigada mesmo sucesso na sua vida, na
              sua carreira e que Deus abençoe vc e sua família gratidão"
              <span className="text-xl md:text-xl font-bold mt-4 block">
                Rayane Cardoso
              </span>
            </p>
          </div>
          <div className="px-0 md:px-10 mb-4 md:mb-0">
            <div className="flex justify-start items-center mb-4 primary">
              <Icon icon="tabler:star-filled" width="24" height="24" />
              <Icon icon="tabler:star-filled" width="24" height="24" />
              <Icon icon="tabler:star-filled" width="24" height="24" />
              <Icon icon="tabler:star-filled" width="24" height="24" />
              <Icon icon="tabler:star-filled" width="24" height="24" />
            </div>
            <p className={`${style.card} bg-white border-radius-40 text-lg`}>
              Eles são simplesmente maravilhosos. Vendedora Patrícia Liane foi
              um amor, atenciosa do início ao fim. Obrigadaaaa!
              <span className="text-xl md:text-xl font-bold mt-4 block">
                Wanessa Tavares
              </span>
            </p>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Fade;
