import Image from "next/image";

import SaleIcon from "@/components/sale/sale-icon";

import man from "@/components/sale/man.png";
import sale from "@/components/sale/sale.svg";
import star from "@/components/sale/star.svg";

import styles from "@/components/sale/sale.module.css";

export default function Sale() {
  return (
    <div className="p-5 botder-solid border-2 border-orange-800 rounded-3xl bg-green-500/20">
      <h2 style={{ height: "35px", color: "red" }}>
        Выберите подходящий тарифный план
      </h2>

      <p>Tailwind-NO</p>

      <div className={styles.svg}>
        <p style={{ height: "35px", color: "blue" }}>test1</p>
        <svg className={styles.svg}></svg>
      </div>

      {/* <div>
        <p style={{ height: "35px", color: "blue" }}>test2</p>
        <svg
          style={{
            backgroundImage: "url(./star.svg)",
            height: "100px",
            width: "100px",
            backgroundRepeat: "no-repeat",
          }}
        ></svg>
      </div> */}

      <SaleIcon width={"100"} height={"100"} text={"-70%"} />
      <Image src={sale} alt="sale" className="sale" />
      <Image src={star} alt="star" className="star" />
      <Image src={man} alt="man" className="man" style={{ height: "315px" }} />
    </div>
  );
}
