import { useState, useEffect } from "react";
import axios from "axios";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import style from "./Destaques.module.css";
import Thumb from "../../assets/images/thumb.webp";
import Lottie from "lottie-react";
import Speedometer from "../../assets/images/speedometer.json";

interface Foto {
  Codigo: number;
  URL: string;
  Posicao: number;
}

interface Veiculo {
  Destaque: boolean;
  Codigo: number;
  Marca: string;
  Modelo: string;
  Versao: string;
  AnoFabricacao: number;
  AnoModelo: number;
  Observacao: string;
  Km: number;
  Fotos?: Foto[];
}

export default function Veiculos() {
  // const imagePath = "https://www.autocerto.com/fotos/";
  // const [data, setData] = useState<Veiculo[]>([]);
  const [filterRecords, setFilterRecords] = useState<Veiculo[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchToken = async () => {
    try {
      const params = new URLSearchParams();
      params.append("grant_type", "password");
      params.append("username", "api@impactveiculos.com.br");
      params.append("password", "3nji$iIkm");
      // params.append("client_id", "SEU_CLIENT_ID"); // ← Se necessário
      // params.append("client_secret", "SEU_CLIENT_SECRET"); // ← Se necessário

      const response = await axios.post(
        "https://integracao.autocerto.com/oauth/token",
        params,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      const token = response.data.access_token; // Ou apenas `token`, depende do retorno
      console.log("Token obtido:", token);
      return token;
    } catch (error: any) {
      console.error(
        "Erro ao obter token:",
        error.response?.data || error.message
      );
      return null;
    }
  };

  useEffect(() => {
    const fetchVeiculos = async () => {
      setLoading(true);

      try {
        const token = await fetchToken();
        if (!token) return;

        const veiculosResponse = await axios.get<Veiculo[]>(
          "https://integracao.autocerto.com/api/Veiculo/ObterEstoque?codigoUnidade=634",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "text/json",
            },
          }
        );

        // setData(veiculosResponse.data);
        setFilterRecords(veiculosResponse.data);
      } catch (error) {
        console.error("Erro ao buscar veículos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVeiculos();
  }, []);

  if (loading)
    return (
      <div className="loading-wrapper">
        <Lottie
          animationData={Speedometer}
          loop={true}
          className="mx-auto loading"
        />
      </div>
    );

  return (
    <div className="mt-0 md:-mt-48 pt-16 md:pt-48 pb-16">
      <div className="container mx-auto px-0 md:px-4 mt-0 md:mt-24">
        <h4 className="h4 text-2xl md:text-3xl font-bold text-center mb-8">
          Nossos destaques
        </h4>
        <div className="grid md:grid-cols-3 gap-8 justify-center">
          {filterRecords.map((veiculo, ind) => {
            if (`${veiculo.Destaque}` === "true") {
              const fotoPrincipal = veiculo.Fotos?.find(
                (foto) => foto.Posicao === 1
              )?.URL;
              return (
                <div className="md:grid-col" key={ind}>
                  <div className={style.box} key={veiculo.Codigo}>
                    <a
                      href={`/veiculo/${veiculo.Marca.toLowerCase()}/${veiculo.Modelo.toLowerCase().replace(
                        /\s/g,
                        "-"
                      )}/${veiculo.Versao.toLowerCase().replace(/\s/g, "-")}/${
                        veiculo.Codigo
                      }`}
                      className={style.link}
                    >
                      <div
                        className={`justify-center content-center ${style.imgBox}`}
                        style={{
                          backgroundImage: `url(${fotoPrincipal || Thumb})`,
                          backgroundSize: fotoPrincipal ? "cover" : "contain",
                        }}
                      ></div>
                      <div className="p-6">
                        <div className="mb-6">
                          <h4 className={`font-semibold ${style.dark}`}>
                            {veiculo.Marca} {veiculo.Modelo}
                          </h4>
                          <p className={`${style.versao} dark`}>
                            {veiculo.Versao}
                          </p>
                        </div>
                        <div className="grid grid-cols-2 justify-between items-center gap-2">
                          <div>
                            <div className={`flex items-center ${style.tag}`}>
                              <Icon
                                icon="ic:baseline-speed"
                                width="24"
                                height="24"
                                className={style.iconSmall}
                              />
                              <span className={`text-gray-500`}>
                                {veiculo.Km}KM
                              </span>
                            </div>
                          </div>
                          <div>
                            <div className={`flex items-center ${style.tag}`}>
                              <Icon
                                icon="mynaui:calendar"
                                width="24"
                                height="24"
                                className={style.iconSmall}
                              />
                              <span className={`text-gray-500`}>
                                {veiculo.AnoFabricacao}/{veiculo.AnoModelo}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <a href="/veiculos">
          <motion.button
            className="button-white mt-12 mb-12 mx-auto block"
            whileHover={{ scale: 1.1 }}
          >
            Veja nosso estoque completo
          </motion.button>
        </a>
      </div>
    </div>
  );
}
