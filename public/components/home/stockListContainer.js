import { primary_dark, primary_light } from "@/public/assets/color";

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
        }
      `}</style>
    </div>
  );
}

function ListBox_Stock() {
  return (
    <div className="container">
      <div className="listItem">
        <ListItem />
      </div>
      <div className="listItem">
        <ListItem />
      </div>
      <div className="listItem">
        <ListItem />
      </div>

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
function ListItem() {
  return (
    <div className="container">
      <div className="favoriteBox"></div>
      <div className="companyNameBox"></div>
      <div className="priceBox"></div>
      <div className="priceRateBox"></div>
      <style jsx>{`
        .container {
          width: 450px;
          height: 63px;
          background-color: ${primary_dark};

          border-radius: 15px;

          display: flex;
          justify-content: space-between;
          align-items: center;

          box-sizing: border-box;
          padding: 10px;
        }

        .favoriteBox {
          width: 23px;
          height: 23px;

          background-color: ${primary_light};
        }

        .companyNameBox {
          width: 168px;
          height: 27px;

          background-color: ${primary_light};
        }

        .priceBox {
          width: 98px;
          height: 27px;

          background-color: ${primary_light};
        }

        .priceRateBox {
          width: 113px;
          height: 27px;

          background-color: ${primary_light};
        }
      `}</style>
    </div>
  );
}
