import React from 'react';
import ReactDOM from 'react-dom';

class MainView extends React.Component {
  render() {
    return (
      <div className="main"><h1>Success</h1></div>
    );
  }
}

ReactDOM.render(<MainView />, document.body);