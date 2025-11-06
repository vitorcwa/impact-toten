import { Icon } from "@iconify/react";
// import Image from "../../assets/images/feirao.png";
// import style from "./Destaques2.module.css";

export default function Destaques2() {

  return (
    // <div className="mt-0 md:-mt-48 pt-16 md:pt-48 pb-6 md:pb-96 bg-primary bg-dot">
    <div className="mt-0 pt-24 pb-6 md:pb-96 bg-primary bg-dot">
      {/* <div className="container py-8 px-0 md:pt-24 md:px-8">
        <div className="flex flex-col-reverse md:flex-row md:grid-cols-2 justify-between items-center gap-8 md:gap-28 dark">
          <div className="grid grid-cols-2">
            <img
              src={Image}
              alt="Impact Veículos"
              className="relative inline w-full"
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
              <div className="text-gray-800">
                <div>Polimento e higienização</div>
                <div>Troca de óleo</div>
                <div>Troca de filtro</div>
                <div>Primeira parcela para até 150 dias</div>
                <div>Garantia de recompra do seu veículo com até 90% da FIPE</div>
                <div>Taxas a partir de 0,99%</div>
                <div>Laudo cautelar</div>
                <div>Garantia de 2 anos</div>
                <div>Voucher de R$100,00 da Nani Sound</div>
                <div>Oxisanização</div>
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

      <div className="relative z-10 px-12 md:px-30 mt-8 mb-24">
        <div className="grid md:grid-cols-4 gap-22 justify-between items-start mt-8 mb-8">
          <div>
            <p className="text-xl dark">
              <Icon
                icon="hugeicons:car-01"
                width="72"
                height="72"
                className="mb-3 dark"
              />
              <span className="dark text-xl font-bold mb-4">
                Estoque 100% selecionado
              </span><br />
              Temos o orgulho de atuar com 100% dos carros vistoriados e
              aprovados por laudo cautelar.
            </p>
          </div>
          <div>
            <p className="text-xl dark">
              <Icon
                icon="hugeicons:discount-tag-01"
                width="72"
                height="72"
                className="mb-3 dark"
              />
              <span className="dark text-xl font-bold mb-4">
                Taxas diferenciadas
              </span><br />
              Aqui na Impact você conta com a maior aprovação e as menores
              taxas.
            </p>
          </div>
          <div>
            <p className="text-xl dark">
              <Icon
                icon="carbon:calculator-check"
                width="72"
                height="72"
                className="mb-3 dark"
              />
              <span className="dark text-xl font-bold mb-4">
                Financiamento Impact
              </span><br />
              Entrada parcelada no cartão, até 180 dias para pagar e as
              menores taxas do Rio.
            </p>
          </div>
          <div>
            <p className="text-xl dark">
              <Icon
                icon="streamline-cyber:business-handshake-deal"
                width="72"
                height="72"
                className="mb-3 dark"
              />
              <span className="dark text-xl font-bold mb-4">
                Não perdemos negócio
              </span><br />
              Te damos a total garantia do melhor atendimento e negociação
              do Rio de Janeiro.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
