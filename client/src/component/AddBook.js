import React from "react";
import { graphql } from "react-apollo";

import { getAuthorsQuery } from "../queries/queries";

class AddBook extends React.Component {
  getAuthorList = () => {
    let data = this.props.data;
    return data.loading ? (
      <option disabled>Loading Books</option>
    ) : (
      data.authors.map(auth => {
        return (
          <option key={auth.id} value={auth.id}>
            {auth.name}
          </option>
        );
      })
    );
  };
  render() {
    return (
      <form id="add-book">
        <div className="field">
          <label htmlFor="bookName">Book name:</label>
          <input name="bookName" type="text" />
        </div>
        <div className="field">
          <label htmlFor="genre">Genre:</label>
          <input name="genre" type="text" />
        </div>
        <div className="field">
          <label htmlFor="author">Author:</label>
          <select name="author" id="">
            <option value="Select author" defaultValue>
              Select author
            </option>
            {this.getAuthorList()}
          </select>
        </div>
        <button>Add +</button>
      </form>
    );
  }
}
export default graphql(getAuthorsQuery)(AddBook);
