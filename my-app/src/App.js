import logo from './logo.svg';
import './App.css';

function App() {
  let posts = '강남 고기맛집';
  function as(){
    return 100
  }

  return (
    <div className="App">
      <div style={{color : 'blue', fontSize : "20px"}}>{posts} 블로그 글</div>
      <div>{as()}</div>
      
    </div>
  );
}

export default App;
