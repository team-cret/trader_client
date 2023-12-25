import { blue, primary_dark, primary_light, red } from "@/public/assets/color";
import { useState } from "react";
import { SizedBox } from "../public/containers";

export default function TradeContainer() {
  return (
    <div className="container">
      <NavigationBox />
      <TradeBox_Buy />
      <style jsx>{`
        .container {
          width: 678px;
          height: 365px;
          border-radius: 25px;
          background-color: ${primary_dark};

          position: absolute;
          top: 535px;
          left: 574px;

          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }
      `}</style>
    </div>
  );
}

function NavigationBox() {
  const [selectedIndex, setSelectedIndex] = useState("buy");
  function handleIndexChange(index) {
    setSelectedIndex(index);
  }

  return (
    <div className="container">
      <div
        className={`indexBox red ` + (selectedIndex == "buy" ? "selected" : "")}
        onClick={() => handleIndexChange("buy")}
      >
        매수
      </div>
      <div
        className={
          `indexBox blue ` + (selectedIndex == "sell" ? "selected" : "")
        }
        onClick={() => handleIndexChange("sell")}
      >
        매도
      </div>
      <div
        className={
          `indexBox dark ` + (selectedIndex == "order" ? "selected" : "")
        }
        onClick={() => handleIndexChange("order")}
      >
        주문현황
      </div>
      <style jsx>{`
        .container {
          width: 668px;
          height: 51px;
          background-color: ${primary_light};
          border-radius: 25px 25px 5px 5px;

          display: flex;
          justify-content: space-evenly;
          align-items: center;
        }

        .indexBox {
          width: 100px;
          height: 27px;

          opacity: 0.3;
          font-size: 20px;
          font-weight: 400;
          text-align: center;

          cursor: pointer;
        }
        .selected,
        .indexBox:hover {
          opacity: 1;
          font-weight: 700;
          text-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
        }

        .dark {
          color: ${primary_dark};
        }
        .red {
          color: ${red};
        }
        .blue {
          color: ${blue};
        }
      `}</style>
    </div>
  );
}

function TradeBox_Buy() {
  return (
    <div className="container">
      <div className="contentBox">
        <TradeLabelBox />
        <TradeContentBox />
      </div>
      <TradeSubmitBox />
      <style jsx>{`
        .container {
          width: 668px;
          height: 299px;

          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .contentBox {
          width: 668px;
          height: 209px;

          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      `}</style>
    </div>
  );
}

function TradeBox_Sell() {
  return (
    <div className="container">
      <style jsx>{`
        .container {
        }
      `}</style>
    </div>
  );
}

function TradeBox_Order() {
  return (
    <div className="container">
      <style jsx>{`
        .container {
        }
      `}</style>
    </div>
  );
}

//// inner components
function TradeLabelBox() {
  return (
    <div className="container">
      <div className="text">매수 단가</div>
      <div className="text">주문 수량</div>
      <div className="text">주문 총액</div>
      <style jsx>{`
        .container {
          width: 125px;
          height: 209px;
          background-color: ${primary_light};
          border-radius: 5px;

          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }

        .text {
          color: ${primary_dark};
          font-size: 20px;
          font-weight: 400;
        }
      `}</style>
    </div>
  );
}

function TradeContentBox() {
  return (
    <div className="container">
      <div className="priceBox">
        <div className="upDownBox">
          <img src="/assets/icons/input/num_up.svg" />
          <img src="/assets/icons/input/num_down.svg" />
        </div>
        <SizedBox width="11" />
        <div className="priceText">50,500</div>
        <div className="unitText">KRW</div>
      </div>

      <div className="amountBox">
        <div className="upDownBox">
          <img src="/assets/icons/input/num_up.svg" />
          <img src="/assets/icons/input/num_down.svg" />
        </div>
        <SizedBox width="11" />
        <div className="amountText">5</div>
        <div className="unitText">주</div>
      </div>

      <div className="totalBox">
        <div className="totalText">252,500</div>
        <div className="unitText">KRW</div>
      </div>
      <style jsx>{`
        .container {
          width: 538px;
          height: 209px;
          background-color: ${primary_light};
          border-radius: 5px;

          padding: 23px 0px;
          box-sizing: border-box;

          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
        }

        .priceBox {
          width: 464px;
          height: 45px;
          border-radius: 15px;
          background-color: ${primary_dark};

          display: flex;
          justify-content: space-between;
          align-items: center;

          padding: 0px 11px;
          box-sizing: border-box;
        }
        .priceBox .upDownBox {
          width: 10px;
          height: 25px;

          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .priceBox .upDownBox img {
          width: 10px;
          height: 10px;
          cursor: pointer;
        }
        .priceBox .priceText {
          color: ${red};
          font-size: 20px;
          font-weight: 400;

          margin-right: auto;
        }
        .priceBox .unitText {
          color: ${primary_light};
          font-size: 20px;
          font-weight: 400;
        }

        .amountBox {
          width: 464px;
          height: 45px;
          border-radius: 15px;
          background-color: ${primary_dark};

          display: flex;
          justify-content: space-between;
          align-items: center;

          padding: 0px 11px;
          box-sizing: border-box;
        }
        .amountBox .upDownBox {
          width: 10px;
          height: 25px;

          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .amountBox .amountText {
          color: ${primary_light};
          font-size: 20px;
          font-weight: 400;

          margin-right: auto;
        }
        .amountBox .unitText {
          color: ${primary_light};
          font-size: 20px;
          font-weight: 400;
        }

        .totalBox {
          width: 464px;
          height: 45px;
          border-radius: 15px;
          border: 2px solid ${primary_dark};

          display: flex;
          justify-content: space-between;
          align-items: center;

          padding: 0px 11px 0px 32px;
          box-sizing: border-box;
        }
        .totalBox .totalText {
          color: ${primary_dark};
          font-size: 20px;
          font-weight: 700;

          margin-right: auto;
        }
        .totalBox .unitText {
          color: ${primary_dark};
          font-size: 20px;
          font-weight: 700;
        }
      `}</style>
    </div>
  );
}

function TradeSubmitBox() {
  return (
    <div className="container">
      <div className="submitBox">주문넣기</div>
      <style jsx>{`
        .container {
          width: 668px;
          height: 85px;
          background-color: ${primary_light};
          border-radius: 5px 5px 25px 25px;

          display: flex;
          justify-content: center;
          align-items: center;
        }

        .submitBox {
          width: 116px;
          height: 41px;
          background-color: ${primary_dark};
          border-radius: 15px;

          color: ${primary_light};
          font-size: 20px;
          font-weight: 700;

          display: flex;
          justify-content: center;
          align-items: center;

          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
