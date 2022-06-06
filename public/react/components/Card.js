import React from "react";
import ReactDOM from 'react-dom'

function Card (){
    
   return <div>
        <Card>
            <img src=''/>
            <h1>this is card</h1>
        </Card>
    </div>
}

ReactDOM.render(<Card/>, document.getElementById('root'))

export default Card;