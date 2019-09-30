import React, { Component } from 'react';
import { MoviesData, renderMovieTitle } from './movies-data';
import Autocomplete from 'react-autocomplete';
import './App.css';

class App extends Component {

  state = { val: '' };

  render() {
    return (
      <div className="autocomplete-wrapper">
        <h3>React Autocomplete Demo</h3>
        <Autocomplete
          value={this.state.val}
          items={MoviesData()}
          getItemValue={item => item.title}
          shouldItemRender={renderMovieTitle}
          renderMenu={item => (
            <div className="dropdown">
              {item}
            </div>
          )}
          renderItem={(item, isHighlighted) =>
            <div className={`item ${isHighlighted ? 'selected-item' : ''}`}>
              {item.title}
            </div>
          }
          onChange={(event, val) => this.setState({ val })}
          onSelect={val => this.setState({ val })}
        />
      </div>
    );
  }
}

export default App;