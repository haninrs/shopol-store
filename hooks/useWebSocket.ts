import { createWebSocketConnection } from '@/services/webSocket';
import { useEffect, useState } from 'react';

export const useWebSocket = (url: string) => {
  const [data, setData] = useState<any>(null);
  const [ws, setWs] = useState<WebSocket | null>(null);

  useEffect(() => {
    const socket = createWebSocketConnection(url);
    setWs(socket);

    socket.onmessage = (event) => {
      try {
        const message = JSON.parse(event.data);
        setData(message);
      } catch (error) {
        console.error('Error parsing WebSocket message:', error);
      }
    };

    return () => socket.close();
  }, [url]);

  return data;
};
