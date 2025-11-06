import style from "./Veiculo.module.css";

export default function SalvarLead() {
  return (
    <div>
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/8zVVer7mXjkTybpWLKer"
        className={style.iframe}
        id="inline-8zVVer7mXjkTybpWLKer"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Lead do Site"
        data-height="507"
        data-layout-iframe-id="inline-8zVVer7mXjkTybpWLKer"
        data-form-id="8zVVer7mXjkTybpWLKer"
        title="Lead do Site"
      ></iframe>
      <script src="https://link.msgsndr.com/js/form_embed.js"></script>
    </div>
  );
}
