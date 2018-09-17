import React from 'react';
import api from '../api';

class products extends React.Component{
    render(){
        let products = api.getProducts();
        console.log(products);


        return(
            <div>
                <h1 className="products--header">Products</h1>
                <div className="productsPage--filter">
                    <h2>Sort By:</h2>
                    <p>PlayStation</p>
                    <input type="checkbox" name="playstation" value="PlayStation" />
                    <p>Xbox</p>
                    <input type="checkbox" name="xbox" value="Xbox" />
                    <p>Nintendo</p>
                    <input type="checkbox" name="nintendo" value="Nintendo" />
                </div>
                <div className="productsPage">
                    {products.map((p) => {return (
                        <div className="productsCard">
                            <div>
                                <h2>{p.title}</h2>
                                <h3>{p.price}</h3>
                                <p>{p.productCategory}</p>
                                <p>{p.creator}</p>
                                <p>{p.description}</p>
                                <p>{p.availability}</p>
                                <img src={p.productImages[0].url} alt={p.productImages[0].caption} />
                            </div>
                        </div>
                    )}) }
                </div>
            </div>
        );
    }
}

export default products;