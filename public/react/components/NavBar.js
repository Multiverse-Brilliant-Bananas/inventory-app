import React from 'react'
import ReactDOM from 'react-dom'

 function NavBar (){
     
     return <div>
        <nav>
            <ul>
                <button>Home</button>
                <button>Shop</button>
                <button>Cart</button>
                <button>Log in</button>
            </ul>
        </nav>
    </div>
};
ReactDOM.render(<NavBar/>, document.getElementById('root'))


export default NavBar