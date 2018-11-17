import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  handleInputChange = event => {
    this.setState({ term: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div className="field">
          <label className="label">Video Search</label>
          <div className="control">
            <input
              type="text"
              className="input"
              value={this.state.term}
              onChange={this.handleInputChange}
            />
          </div>
        </div>
      </form>
    );
  }
}

export default SearchBar;
