import typeIs from "../../../utils/Tools/typeIs";

export const eventBody = (callback) => (response) => {
  if (!typeIs(callback, "Function")) return;

  const data = JSON.parse(response.data || "{}");
  callback(data);
}

export const createSocket = ({
  url,
  onClose,
  onOpen,
  onMessage,
  onError
}) => {

  const socket = new WebSocket(url);

  socket.onclose = eventBody(onClose);
  socket.onmessage = eventBody(onMessage);
  socket.onopen = eventBody(onOpen);
  socket.onerror = eventBody(onError);

  return socket;
}