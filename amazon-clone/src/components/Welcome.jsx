import { useParams } from "react-router-dom"

export default function Welcome() {
    const { username } = useParams();
    return (
        <h2>Welcome {username}!</h2>
    )
}