import './App.css';

function App() {
  const title = 'Welcome to the new blog!'
  const like = 50;
  // const person = { name: 'oskar', age: 30};
  const link = "https://github.com/OskarPodrucki";

  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>Liked { like } times</p>
        
        {/* <p> { person } </p> */}
        
        <p>{ 10 }</p>
        <p>{ 'hey, everyone' }</p>
        <p>{ [1,2,3,4,5] }</p>
        <p>{ Math.random() * 10 }</p>

        <a href={ link } target='_blank'>My github</a>
      </div>
    </div>
  );
}

export default App;
