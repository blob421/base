"use client"

type NavbarProps = {
    home?: boolean, about?: boolean, products?:boolean, contact?: boolean
}
export default function Navbar({home, about, products, contact}:NavbarProps){
    return (
        <div className="navbar_main row">
            <div className="col-12 d-flex gap-lg-5 gap-1 justify-content-end justify-content-lg-center align-items-center
           p-3">

            
                <img src={"/company_logo.jpg"} className="company_logo position-absolute start-0 ms-lg-2"/>

                {home && 
                  <button className="nav_btn_0" onClick={()=> window.location.href='/'}>
                    Home
                </button>
                }
                { products && 
                  <button className="nav_btn_0" onClick={()=> window.location.href='/products'}>
                    Products
                </button>

                }
                { about && 
                  <button className="nav_btn_0" onClick={()=> window.location.href='/'}>
                    About
                  </button>

                }
                { contact && 
                  <button className="nav_btn_0" onClick={()=> window.location.href='/'}>
                    Contact
                  </button>

                }

              </div>
        </div>
    )
}