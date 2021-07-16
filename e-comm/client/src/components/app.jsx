import React from 'react';
import axios from 'axios';
import Listeproduct from './Listeproduct.jsx'


export default class App extends React.Component {
     constructor(){
         super()
         this.state = { products:[]}
     }

     componentDidMount(){
         axios.get("/products").then((res)=>{
             this.setState({
                 products:res.data
             })
         })


     }
    render() {
        return (
            <div>
                <Listeproduct products={this.state.products}/>
                {/* // nav template
                // import <tag createproduct from */}
            </div>
        )
    }
}