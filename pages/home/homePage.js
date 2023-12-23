import { getSession } from "@/public/api/session";
import { tryWebSocketOpen } from "@/public/api/webSocket";
import { primary_light } from "@/public/assets/color";
import ChartContainer from "@/public/components/home/chartContainer";
import NavigationBar from "@/public/components/home/navgationBar";
import StockListContainer from "@/public/components/home/stockListContainer";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    const userSessionId = getSession();
    if (!userSessionId) return;

    tryWebSocketOpen({ userSession: userSessionId });
  }, []);

  return (
    <div className="container">
      <NavigationBar />
      <StockListContainer />
      <ChartContainer />
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
