import React from 'react';
import axios from 'axios';



export default class Createproduct extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            image: "",
            description: "",
            price: "",
        }
        this.hundlchangename = this.hundlchangename.bind(this);
        this.hundlchangeimage = this.hundlchangeimage.bind(this);
        this.hundlchangedescription = this.hundlchangedescription.bind(this);
        this.hundlchangeprice = this.hundlchangeprice.bind(this);
        this.hundlClik = this.hundlClik.bind(this);
    }

    hundlchangename(e) {
        this.setState({
            name: e.target.value
        })
    }
    hundlchangeimage(e) {
        this.setState({
            image: e.target.value
        })
    }
    hundlchangedescription(e) {
        this.setState({
            description: e.target.value
        })
    }
    hundlchangeprice(e) {
        this.setState({
            price: e.target.value
        })
    }

    hundlClik() {
        axios.post("/products", this.state).then((res) => {
            console.log(res);
        })
    }

    render() {
        return (
            <div>
                <Router>
                    <Switch>


                        <input type="text" onChange={(e) => this.hundlchangename(e)} />
                        <input type="text" onChange={(e) => this.hundlchangeimage(e)} />
                        <input type="text" onChange={(e) => this.hundlchangedescription(e)} />
                        <input type="text" onChange={(e) => this.hundlchangeprice(e)} />
                        <button onClick={() => this.hundlClik()}>addproduct</button>


                    </Switch>
                </Router>

            </div>
        )
    }
}
