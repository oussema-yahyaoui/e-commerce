import React from 'react';
import axios from 'axios';
import "../Style.css"



export default class Listeproduct extends React.Component {
    constructor() {
        super();
        this.state = {
            products: []
        }
        this.hundlchangename = this.hundlchangename.bind(this);
        this.hundlchangeimage = this.hundlchangeimage.bind(this);
        this.hundlchangedescription = this.hundlchangedescription.bind(this);
        this.hundlchangeprice = this.hundlchangeprice.bind(this);
        this.hundlClikdel = this.hundlClikdel.bind(this);
        this.hundlClikup = this.hundlClikup.bind(this);
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

    componentDidMount() {
        axios.get("/products").then((res) => {
            this.setState({
                products: res.data
            })
        })


    }

    hundlClikdel(id) {
        axios.delete("/products/" + id).then((res) => {
            location.reload();
        })
    }

    hundlClikup(id) {
        axios.put("/products/" + id, this.state).then((res) => {
            location.reload();
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.products.map((product, index) => (
                        <div className="card">
                        <ul>
                            <div key={index}>
                                <h4 >{product.name}</h4>
                                <img src={product.image} />
                                <p>{product.description}</p>
                                <h4>{product.price}</h4>
                                <input type="text" onChange={this.hundlchangename} />
                                <input type="text" onChange={this.hundlchangeimage} />
                                <input type="text" onChange={this.hundlchangedescription} />
                                <input type="text" onChange={this.hundlchangeprice} />
                                <div>
                                <button onClick={() => this.hundlClikdel(product.id)}>delete</button>
                                <button onClick={() => this.hundlClikup(product.id)}>update</button>
                                </div>
                            </div>
                        </ul>
                        </div>
                    ))
                }
            </div>
        )
    }
}
