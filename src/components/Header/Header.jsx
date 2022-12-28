import "./Header.css"
const Header =()=>{
    return (
        <div className="head">
        <div className="logo"> My Cart</div>
        <div className="search">
            <input type="text" />
            <button className="search-btn">search</button>
        </div>
        <div className="cart"> cart - <span>0</span></div>
        </div>
    )
}
export default Header