import React, { useState } from 'react';

const BlogAdmin = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedPosts = [...posts];
      updatedPosts[editIndex] = { title, content, date: new Date().toLocaleDateString() };
      setPosts(updatedPosts);
      setEditIndex(null);
    } else {
      setPosts([...posts, { title, content, date: new Date().toLocaleDateString() }]);
    }
    setTitle('');
    setContent('');
  };

  const handleEdit = (index) => {
    setTitle(posts[index].title);
    setContent(posts[index].content);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setPosts(posts.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Blog Admin Panel</h1>
        
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-8">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Post Title"
            className="w-full mb-4 p-2 border rounded"
            required
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Post Content"
            className="w-full mb-4 p-2 border rounded h-32"
            required
          />
          <button 
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {editIndex !== null ? 'Update Post' : 'Create Post'}
          </button>
        </form>

        <div className="space-y-6">
          {posts.map((post, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-500 mb-4">{post.date}</p>
              <p className="text-gray-700 mb-4">{post.content}</p>
              <div className="flex space-x-4">
                <button
                  onClick={() => handleEdit(index)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="text-red-600 hover:text-red-800"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogAdmin;
