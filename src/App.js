import React from 'react';
import { Conversation } from './components/cvi/components/conversation';

function App() {
  const handleLeave = () => {
    console.log('User left the conversation');
  };

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Conversation
        conversationUrl="https://tavus.daily.co/c39884643c63a4ad"
        onLeave={handleLeave}
      />
    </div>
  );
}

export default App;