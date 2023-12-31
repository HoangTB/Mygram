import './SliceBar.css'
import {BiLogOut} from 'react-icons/bi'
import {RiAdminFill} from 'react-icons/ri'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
function SlideBar() {
  const navigate = useNavigate()
  const adminUser = JSON.parse(localStorage.getItem('users'));
  const router = useLocation();
  const HandleLogOut = () =>{

   
 
    setTimeout(() =>{
      navigate('/login');
      toast.success("Logout successful !", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }, 2000);
    

  }
  return (
    <div className="sidebar-wrappers">
      <div className="logo">
        <Link className='logo-admin' to= "/user-admin"><img
                className="sidenav-logo-admin"
                src="/logo.png"
               
            /></Link>
      </div>
      <div className="group-btn">
        <ul className='list-manager'>
          <li className={router.pathname === "/user-admin" ? "active":""}>
          <Link to={"/user-admin"} className={router.pathname === "/user-admin" ? "active":""}>
          <i class="fa-solid fa-user"></i>
          <span>User Managerment</span>
          </Link>
          </li>
          <li className={router.pathname === "/post-admin" ? "active":""}>
         <Link to={"/post-admin"} className={router.pathname === "/post-admin" ? "active":""}>
         <i class="fa-solid fa-list"></i>
          <span>Post Managerment</span>
         </Link>
          </li>
        </ul>
      </div>
      <div className='sign-out'> 
        <button className='btn-sign-out' onClick={HandleLogOut}>
            <BiLogOut/><span>Logout</span>
        </button>
        <b>{adminUser.user}</b>       
      </div>
    </div>
  );
}

export default SlideBar;