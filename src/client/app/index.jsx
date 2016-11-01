import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return (
      <div>
        <p>"We will assist you in the development of strategic social media content and Facebook apps…"</p>
      </div>
    );
  }
}

render(<App/>, document.getElementById('description-doing'));
