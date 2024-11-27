import { Outlet } from "react-router-dom"

export const Layout =()=>{

    return <>
        <nav>
            <li>Home</li>
            <li>Training Programs</li>
            <li>My training Programs</li>
            <li>Who is Karlsson</li>
        </nav>
        <main>
            <Outlet/>
        </main>
   </>
    
}