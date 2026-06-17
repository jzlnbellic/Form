import { useState } from 'react';
import './App.css';
import glassImage from './assets/glass.webp'; // Import your asset

function App() {
  const [prompt, setPrompt] = useState('');
  const [image, setImage] = useState(null);

  const generateImage = () => {
    setImage('https://via.placeholder.com/400?text=VILLAIN+MANIFESTATION');
  };

  return (
    <div className="app-container">
      {/* Decorative Asset */}
      <img src={glassImage} alt="Villain Aesthetic" className="glass-logo" />
      
      <h1 style={{ color: '#ccff00' }}>Chithram Srishtikkunna Yanthram</h1>
      
      <input
        className="prompt-input"
        placeholder="WHAT SHALL WE CREATE?"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button onClick={generateImage}>GENERATE!</button>

      <div className="result-area">
        {image ? <img src={image} alt="Output" /> : <p>READY FOR COMMANDS...</p>}
      </div>
    </div>
  );
}

export default App;