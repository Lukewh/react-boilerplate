import React from 'react';
import ReactDOM from 'react-dom';

class MainView extends React.Component {
  render() {
    return (
      <h1>Success</h1>
    );
  }
}

ReactDOM.render(<MainView />, document.body.querySelector('.main'));