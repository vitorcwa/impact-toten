import { useState, useEffect, ChangeEvent } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Icon } from "@iconify/react";
import style from "./Veiculos.module.css";
import Thumb from "../../assets/images/thumb.webp";
import Lottie from "lottie-react";
import Speedometer from "../../assets/images/speedometer.json";

interface Foto {
  Codigo: number;
  URL: string;
  Posicao: number;
}

interface Veiculo {
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
  const { idMarca } = useParams<{ idMarca: string }>();
  const [data, setData] = useState<Veiculo[]>([]);
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
          `https://integracao.autocerto.com/api/Veiculo/ObterEstoque?IdMarca=${idMarca}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "text/json",
            },
          }
        );

        setData(veiculosResponse.data);
        setFilterRecords(veiculosResponse.data);
      } catch (error) {
        console.error("Erro ao buscar veículos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVeiculos();
  }, []);

  const filterMarca = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilterRecords(data.filter((d) => d.Marca.includes(event.target.value)));
  };

  if (loading) return <div className="loading-wrapper"><Lottie animationData={Speedometer} loop={true} className="mx-auto loading" /></div>;

  return (
    <div>

      <div className="w-full max-w-[1920px] mx-auto px-4 mt-12 mb-12 ">
        <div className="grid md:grid-cols-5 justify-between">
          <div className="mb-8">
            <select
              id="marcas-select"
              name="marca"
              onChange={filterMarca}
              className="select"
            >
              <option>Marca</option>
              <option value="">TODOS</option>
              <option value="CHEVROLET">CHEVROLET</option>
              <option value="CITROEN">CITROEN</option>
              <option value="FIAT">FIAT</option>
              <option value="FORD">FORD</option>
              <option value="HONDA">HONDA</option>
              <option value="HYUNDAI">HYUNDAI</option>
              <option value="JEEP">JEEP</option>
              <option value="KIA">KIA</option>
              <option value="NISSAN">NISSAN</option>
              <option value="PEUGEOT">PEUGEOT</option>
              <option value="RENAULT">RENAULT</option>
              <option value="TOYOTA">TOYOTA</option>
              <option value="VOLKSWAGEN">VOLKSWAGEN</option>
            </select>
          </div>

          <div className="md:col-span-4 md:pl-8">
            <div className="grid md:grid-cols-3 gap-8 justify-flex-start">
              {filterRecords.map((veiculo, ind) => {
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
                        )}/${veiculo.Versao.toLowerCase().replace(
                          /\s/g,
                          "-"
                        )}/${veiculo.Codigo}`}
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
                            <p
                              className={`${style.versao} dark`}
                            >
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
                                <span
                                  className={`text-gray-500`}
                                >
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
                                <span
                                  className={`text-gray-500`}
                                >
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
              })}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
