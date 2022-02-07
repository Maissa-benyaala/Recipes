import React from "react";

function Blog({ recipe }) {
  return (
    <div className="card">
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <img src={recipe.imgUrl} />
    </div>
  );
}

export default Blog;
