import { useParams } from 'react-router-dom'

export default function ProductDetails() {
    const params = useParams();
    return (
        <div>
            <h1>Product Details Page</h1>
            <p>{params.id}</p>
        </div>
    )
}