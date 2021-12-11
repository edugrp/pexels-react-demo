import React from 'react';
import ShowImages from "./ShowImages";
import Carousel from "./Carousel";
import CardList from "./CardList";

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Pexels React Demo</h1>
                <CardList/>
                <ShowImages/>
                <Carousel/>
            </div>
        )
    }
}
export default App
