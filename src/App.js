import React from 'react';
import Blog from './blog/Blog';
import Chatbot from './blog/chatbot';

function App() {
  return (
    <>
      <Blog />
      <Chatbot userId="uniqueUserId" />
    </>
  );
}

export default App;
