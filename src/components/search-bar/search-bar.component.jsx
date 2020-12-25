import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: "" };
  onInputChange = ({ target }) => {
    this.setState({
      term: target.value,
    });
  };
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };
  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="ui icon input">
            <div className="field">
              <input
                type="text"
                placeholder="Search Videos..."
                value={this.state.term}
                onChange={this.onInputChange}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
