import { blue, primary_dark, primary_light, red } from "@/public/assets/color";
import { SizedBox } from "../public/containers";

export default function ChartContainer() {
  return (
    <div className="container">
      <StockInfoBox />
      <GraphBox />
      <style jsx>{`
        .container {
          width: 1135px;
          height: 385px;
          border-radius: 25px;
          background-color: ${primary_dark};

          position: absolute;
          top: 116px;
          left: 117px;

          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }
      `}</style>
    </div>
  );
}

function StockInfoBox() {
  const stockInfo = {
    name: "B전자",
    price: "50,000",
    diffRate: "+1.72%",
    diff: "+845",
    status: "up",
    high: "50,000",
    low: "50,000",
  };

  return (
    <div className="container">
      <SizedBox width={25} />
      <div className="nameBox">{stockInfo.name}</div>
      <SizedBox width={36} />
      <div className={"priceBox " + stockInfo.status}>
        <div className="price">{stockInfo.price}</div>
        <div className="unit">KRW</div>
        <SizedBox width={14} />
        <div className="diffRate">{stockInfo.diffRate}</div>
        <SizedBox width={14} />
        <div className="diff">{stockInfo.diff}</div>
        <div className="diffUnit">KRW</div>
        <SizedBox width={14} />
      </div>
      <SizedBox width={14} />
      <div className="highLowBox">
        <div className="text">고가</div>
        <SizedBox width={3} />
        <div className="text high">{stockInfo.high}</div>
        <SizedBox width={9} />
        <div className="divider" />
        <SizedBox width={9} />
        <div className="text">저가</div>
        <SizedBox width={3} />
        <div className="text low">{stockInfo.low}</div>
      </div>
      <style jsx>{`
        .container {
          width: 1125px;
          height: 50px;
          border-radius: 25px 25px 5px 5px;
          background-color: ${primary_light};

          display: flex;
          align-items: center;
        }

        /* name Box */
        .nameBox {
          width: 75px;
          height: 30px;

          color: ${primary_dark};
          font-size: 30px;
          font-weight: 400;
          line-height: 100%;
        }

        /* price Box */
        .up {
          color: ${red};
        }
        .down {
          color: ${blue};
        }
        .priceBox {
          height: 30px;

          display: flex;
          align-items: end;
        }

        .priceBox .price {
          font-size: 30px;
          font-weight: 500;
          line-height: 100%;
        }
        .priceBox .unit {
          font-size: 16px;
          font-weight: 300;
          line-height: 100%;
        }
        .priceBox .diffRate {
          font-size: 16px;
          font-weight: 500;
          line-height: 100%;
        }
        .priceBox .diff {
          font-size: 16px;
          font-weight: 500;
          line-height: 100%;
        }
        .priceBox .diffUnit {
          font-size: 8px;
          font-weight: 300;
          line-height: 100%;
        }

        /* high Low Box */
        .highLowBox {
          height: 30px;

          display: flex;
          align-items: end;
        }

        .highLowBox .text {
          font-size: 16px;
          font-weight: 400;
          line-height: 100%;
          color: ${primary_dark};
        }
        .highLowBox .divider {
          width: 1px;
          height: 16px;
          background-color: ${primary_dark};
        }
        .highLowBox .high {
          color: ${red};
        }
        .highLowBox .low {
          color: ${blue};
        }
      `}</style>
    </div>
  );
}

function GraphBox() {
  const graphData = [
    {
      start: 41300,
      end: 46320,
      high: 51230,
      low: 40120,
    },
    {
      start: 46320,
      end: 48560,
      high: 51210,
      low: 41200,
    },
    {
      start: 48560,
      end: 46320,
      high: 61230,
      low: 42000,
    },
    {
      start: 46320,
      end: 41300,
      high: 51230,
      low: 40120,
    },
    {
      start: 41300,
      end: 39120,
      high: 51230,
      low: 38000,
    },
    {
      start: 39120,
      end: 43380,
      high: 61230,
      low: 38000,
    },
    {
      start: 43380,
      end: 48560,
      high: 61230,
      low: 40120,
    },
  ];

  const centerPrice = 48560;
  const pricePerPixel = 0.01;

  return (
    <div className="container">
      <div className="graphBox">
        {graphData.map((info, index) => (
          <Stick
            key={index}
            info={info}
            status={info.start > info.end ? "down" : "up"}
            centerPrice={centerPrice}
            pricePerPixel={pricePerPixel}
          />
        ))}
        <div className="averagePriceLine" />
      </div>
      <style jsx>{`
        .container {
          width: 1125px;
          height: 320px;
          border-radius: 5px 5px 25px 25px;
          background-color: ${primary_light};

          overflow: scroll;
        }

        .graphBox {
          height: 160px;

          display: flex;

          transform: translateY(100%);
        }

        .averagePriceLine {
          width: 1125px;

          border-bottom: 2px dashed ${primary_dark};

          transform: translateY(-50%);

          position: absolute;
        }
      `}</style>
    </div>
  );
}

function Stick({ info, status, centerPrice, pricePerPixel }) {
  return (
    <div className="container">
      <div className="startEnd" />
      <div className="highLow" />
      <style jsx>{`
        .container {
          width: 14px;
          height: ${(info.high - info.low) * pricePerPixel}px;

          position: relative;
          margin-left: 3px;
          margin-top: ${(centerPrice - info.high) * pricePerPixel}px;
        }

        .startEnd {
          width: 14px;
          height: ${Math.abs(info.end - info.start) * pricePerPixel}px;

          background-color: ${status === "up" ? red : blue};

          position: absolute;
          top: ${(info.high - Math.max(info.end, info.start)) *
          pricePerPixel}px;
        }

        .highLow {
          width: 2px;
          height: ${(info.high - info.low) * pricePerPixel}px;

          background-color: ${status === "up" ? red : blue};

          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }
      `}</style>
    </div>
  );
}
