import React from 'react';
import axios from 'axios';



export default class Listeproduct extends React.Component {
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
                    this.props.products.map((product, index) => (
                        <ul>
                            <li>
                                <h4>{product.name}</h4>
                                <img src={product.image} />
                                <p>{product.description}</p>
                                <h4>{product.price}</h4>
                                <input type="text" onChange={this.hundlchangename} />
                                <input type="text" onChange={this.hundlchangeimage} />
                                <input type="text" onChange={this.hundlchangedescription} />
                                <input type="text" onChange={this.hundlchangeprice} />
                                <button onClick={() => this.hundlClikdel(product.id)}>delete</button>
                                <button onClick={() => this.hundlClikup(product.id)}>update</button>
                            </li>
                        </ul>
                    ))
                }
            </div>
        )
    }
}
