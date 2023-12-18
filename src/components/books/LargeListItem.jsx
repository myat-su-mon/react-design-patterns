import React from "react";

const LargeBookListItems = ({ book }) => {
  const { name, price, pages, author } = book;

  return (
    <>
      <h2>Title: {name}</h2>
      <h3>Author: {author}</h3>
      <p>Price: ${price}</p>
      <p># of Pages: {pages}</p>
    </>
  );
};

export default LargeBookListItems;
