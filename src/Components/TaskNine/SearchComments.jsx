import axios from "axios";
import React, { useState, useEffect } from "react";

function SearchComments() {
  const [id, setId] = useState(1);
  const [comments, setComments] = useState([]);
  const [buttonid, setButtonId] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments?postId=${buttonid}`)
      .then((res) => setComments(res.data))
      .catch((error) => console.log(error));
  }, [buttonid]);

  return (
    <div>
      <div>
        <label>Enter post Id: </label>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        <button onClick={() => setButtonId(id)}>Search</button>
      </div>

      <div>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div
              key={comment.id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                margin: "10px 0",
              }}
            >
              <h3>{comment.name}</h3>
              <p>
                <strong>Email:</strong> {comment.email}
              </p>
              <p>{comment.body}</p>
            </div>
          ))
        ) : (
          <p>No comments found for postId {buttonid}</p>
        )}
      </div>
    </div>
  );
}

export default SearchComments;
