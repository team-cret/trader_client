import { blue, primary_dark, primary_light, red } from "@/public/assets/color";
import { SizedBox } from "../public/containers";
import { formatPrice, formatRate } from "../../api/formatters";

export default function PriceContainer() {
  const priceInfo = {
    totAmount: 529,
    infos: [
      {
        status: "sell",
        amount: 43,
        price: 50500,
        diffRate: -0.05,
      },
      {
        status: "sell",
        amount: 75,
        price: 50400,
        diffRate: -0.03,
      },
      {
        status: "sell",
        amount: 150,
        price: 50200,
        diffRate: -0.02,
      },
      {
        status: "buy",
        amount: 143,
        price: 50200,
        diffRate: 0.01,
      },
      {
        status: "buy",
        amount: 77,
        price: 50100,
        diffRate: 0.03,
      },
      {
        status: "buy",
        amount: 41,
        price: 50000,
        diffRate: 0.05,
      },
    ],
  };

  const pixPerAmount = 1;

  return (
    <div className="container">
      <div className="innerBox">
        {priceInfo.infos.map((info) => {
          return <PriceBox info={info} totAmount={priceInfo.totAmount} />;
        })}
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

//info = {status, amount, price, diffRate}
function PriceBox({ info, totAmount }) {
  return (
    <div className="container">
      <div className="amountBox">
        <div className={info.status}>
          <div className="background" />
          <div className="text">{info.amount}</div>
        </div>
      </div>
      <div className="priceBox">{formatPrice(info.price)}</div>
      <SizedBox width={50} />
      <div className="diffRateBox">{formatRate(info.diffRate)}</div>
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

        .amountBox {
          width: 154px;
          height: 27px;
        }

        .amountBox .sell {
          width: 50%;
          height: 27px;

          position: relative;
        }
        .amountBox .sell .background {
          position: absolute;
          right: 0;

          width: ${(info.amount / totAmount) * 77}px;
          height: 27px;
          background-color: ${blue}7F;
        }
        .amountBox .sell .text {
          position: absolute;
          right: 0;

          color: ${primary_dark};
          font-size: 20px;
          font-weight: 400;
        }

        .amountBox .buy {
          width: 50%;
          height: 27px;

          transform: translateX(100%);

          position: relative;
        }
        .amountBox .buy .background {
          position: absolute;
          left: 0;

          width: ${(info.amount / totAmount) * 77}px;
          height: 27px;
          background-color: ${red}7F;
        }
        .amountBox .buy .text {
          position: absolute;
          left: 0;

          color: ${primary_dark};
          font-size: 20px;
          font-weight: 400;
        }

        .priceBox {
          width: 86px;
          height: 27px;

          color: ${primary_dark};
          font-size: 20px;
          font-weight: 400;
        }

        .diffRateBox {
          width: 86px;
          height: 27px;

          color: ${primary_dark};
          font-size: 20px;
          font-weight: 400;
        }
      `}</style>
    </div>
  );
}
