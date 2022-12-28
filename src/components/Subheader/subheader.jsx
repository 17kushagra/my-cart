import React from "react";

import './subheader.css'
function Subheader() {
    return(
        <>
        <div className="sub=main">
            <ul className="sub-ul">
                <li className="cat"><a href="#">Home</a></li>
                <li className="cat"><a href="#">category1</a></li>
                <li className="cat"><a href="#">category2</a></li>
                <li className="cat"><a href="#">category3</a></li>
                <li className="cat"><a href="#">category4</a></li>
            </ul>
        </div>
        <hr />
        </>
    )
}
export default Subheader;