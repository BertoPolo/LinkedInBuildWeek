import { useState } from 'react';

const startPost = () => {
  const [isShowing, setIsShowing] = 

  function toggle() {
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle,
  }
};

export default startPost;