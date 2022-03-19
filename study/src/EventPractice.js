// import React, { Component, useState } from 'react';
import React, { useState } from 'react';

const EventPractice = () => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const onChangeUsername = (e) => setUsername(e.target.value);
  const onChangeMessage = (e) => setMessage(e.target.value);
  const onClick = () => {
    alert(username + ': ' + message);
    setUsername('');
    setMessage('');
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChangeUsername}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력"
        value={message}
        onChange={onChangeMessage}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

// 클래스 인풋 이벤트
// class EventPractice extends Component {
//   state = {
//     username: '',
//     message: '',
//   };

//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//       //      message: e.target.value,
//     });
//   };

//   handleClick = (e) => {
//     alert(this.state.username + ': ' + this.state.message);
//     this.setState({
//       username: '',
//       message: '',
//     });
//   };

//   handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       this.handleClick();
//     }
//   };

//   render() {
//     return (
//       <div>
//         <h1>이벤트 연습</h1>
//         <input
//           type="text"
//           name="username"
//           placeholder="아무거나 입력하세요"
//           value={this.state.username}
//           onChange={this.handleChange}
//           //   인풋에 사용자 이벤트 담는법
//         />
//         <input
//           type="text"
//           name="message"
//           placeholder="아무거나 입력하세요"
//           value={this.state.message}
//           onChange={this.handleChange}
//           onKeyPress={this.handleKeyPress}
//           //   인풋에 사용자 이벤트 담는법
//         />
//         <button onClick={this.handleClick}>확인</button>
//       </div>
//     );
//   }
// }

export default EventPractice;
