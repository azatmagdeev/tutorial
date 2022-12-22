import './App.css';
import { useState } from 'react';
// import { StarRating } from './components/StarRating';
import colorData from "./color-data.json";
import ColorList from "./components/ColorList";

function App() {

  const [colors, setColors] = useState(colorData);
  return <ColorList
    colors={colors}
    onRemoveColor={id => {
      const newColors = colors.filter(color => color.id !== id);
      setColors(newColors);
    }}
    onRateColor={(id, rating) => {
      const newColors = colors.map(color =>
      color.id === id ? { ...color, rating } : color
      );
      setColors(newColors);
      }}
  />;

}

export default App;





