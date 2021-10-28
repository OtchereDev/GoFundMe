import React, { useRef, useEffect } from 'react'
import { faTimes} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

const ToggleMenu = ({toggler, setToggler}) => {

    useEffect(()=>{
        if(toggler){
            menu.current?.classList?.remove("hidden")
        }else{
            menu.current?.classList?.add("hidden")

        }
    },[toggler])

    const menu=useRef(null)
    const user = useSelector(state => state.user?.email)

    const router = useRouter()

    const onClick =()=>{
        router.push("/create-fundraiser")
    }

    const handlePushToProfile=()=>{
        router.push("/profile")
    }

    const pushToLogin=()=>{
        router.push("/sign-in")
    }

    return (
        <div ref={menu} className="w-full fixed z-20 top-0 left-0 h-full lg:hidden px-10 pt-10  bg-white">
            
            <div className="text-right text-xl mb-3">
                    <FontAwesomeIcon onClick={()=>setToggler(false)} icon={faTimes}  className="cursor-pointer" />
                </div>
            <div>
                {
                    user
                    ?
                    <span onClick={handlePushToProfile} className="mr-2 text-lg hover:text-gray-500 cursor-pointer">
                        Profile
                    </span>
                    :
                    <span onClick={pushToLogin} className="mr-2 text-lg hover:text-gray-500 cursor-pointer">
                        Sign in
                    </span>}
            </div>
            <hr className="my-2" />
            <div>
                <button onClick={onClick} className="px-2 outline-none py-3 w-full font-semibold rounded-md bg-primary_green text-gray-50 shadow-md">
                    Start a GoFundMe
                </button>
            </div>
        </div>
    )
}

export default ToggleMenu
