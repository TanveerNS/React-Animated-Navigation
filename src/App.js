import React, { useState } from "react";

import "./styles.css";

export default function App() {
  const [show, setShow] = useState(true);
  return (
    <nav className={show && "active"}>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Works</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <button class="icon" onClick={() => setShow(!show)}>
        <div class="line line1"></div>
        <div class="line line2"></div>
      </button>
    </nav>
  );
}
