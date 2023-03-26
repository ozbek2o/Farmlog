    import { useState } from "react";
    import Logo from "../ui/Logo";
    import {FaUserAlt ,FaSearch,FaShoppingCart} from "react-icons/fa";
    import Search from "../ui/Search";
    import {GiHamburgerMenu} from "react-icons/gi";
    import OutsideClickHandler from 'react-outside-click-handler';
    import {AiFillCloseCircle} from "react-icons/ai"
    import { useRouter } from "next/router";
  
    const Header = () => {
        const [isSearchModal, setisSearchModal] = useState(false);
        const [isMenuModal, setisMenuModal] = useState(false);
        const router=useRouter();
      return (
        <div className={`h-[5.5rem] z-50 relative ${router.asPath==="/" ? "bg-transparent":"bg-secondary"}`}>
            <div className="container mx-auto text-white flex justify-between items-center h-full">
                <Logo/>
            <nav className={`sm:static absolute top-0 left-0  sm:w-auto sm:h-auto w-full h-screen sm:text-white text-black sm:bg-transparent bg-white sm:flex hidden 
             ${isMenuModal ===true && "!grid place-content-center "  }`}>
              <ul className="flex gap-x-2 sm:flex-row flex-col items-center ">

                <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer" >
                    <a href="">Anasayfa</a>
                </li>
                <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
                    <a href="">Ürünler</a>
                </li>
                <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
                    <a href="">Hakkında</a>
                </li>
                <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
                    <a href="">Lıste</a>
                </li>
              </ul>
              {isMenuModal && (
                <button className='absolute top-0 right-4 z-50' onClick={()=> setisMenuModal(false)} >
                    <AiFillCloseCircle size={25} className='text-primary  transition-all'/>
                </button>
                 )}
            </nav>
            <div className="flex gap-x-4 items-center">
                <button>
                 <FaUserAlt className="hover:text-primary transition-all"/>
                </button>
                <button>
                    <FaShoppingCart className="hover:text-primary transition-all"/>
                </button>
                <button onClick={()=>setisSearchModal(true)}>
                    < FaSearch className="hover:text-primary transition-all"/>
                </button>
                <a  href="" className="md:inline-block hidden">
                    <button className="btn-primary">
                       Çevrimiçi Sipariş 
                    </button>
                </a>
                <button className="sm:hidden inline-block" onClick={()=>setisMenuModal(true)}>
                <GiHamburgerMenu className="text-xl hover:text-primary transition-all"/>
                </button>
                
            </div>
        </div>
        
        {isSearchModal && <Search setisSearchModal={setisSearchModal}/>}
        
        </div>
      );
    };
    
    export default Header