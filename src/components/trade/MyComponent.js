import React from 'react';
import styles from './MyComponent.module.css'

const MyComponent = ({ green, white, children }) => {
    const getBackgroundColor = () => {
        if (green) return 'none';
        if (white) return styles.infoBackground;
        return '';
      };
  return (
    <div className={getBackgroundColor()}>
    {children}
  </div>
  )
}

export default MyComponent