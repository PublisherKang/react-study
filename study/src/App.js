import React, { Component } from 'react';
import ScrollBox from './ScrollBox.js';

// import ValidationSample from './ValidationSample.js';
// import Counter from './Counter.js';
// import Say from './Say.js';
// import EventPractice from './EventPractice.js';

// const App = () => {
//   return <Counter />;
// };
// const App = () => {
//   return <EventPractice />;
// };

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
      </div>
    );
  }
}

export default App;
