import { Link } from 'react-router-dom'

export default function Header() {
    return(
        <div>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
            </ul>
        </div>
    )
}