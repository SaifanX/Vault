import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface TimerContextType {
  timeLeft: number;
  isLocked: boolean;
  startTimer: () => void;
  resetTimer: () => void;
}

const TimerContext = createContext<TimerContextType | undefined>(undefined);

export const TimerProvider = ({ children }: { children: ReactNode }) => {
  const [timeLeft, setTimeLeft] = useState(300); // 300 seconds (5 minutes)
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const startTimer = () => {
    setIsActive(true);
  };

  const resetTimer = () => {
    setTimeLeft(300);
    setIsActive(false);
  };

  const isLocked = timeLeft > 0;

  return (
    <TimerContext.Provider value={{ timeLeft, isLocked, startTimer, resetTimer }}>
      {children}
    </TimerContext.Provider>
  );
};

export const useTimer = () => {
  const context = useContext(TimerContext);
  if (context === undefined) {
    throw new Error('useTimer must be used within a TimerProvider');
  }
  return context;
};
