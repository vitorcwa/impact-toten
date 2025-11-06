import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Gallery, Item } from "react-photoswipe-gallery";
import Slider from "react-slick";
import Lottie from "lottie-react";
import Footer from "../../components/Footer/Index.tsx";

// import style from "./Veiculo.module.css";
import "photoswipe/dist/photoswipe.css";
import "../../services/slick.css";
import "../../services/slick-theme.css";
import Speedometer from "../../assets/images/speedometer.json";

import Topbar from "../../components/Navbar/Topbar";
// import SalvarLead from "./SalvarLead";
interface Foto {
  Codigo: number;
  URL: string;
  Posicao: number;
}
interface FotoComDimensoes extends Foto {
  width: number;
  height: number;
}
interface Opcional {
  Codigo: string;
  Descricao: string;
}
interface Veiculo {
  Marca?: string;
  Modelo?: string;
  Versao?: string;
  Fotos?: Foto[];
  Km?: number;
  AnoFabricacao?: number;
  AnoModelo?: number;
  Cor?: string;
  Combustivel?: string;
  Cambio?: string;
  Portas?: number;
  Opcionais?: Opcional[];
  Observacao?: string;
  Preco?: number;
}

export default function Veiculo() {
  // const imagePath = 'https://www.autocerto.com/fotos/';
  const { id } = useParams();
  const [veiculo, setVeiculo] = useState<Veiculo>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    const fetchVeiculo = async () => {
      setLoading(true);

      try {
        const token = await fetchToken();
        if (!token) return;

        const veiculoResponse = await axios.get<Veiculo>(
          `https://integracao.autocerto.com/api/Veiculo/ObterVeiculo?codigoVeiculo=${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
            },
          }
        );

        setVeiculo(veiculoResponse.data);
      } catch (error) {
        console.error("Erro ao buscar veículos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVeiculo();
  }, [id]);

  const [fotosComDimensoes, setFotosComDimensoes] = useState<
    FotoComDimensoes[]
  >([]);

  useEffect(() => {
    const carregarDimensoesDasFotos = async () => {
      if (veiculo.Fotos) {
        const fotosComTamanho = await Promise.all(
          veiculo.Fotos.map((foto) => {
            return new Promise<FotoComDimensoes>((resolve) => {
              const img = new Image();
              img.src = foto.URL;

              img.onload = () => {
                resolve({
                  ...foto,
                  width: img.width,
                  height: img.height,
                });
              };

              // fallback se der erro
              img.onerror = () => {
                resolve({
                  ...foto,
                  width: 800,
                  height: 600,
                });
              };
            });
          })
        );
        setFotosComDimensoes(fotosComTamanho);
      }
    };

    carregarDimensoesDasFotos();
  }, [veiculo.Fotos]);

  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 720, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

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
    <div>
      <Topbar />

      <Gallery>
        <Slider {...settings}>
          {fotosComDimensoes.map((foto) => (
            <Item
              original={foto.URL}
              thumbnail={foto.URL}
              width={foto.width}
              height={foto.height}
              key={foto.Posicao}
            >
              {({ ref, open }) => (
                <div className="mr-1">
                  <img
                    ref={ref}
                    onClick={open}
                    src={`${foto.URL}`}
                    alt="Imagem do veículo"
                    className="w-full"
                  />
                </div>
              )}
            </Item>
          ))}
        </Slider>
      </Gallery>

      <div className="relative -mt-12 mb-24">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 items-start justify-center">
            <div className="md:col-span-3 bg-white p-10 rounded-xl">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                {veiculo.Marca} {veiculo.Modelo}
              </h2>
              <p className="text-gray-600 mb-6">{veiculo.Versao}</p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { label: "Quilometragem", value: `${veiculo.Km} KM` },
                  {
                    label: "Ano",
                    value: `${veiculo.AnoFabricacao}/${veiculo.AnoModelo}`,
                  },
                  { label: "Cor", value: veiculo.Cor },
                  { label: "Combustível", value: veiculo.Combustivel },
                  { label: "Câmbio", value: veiculo.Cambio },
                  { label: "Portas", value: veiculo.Portas?.toString() },
                ].map((item, index) =>
                  item.value ? (
                    <div key={index} className="text-center mt-4">
                      <p className="text-gray-500 text-sm">{item.label}</p>
                      <div className="border border-gray-300 rounded-md p-2 mt-1">
                        <p className="font-bold text-gray-700">{item.value}</p>
                      </div>
                    </div>
                  ) : null
                )}
              </div>

              {veiculo.Opcionais?.length ? (
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">
                    Opcionais
                  </h3>
                  <div className="border border-gray-300 rounded-md p-4 grid grid-cols-2 gap-2">
                    {veiculo.Opcionais.map((opcional) => (
                      <span
                        key={opcional.Codigo}
                        className="text-gray-600 text-sm"
                      >
                        {opcional.Descricao}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}

              {veiculo.Observacao && (
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">
                    Sobre esse veículo
                  </h3>
                  <div className="border border-gray-300 rounded-md p-4 text-gray-600 text-sm">
                    {veiculo.Observacao}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
