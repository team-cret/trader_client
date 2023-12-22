import { primary_light } from "@/public/assets/color";
import NavigationBar from "@/public/components/home/navgationBar";
import StockListContainer from "@/public/components/home/stockListContainer";

export default function HomePage() {
  return (
    <div className="container">
      <NavigationBar />
      <StockListContainer />
      <style jsx>{`
        .container {
          width: 100vw;
          height: 100vh;
          background-color: ${primary_light};
        }
      `}</style>
    </div>
  );
}
