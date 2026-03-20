import pythonLogo from "../assets/python.svg";
import javaLogo from "../assets/java.svg";
import jsLogo from "../assets/javascript.png";
import tsLogo from "../assets/typescript.png";
import cLogo from "../assets/C.png";
import rLogo from "../assets/R.png";


const Languages = () => {
  const cardStyle = "flex h-28 w-28 items-center justify-center rounded-2xl border border-neutral-800 p-4 transition hover:scale-110 hover:border-neutral-700";
  const imgStyle = "h-20 w-2- object-contain";

  return (
    <section id="Languages">
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Languages</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className={cardStyle}>
          <img src={pythonLogo} alt="Python" className={imgStyle} />
        </div>
        <div className={cardStyle}>
          <img src={javaLogo} alt="Java" className={imgStyle} />
        </div>
        <div className={cardStyle}>
          <img src={cLogo} alt="C" className={imgStyle} />
        </div>
        <div className={cardStyle}>
          <img src={jsLogo} alt="JavaScript" className={imgStyle} />
        </div>
        <div className={cardStyle}>
          <img src={tsLogo} alt="TypeScript" className={imgStyle} />
        </div>
        <div className={cardStyle}>
          <img src={rLogo} alt="R" className={imgStyle} />
        </div>
      </div>
    </div>
    </section>
  );
};

export default Languages;