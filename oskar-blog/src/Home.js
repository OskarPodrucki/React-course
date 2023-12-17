import { useState } from "react";

const Home = () => {

    // let name = 'oskar'
    const [name, setName] = useState('oskar')
    const [age, setAge] = useState(15)

    const handeClick = () => {
        setName('marek')
        setAge(30)
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name } is { age } years old</p>
            <button onClick={handeClick}>Click me</button>
        </div>
     );
}
 
export default Home;