import React from 'react';

function Navbar(prop) {

    

    const {products} = prop;
    return ( 
        <div>
                <li>{products}</li>
        </div>
     );
}

export default Navbar;