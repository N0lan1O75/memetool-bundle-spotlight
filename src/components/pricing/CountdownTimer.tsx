
import { useEffect, useState } from "react";

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  formatTime: (value: number) => string;
}

export const CountdownTimer = ({ formatTime }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ hours: 24, minutes: 0, seconds: 0 });

  useEffect(() => {
    const endTime = new Date();
    endTime.setHours(endTime.getHours() + 24);

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = endTime.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          hours: Math.floor(difference / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        endTime.setHours(endTime.getHours() + 24);
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center gap-4 font-mono text-3xl">
      <div className="bg-background/80 rounded-lg px-4 py-2 shadow-xl transform hover:scale-110 transition-transform duration-300">
        <span className="text-primary">{formatTime(timeLeft.hours)}</span>
        <span className="text-sm text-primary/70">h</span>
      </div>
      <span className="text-primary self-center animate-pulse">:</span>
      <div className="bg-background/80 rounded-lg px-4 py-2 shadow-xl transform hover:scale-110 transition-transform duration-300">
        <span className="text-primary">{formatTime(timeLeft.minutes)}</span>
        <span className="text-sm text-primary/70">m</span>
      </div>
      <span className="text-primary self-center animate-pulse">:</span>
      <div className="bg-background/80 rounded-lg px-4 py-2 shadow-xl transform hover:scale-110 transition-transform duration-300">
        <span className="text-primary">{formatTime(timeLeft.seconds)}</span>
        <span className="text-sm text-primary/70">s</span>
      </div>
    </div>
  );
};
