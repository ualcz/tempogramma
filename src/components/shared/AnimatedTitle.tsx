
import React, { useState, useEffect } from "react";

export const AnimatedTitle = () => {
  const originalTitle = "TEMPOGRAMA";
  const [title, setTitle] = useState(originalTitle);

  const scrambleText = (text: string) => {
    return text.split('')
      .sort(() => Math.random() - 0.5)
      .join('');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTitle(prev => {
        if (prev === originalTitle) {
          return scrambleText(originalTitle);
        }
        return originalTitle;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-6xl font-bold text-blue-700 mb-8 font-mono tracking-wider transition-all duration-500">
      {title}
    </h1>
  );
};
