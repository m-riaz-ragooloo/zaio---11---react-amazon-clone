import { Outlet } from "react-router-dom";
import './Home.css'
import Products from "./Products"

// export default function Home(){
//     return(
//         <main>
//             <h1>Homepage</h1>
//             <Outlet />
//         </main>
//     )
// }

export default function Home() {
  return (
    <main>
      <div className="home">
        <div className="home-container">
            <img className="home-image" src="https://m.media-amazon.com/images/I/612ouh5unhL._SX3000_.jpg" alt="Hero image" />
          <Outlet />
          <Products />
        </div>
      </div>
    </main>
  );
}
