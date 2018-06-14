export default {
  API_URI:
    process.env.NODE_ENV === 'production'
      ? 'https://dogecodes-chat-api.herokuapp.com/v1'
      : 'http://localhost:9099/v1',
  SOCKETS_URI:
    process.env.NODE_ENV === 'production'
      ? 'wss://dogecodes-chat-api.herokuapp.com/'
      : 'ws://localhost:9099/',
};
