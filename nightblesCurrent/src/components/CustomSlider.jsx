// src/PriceSlider.jsx
import React, { useState } from 'react';
import styles from './CustomSlider.module.css'

const CustomSlider = (props) => {
  const [priceRange, setPriceRange] = useState([props.minPrezzo, props.maxPrezzo]);

  const handleMinChange = (event) => {
    const newMin = Math.min(event.target.value, priceRange[1]);
    setPriceRange([newMin, priceRange[1]]);
  };

  const handleMaxChange = (event) => {
    const newMax = Math.max(event.target.value, priceRange[0] + 1);
    setPriceRange([priceRange[0], newMax]);
  };

  return (
    <div style={{ width: '100%'}}>
      <div >
        <input className={styles.slider}
          type="range"
          min={props.minPrezzo}
          max={priceRange[1]}
          step="1"
          value={priceRange[0]}
          onChange={handleMinChange}
          style={{marginRight: '10px' }}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span>€{priceRange[0]}</span>
        <span>€{priceRange[1]}</span>
      </div>
    </div>
  );
};

export default CustomSlider;
