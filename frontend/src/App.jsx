import React, { useState } from 'react'
import { Link } from "react-router-dom";

function Home() {
  const [label, setLabel] = useState('');

  const handleClick = async (text) => {
    try {
      const res = await fetch(`/api/reversed_str/${text}`);
      const data = await res.json();
      setLabel(data.button_name);
    } catch (err) {
      setLabel('Error');
    }
  };

  return (
    <>
      <h1>Home</h1>
      <button onClick={() => handleClick('Hello')}>Reverse "Hello"</button>
      <button onClick={() => handleClick('World')}>Reverse "World"</button>
      <div>Result: {label}</div>
      <Link to="/settings">Go to Settings</Link>
    </>
  )
}

export default Home
