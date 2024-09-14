import React, { useState, useEffect } from "react";

const Comments = () => {
  const [comments, setComments] = useState([]);

  // Fetch comments from the API when the component mounts
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((error) => console.error("Error fetching comments:", error));
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "30px", justifyContent:"center" }}>
      {comments.map((comment) => (
        <div
          key={comment.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "16px",
            width: "300px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3>{comment.name}</h3>
          <p>
            <strong>Email:</strong> {comment.email}
          </p>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Comments;
