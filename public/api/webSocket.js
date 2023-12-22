export function tryWebSocketOpen({ userSession }) {
  const ws = new WebSocket(
    `${process.env.TRADER_SERVER_BASE_URL_SOCKET}/ws?userSession=${userSession}`
  );
  ws.onopen = () => {
    console.log("connected");
  };
  ws.onmessage = (e) => {
    console.log(e.data);
  };
  ws.onclose = () => {
    console.log("disconnected");
  };
}
