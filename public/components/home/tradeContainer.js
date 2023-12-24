import { primary_dark } from "@/public/assets/color";

export default function TradeContainer() {
  return (
    <div className="container">
      <style jsx>{`
        .container {
          width: 678px;
          height: 365px;
          border-radius: 25px;
          background-color: ${primary_dark};

          position: absolute;
          top: 535px;
          left: 574px;
        }
      `}</style>
    </div>
  );
}
