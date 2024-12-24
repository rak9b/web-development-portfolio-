
import React from 'react';

const BlogPost = ({ title, date, excerpt }) => (
  <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-2">{title}</h2>
    <p className="text-gray-500 mb-2">{date}</p>
    <p className="text-gray-700 mb-4">{excerpt}</p>
    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
      Read More
    </button>
  </div>
);

const Portfolio = () => {
  const blogPosts = [
    {
      title: "Advanced AI Applications in Business",
      date: "December 24, 2024",
      excerpt: "Exploring how artificial intelligence is transforming modern business operations..."
    },
    {
      title: "Leadership in the Digital Age",
      date: "December 23, 2024",
      excerpt: "Key strategies for effective leadership in today's technology-driven workplace..."
    },
    {
      title: "The Future of Machine Learning",
      date: "December 22, 2024",
      excerpt: "Examining emerging trends and innovations in machine learning..."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">NITIN MITTAL</h1>
          <p className="text-xl">AI EXPERT • LEADER • AUTHOR</p>
        </div>
      </header>

      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <ul className="flex space-x-6 py-4">
            <li className="text-blue-800 font-medium cursor-pointer">Home</li>
            <li className="text-gray-600 hover:text-blue-800 cursor-pointer">About</li>
            <li className="text-gray-600 hover:text-blue-800 cursor-pointer">Blog</li>
            <li className="text-gray-600 hover:text-blue-800 cursor-pointer">Contact</li>
          </ul>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8">Latest Blog Posts</h2>
        <div className="space-y-6">
          {blogPosts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Nitin Mittal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
