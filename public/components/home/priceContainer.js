import { primary_dark, primary_light } from "@/public/assets/color";
import { SizedBox } from "../public/containers";

export default function PriceContainer() {
  const priceInfo = [
    {
      status: "sell",
      amount: 43,
      price: 75,
      rate: "-0.05%",
    },
    {
      status: "sell",
      amount: "1,000",
      price: "50,000",
      rate: "+1.72%",
    },
    {
      status: "up",
      amount: "1,000",
      price: "50,000",
      rate: "+1.72%",
    },
    {
      status: "up",
      amount: "1,000",
      price: "50,000",
      rate: "+1.72%",
    },
    {
      status: "up",
      amount: "1,000",
      price: "50,000",
      rate: "+1.72%",
    },
    {
      status: "up",
      amount: "1,000",
      price: "50,000",
      rate: "+1.72%",
    },
  ];

  return (
    <div className="container">
      <div className="innerBox">
        <PriceBox />
        <PriceBox />
        <PriceBox />
        <PriceBox />
        <PriceBox />
        <PriceBox />
      </div>
      <style jsx>{`
        .container {
          width: 428px;
          height: 365px;
          border-radius: 25px;
          background-color: ${primary_dark};

          position: absolute;
          top: 535px;
          left: 112px;

          display: flex;
          justify-content: center;
          align-items: center;
        }

        .innerBox {
          width: 418px;
          height: 355px;
          border-radius: 25px;

          display: flex;
          flex-direction: column;
          gap: 5px;

          overflow: scroll;
        }
      `}</style>
    </div>
  );
}

//info = {status, amount, price, rate}
function PriceBox({ info, pixPerAmount }) {
  return (
    <div className="container">
      <div className="amoutBox"></div>
      <div className="priceBox"></div>
      <SizedBox width={50} />
      <div className="diffRateBox"></div>
      <style jsx>{`
        .container {
          width: 418px;
          height: 55px;

          background-color: ${primary_light};
          border-radius: 5px;

          display: flex;
          align-items: center;

          box-sizing: border-box;
          padding-left: 20px;
          padding-right: 22px;
        }

        .amoutBox {
          width: 154px;
          height: 27px;

          background-color: tomato;
        }

        .priceBox {
          width: 86px;
          height: 27px;

          background-color: tomato;
        }

        .diffRateBox {
          width: 86px;
          height: 27px;

          background-color: tomato;
        }
      `}</style>
    </div>
  );
}
