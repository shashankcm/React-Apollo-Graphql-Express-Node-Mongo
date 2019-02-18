import React from "react";
import { graphql } from "react-apollo";

import { getBooksQuery } from "../queries/queries";

class BookList extends React.Component {
  displayBooks = () => {
    let data = this.props.data;
    return data.loading ? (
      <div>Loading Books</div>
    ) : (
      data.books.map(book => {
        return <li key={book.id}>{book.name}</li>;
      })
    );
  };
  render() {
    return (
      <div>
        <ul id="book-list">{this.displayBooks()}</ul>
      </div>
    );
  }
}
export default graphql(getBooksQuery)(BookList);
