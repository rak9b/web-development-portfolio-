import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const targetDate = new Date('2025-01-01T00:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = targetDate - new Date().getTime();
    
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-600 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-8">Tech Innovation Summit 2025</h1>
          
          <div className="grid grid-cols-4 gap-4 mb-12">
            <div className="bg-white/20 rounded-lg p-6">
              <div className="text-4xl font-bold mb-2">{timeLeft.days}</div>
              <div className="text-sm uppercase">Days</div>
            </div>
            <div className="bg-white/20 rounded-lg p-6">
              <div className="text-4xl font-bold mb-2">{timeLeft.hours}</div>
              <div className="text-sm uppercase">Hours</div>
            </div>
            <div className="bg-white/20 rounded-lg p-6">
              <div className="text-4xl font-bold mb-2">{timeLeft.minutes}</div>
              <div className="text-sm uppercase">Minutes</div>
            </div>
            <div className="bg-white/20 rounded-lg p-6">
              <div className="text-4xl font-bold mb-2">{timeLeft.seconds}</div>
              <div className="text-sm uppercase">Seconds</div>
            </div>
          </div>

          <div className="bg-white/10 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4">Event Details</h2>
            <p className="mb-6">Join us for the biggest tech conference of the year, featuring industry leaders and innovative workshops.</p>
            
            <div className="space-y-4 mb-8">
              <div>
                <strong>Date:</strong> January 1st, 2025
              </div>
              <div>
                <strong>Location:</strong> Tech Convention Center, Silicon Valley
              </div>
              <div>
                <strong>Time:</strong> 9:00 AM - 6:00 PM PST
              </div>
            </div>

            <button className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600">
              RSVP Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
