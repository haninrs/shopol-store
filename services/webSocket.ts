export const createWebSocketConnection = (url: string): WebSocket => {
    const ws = new WebSocket(url);
    ws.onopen = () => console.log('WebSocket connection opened');
    ws.onclose = () => console.log('WebSocket connection closed');
    ws.onerror = (error) => console.error('WebSocket error:', error);
    return ws;
  };
  