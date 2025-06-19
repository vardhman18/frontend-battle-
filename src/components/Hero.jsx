import React, { useState, useEffect } from 'react';

const spin3d = {
  animation: 'spin3d 8s linear infinite',
  transformStyle: 'preserve-3d',
};

const keyframes = `
@keyframes spin3d {
  0% { transform: rotateX(0deg) rotateY(0deg); }
  100% { transform: rotateX(360deg) rotateY(360deg); }
}
`;

const face = (transform, gradient) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  opacity: 0.8,
  background: gradient,
  transform,
});

// Reusable Ripple Button
const RippleButton = ({ children, className, ...props }) => {
  const [ripples, setRipples] = useState([]);

  const createRipple = (event) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const newRipple = { x, y, size, id: Date.now() + Math.random() };
    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
    }, 600);
  };

  return (
    <button
      {...props}
      onClick={(e) => {
        createRipple(e);
        if (props.onClick) props.onClick(e);
      }}
      className={`relative overflow-hidden ${className}`}
    >
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute bg-white opacity-30 rounded-full pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
            animation: 'ripple-animation 0.6s linear',
          }}
        />
      ))}
      {children}
      <style>
        {`
        @keyframes ripple-animation {
          to {
            transform: scale(2.5);
            opacity: 0;
          }
        }
        `}
      </style>
    </button>
  );
};

const Hero = () => {
  const [pageRipples, setPageRipples] = useState([]);

  useEffect(() => {
    const handlePageClick = (e) => {
      // Prevent ripple on buttons (optional)
      if (e.target.closest('button')) return;

      const size = 200;
      const x = e.clientX - size / 2;
      const y = e.clientY - size / 2;
      const id = Date.now() + Math.random();

      setPageRipples((prev) => [...prev, { x, y, size, id }]);
      setTimeout(() => {
        setPageRipples((prev) => prev.filter((r) => r.id !== id));
      }, 600);
    };

    window.addEventListener('click', handlePageClick);
    return () => window.removeEventListener('click', handlePageClick);
  }, []);

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <style>{keyframes}</style>
      {/* Page-wide ripples */}
      <div className="pointer-events-none fixed inset-0 z-50">
        {pageRipples.map((ripple) => (
          <span
            key={ripple.id}
            className="absolute bg-white opacity-20 rounded-full"
            style={{
              left: ripple.x,
              top: ripple.y,
              width: ripple.size,
              height: ripple.size,
              animation: 'ripple-animation 0.6s linear',
              pointerEvents: 'none',
            }}
          />
        ))}
        <style>
          {`
          @keyframes ripple-animation {
            to {
              transform: scale(2.5);
              opacity: 0;
            }
          }
          `}
        </style>
      </div>
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-0 right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Creative
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Digital Agency
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-lg">
              We craft exceptional digital experiences that drive results and inspire audiences worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <RippleButton
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300"
              >
                Get Started
              </RippleButton>
              <RippleButton className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300">
                View Our Work
              </RippleButton>
            </div>
          </div>

          {/* 3D Animated Cube */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0" style={{ perspective: 1000 }}>
                <div className="w-full h-full relative" style={spin3d}>
                  {/* Cube faces */}
                  <div style={face('rotateY(0deg) translateZ(128px)', 'linear-gradient(to bottom right, #a78bfa, #ec4899)')}></div>
                  <div style={face('rotateY(90deg) translateZ(128px)', 'linear-gradient(to bottom right, #3b82f6, #a78bfa)')}></div>
                  <div style={face('rotateY(180deg) translateZ(128px)', 'linear-gradient(to bottom right, #ec4899, #ef4444)')}></div>
                  <div style={face('rotateY(270deg) translateZ(128px)', 'linear-gradient(to bottom right, #6366f1, #3b82f6)')}></div>
                  <div style={face('rotateX(90deg) translateZ(128px)', 'linear-gradient(to bottom right, #a78bfa, #6366f1)')}></div>
                  <div style={face('rotateX(270deg) translateZ(128px)', 'linear-gradient(to bottom right, #ec4899, #a78bfa)')}></div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;