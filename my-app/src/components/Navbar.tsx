import { Link } from "react-router-dom";

export const Navbar = () => {
    return (    
        
    <>
        <Link to="/"> Home </Link>
        <Link to="/login"> Login </Link>
        <Link to="/games"> Games</Link>
        <Link to="/shop"> Shop</Link>
        <Link to="/leaderboard"> Leaderboard</Link>
    </>
    )
}