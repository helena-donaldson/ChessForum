import { Outlet, Link } from "react-router-dom"
{/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> */}
import './Layout.css'
import logo from "../assets/ChessChat.PNG"

function Layout(){
  return (
    <div>
        <div id="topNav">
            <img src={logo}></img>
        </div>
    <div class="icon-bar">
        <div class="indIcon"> <Link style={{ color: "white" }} to="/"><i class="fa fa-home"></i></Link></div>
        <div class="indIcon"> <Link style={{ color: "white" }} to="/Home"><i class="fa fa-comments-o" aria-hidden="true"></i></Link></div>
        <div class="indIcon"> <Link style={{ color: "white" }} to="/Create"><i class="fa fa-plus" aria-hidden="true"></i></Link></div>
        <div class="indIcon"><Link style={{ color: "white" }} to="/DailyPuzzle"><i class="fa fa-calendar" aria-hidden="true"></i></Link></div>
        {/* <a class="active" href="#"><i class="fa fa-home"></i></a> */}
        {/* <a href="#"><i class="fa fa-fire" aria-hidden="true"></i></a>
        <a href="#"><i class="fa fa-plus" aria-hidden="true"></i></a> */}
    </div>
        <Outlet />
    </div>

    
  )
}

export default Layout