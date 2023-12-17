const Home = () => {

    const handeClick = () => {
        console.log('hello, user');
    }

    const handeClickAgain = (name, e) => {
        console.log('hello ' + name, e.target)
    }
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handeClick}>Click me</button>
            <button onClick={(e) => handeClickAgain('oskar', e)}>Click me again</button>
        </div>
     );
}
 
export default Home;