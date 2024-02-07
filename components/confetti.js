import React, { useRef } from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';

const Confetti = () => {
  const confettiRef = useRef();

  const makeShot = () => {
    if (confettiRef.current) {
      // Assuming the library provides a method like `fire` to trigger the confetti
      confettiRef.current.fire({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  return (
    <>
      <ReactCanvasConfetti ref={confettiRef} style={{ position: 'fixed', zIndex: 9999, top: 0, left: 0, width: '100%', height: '100%' }} />
      <button onClick={makeShot}>Celebrate!</button>
    </>
  );
};

export default Confetti;
