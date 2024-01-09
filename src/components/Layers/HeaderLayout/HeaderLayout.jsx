import { Outlet, NavLink } from "react-router-dom";
import { Suspense } from "react";
import css from './HeaderLayout.module.css'
import { useSelector } from "react-redux";


const HeaderLayout = () => {
    const token = useSelector((state) => state.auth.token)
    const noAccount = token === '';
    return (
        <>
        <nav className={css.Navbar}>
          <ul className={css.List}>
            <li>
               <NavLink to="/" className={css.Link}>Home</NavLink>
            </li>
            <li>
               <NavLink to="/contacts" className={css.Link} >Contacts</NavLink>
            </li>
                    {noAccount && <>
            <li>
              <NavLink to="/login" className={css.Link}>Login</NavLink>
                    </li>
                    <li>
              <NavLink to="/register" className={css.Link}>Register</NavLink>
                        </li>
            </>
            }
          </ul>
        </nav> 
        <Suspense fallback={<div className={css.Loader}><p>Loading...</p></div>}>
          <Outlet />
         </Suspense>
            {/* <Breadcrumb spacing='8px' separator='/'>
                <BreadcrumbItem>
                    <NavLink to="/contacts" >Contacts</NavLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <NavLink to="/login" >Login</NavLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <NavLink to="/register" >Register</NavLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <Suspense fallback={<div ><p>Loading...</p></div>}>
          <Outlet />
         </Suspense> */}
        </>
    )
}
export default  HeaderLayout ;