import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Text } from './components/primitives/Text';

function App() {
  return (
    <div className="App">
      <div style={{ padding: '2rem' }}>
      <Text as="h1" fontSize="heading" fontWeight="bold" color="primary" marginBottom="24px">
        Welcome to Riff
      </Text>
      <Text as="p" fontSize="body" fontWeight="regular" color="text">
        This is a paragraph using the Riff Text component.
      </Text>
    </div>
    </div>
  );
}

export default App;
