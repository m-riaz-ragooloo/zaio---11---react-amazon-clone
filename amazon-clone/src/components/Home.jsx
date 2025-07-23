import { Outlet } from 'react-router-dom'

export default function Home(){
    return(
        <main>
            <h1>Homepage</h1>
            <Outlet />
        </main>
    )
}