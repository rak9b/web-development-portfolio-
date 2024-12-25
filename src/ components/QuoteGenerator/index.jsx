import React, { useState, useEffect } from 'react';

const QuoteGenerator = () => {
  const [quote, setQuote] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const quotes = [
    { text: "Life is what happens while you're busy making other plans.", author: "John Lennon" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
    { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { text: "Everything you've ever wanted is on the other side of fear.", author: "George Addair" },
    { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" }
  ];

  const getRandomQuote = () => {
    setIsLoading(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[randomIndex]);
      setIsLoading(false);
    }, 500);
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-lg shadow-xl p-8 text-center">
          <h1 className="text-3xl font-bold mb-8 text-gray-800">Daily Inspiration</h1>
          
          {isLoading ? (
            <div className="animate-pulse">
              <div className="h-24 bg-gray-200 rounded mb-4"></div>
              <div className="h-6 bg-gray-200 rounded w-48 mx-auto"></div>
            </div>
          ) : (
            <div className="mb-8">
              <p className="text-2xl mb-4 text-gray-700">"{quote?.text}"</p>
              <p className="text-lg text-gray-600">- {quote?.author}</p>
            </div>
          )}

          <button
            onClick={getRandomQuote}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:opacity-90 transform transition hover:scale-105"
          >
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuoteGenerator;
