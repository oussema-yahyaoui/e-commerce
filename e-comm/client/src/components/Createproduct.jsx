import React from 'react';
import axios from 'axios';
import "../Style.css"

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
            <div > 
                <form className="w3-container w3-card-4">

                      <div>
                        <input type="text" placeholder="name" onChange={this.hundlchangename} />

                      </div>
                      <div>

                        <input type="text" placeholder="imagr" onChange={this.hundlchangeimage} />
                      </div>
                      <div>
                        <input type="text" placeholder="description" onChange={this.hundlchangedescription} />

                      </div>
                      <div>

                        <input type="text"placeholder="price" onChange={this.hundlchangeprice} />
                      </div>
                      <div>
                        <button className="w3-btn w3-blue" onClick={() => this.hundlClik()}>addproduct</button>

                      </div>
                </form>
            </div>
        )
    }
}
