import "./CampoTexto.css";

export default function CampoTexto({children, value, className}) {
  return (
    <div className={`campo-texto ${className}`}>
      <label className="campo-texto__label">{children}</label>
      <p className="campo-texto__texto">{value}</p>
    </div>
  );
}
