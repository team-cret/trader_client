import { primary_dark, primary_light } from "@/public/assets/color";

export default function NavigationBar() {
  return (
    <div className="container">
      <div className="logoBox">&lt;로고&gt;</div>
      <div className="infoBox">
        <div className="info">홍길동</div>
        <div className="info">100,000 KRW</div>
        <div className="info">로그아웃</div>
      </div>
      <style jsx>{`
        .container {
          width: 100vw;
          height: 80px;
          background-color: ${primary_dark};

          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logoBox {
          color: ${primary_light};
          font-size: 20px;
          font-weight: 400;

          margin-left: 28px;
        }

        .infoBox {
          display: flex;

          gap: 44px;

          margin-right: 28px;
        }

        .infoBox .info {
          color: ${primary_light};
          font-size: 20px;
          font-weight: 400;
        }
      `}</style>
    </div>
  );
}
