// import style from "./Agendamento.module.css"
import Topbar from "../../components/Navbar/Topbar";
import Footer from "../../components/Footer/Index.tsx";

export default function Agendamento() {
  return (
    <div>

      <Topbar />

      <section className="container mx-auto px-16 pb-24 mt-16 md:mt-0">
        <iframe
          src="https://api.leadconnectorhq.com/widget/booking/m6QAXYbYcxd8iGb2MlAl"
          id="uhtRkuwFSwocTZNE0iCf_1763591749406"
          width="100%"
          height="800px"
        ></iframe>
        <script src="https://link.msgsndr.com/js/form_embed.js" type="text/javascript"></script>
      </section>

      <Footer />

    </div>
  );
}
