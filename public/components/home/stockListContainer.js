import { getSession } from "@/public/api/session";
import { blue, primary_dark, primary_light, red } from "@/public/assets/color";
import { useEffect, useState } from "react";

export default function StockListContainer() {
  return (
    <div className="container">
      <NavigationBox />
      <ListBox_Stock />

      <style jsx>{`
        .container {
          width: 470px;
          height: 784px;
          border-radius: 25px;
          background-color: ${primary_dark};

          position: absolute;
          top: 116px;
          right: 118px;

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
  return (
    <div className="container">
      <div className="indexBox">
        <b>주식</b>
      </div>
      <div className="indexBox">관심</div>
      <div className="indexBox">보유</div>
      <div className="indexBox">주문</div>
      <style jsx>{`
        .container {
          width: 460px;
          height: 45px;
          border-radius: 25px 25px 5px 5px;
          background-color: ${primary_light};

          display: flex;
          justify-content: space-evenly;
          align-items: center;
        }

        .indexBox {
          width: 37px;
          height: 27px;

          color: ${primary_dark}80;
          font-size: 20px;
          font-weight: 400;
        }

        .indexBox:hover,
        .indexBox > b {
          color: ${primary_dark};
          font-size: 20px;
          font-weight: 700;
          text-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);

          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

function ListBox_Stock() {
  const [stockData, setStockData] = useState([]);

  function getStockList() {
    fetch(`/api/v1/mainpage/allcompany`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        /* [{companyId: string, name: string, stockPrice: int, beforePrice: int}]*/
        console.log(res);
        setStockData(
          res.map((item) => ({
            companyName: item.name,
            price: item.stockPrice.toLocaleString("ko-KR"),
            priceRate:
              (item.stockPrice - item.beforePrice > 0 ? "+" : "") +
              ((1 - item.beforePrice / item.stockPrice) * 100)
                .toFixed(2)
                .toLocaleString("ko-KR") +
              "%",
            status: item.stockPrice - item.beforePrice > 0 ? "up" : "down",
          }))
        );
        console.log(
          res.map((item) => ({
            companyName: item.name,
            price: item.stockPrice,
            priceRate: (1 - item.beforePrice / item.stockPrice) * 100,
            status: item.stockPrice - item.beforePrice > 0 ? "up" : "down",
          }))
        );
      });
  }
  useEffect(() => {
    getStockList();
  }, []);

  const [selectedStock, setSelectedStock] = useState(-1);
  function toggleSelectedStock(index) {
    if (index === selectedStock) {
      setSelectedStock(-1);
      return;
    }
    setSelectedStock(index);
  }

  return (
    <div className="container">
      {stockData.map((stock, index) => {
        return (
          <div
            className="listItem"
            onClick={() => toggleSelectedStock(index)}
            key={index}
          >
            <ListItem isSelected={index === selectedStock} stockData={stock} />
          </div>
        );
      })}

      <style jsx>{`
        .container {
          width: 460px;
          height: 724px;
          border-radius: 5px 5px 25px 25px;
          background-color: ${primary_light};

          display: flex;
          flex-direction: column;
          justify-content: start;
          align-items: center;
        }

        .listItem {
          margin-top: 5px;
        }
      `}</style>
    </div>
  );
}

function ListBox_Favorite() {
  return (
    <div className="container">
      <style jsx>{`
        .container {
        }
      `}</style>
    </div>
  );
}

function ListBox_Have() {
  return (
    <div className="container">
      <style jsx>{`
        .container {
        }
      `}</style>
    </div>
  );
}

function ListBox_Order() {
  return (
    <div className="container">
      <style jsx>{`
        .container {
        }
      `}</style>
    </div>
  );
}

//
function ListItem({ isSelected, stockData }) {
  const [isFavorite, setIsFavorite] = useState(false);
  function toggleFavorite(event) {
    event.stopPropagation();
    setIsFavorite(!isFavorite);
  }

  return (
    <div
      className={
        "container " +
        (isSelected ? "containerSelected" : "containerNotSelected")
      }
    >
      <img
        className="favoriteBox"
        src={
          "/assets/icons/favorite/" +
          (isFavorite ? "on" : "off") +
          "_" +
          (isSelected ? "dark" : "light") +
          ".svg"
        }
        alt="즐겨찾기"
        onClick={toggleFavorite}
      />

      <div
        className={
          "companyNameBox " +
          (isSelected ? "companyNameSelected" : "companyNameNotSelected")
        }
      >
        {stockData.companyName}
      </div>

      <div className={`priceBox ${stockData.status}`}>{stockData.price}</div>

      <div className={`priceRateBox ${stockData.status}`}>
        {stockData.priceRate}
      </div>

      <style jsx>{`
        .container {
          width: 450px;
          height: 63px;

          border-radius: 15px;

          display: flex;
          justify-content: space-between;
          align-items: center;

          box-sizing: border-box;
          padding: 10px;

          cursor: pointer;
        }
        .containerSelected {
          background-color: ${primary_light};
          border: 2px solid ${primary_dark};
        }
        .containerNotSelected {
          background-color: ${primary_dark};
        }

        .favoriteBox {
          width: 23px;
          height: 23px;

          cursor: pointer;
        }

        .companyNameBox {
          width: 168px;
          height: 27px;

          display: flex;
          align-items: center;

          font-size: 20px;
          font-weight: 400;
        }
        .companyNameSelected {
          color: ${primary_dark};
        }
        .companyNameNotSelected {
          color: ${primary_light};
        }

        .priceBox {
          width: 98px;
          height: 27px;

          display: flex;
          align-items: center;

          font-size: 20px;
          font-weight: 400;
        }

        .priceRateBox {
          width: 113px;
          height: 27px;

          display: flex;
          align-items: center;

          font-size: 20px;
          font-weight: 400;
        }

        .up {
          color: ${red};
        }

        .down {
          color: ${blue};
        }
      `}</style>
    </div>
  );
}
