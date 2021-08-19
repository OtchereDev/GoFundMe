import React from 'react'
import LogoSvg from '../LogoSvg'

const Footer = () => {
    return (
        <div className="flex w-full flex-col md:flex-row py-8 px-4 lg:py-20 lg:px-32 ">
           <div className="lg:w-6/12 md:w-5/12 flex justify-center items-center">
                <LogoSvg width={"w-6/12 lg:w-5/12"} />
           </div>
           <div className="md:w-6/12 flex flex-col md:justify-between md:flex-row">
                <div className="md:w-5/12">
                    <h3 className="font-semibold text-primary_green my-3 ">
                        FUNDRAISE FOR
                    </h3>

                    <div>
                        <a className="block my-1" href="#">
                            Medical
                        </a>
                        <a className="block my-1" href="#">
                            Emergency
                        </a>
                        <a className="block my-1" href="#">
                            Memorial
                        </a>
                        <a className="block my-1" href="#">
                            Education
                        </a>
                    </div>
                </div>
                <div className="md:w-5/12">
                    <h3 className="font-semibold text-primary_green my-3 ">
                        RESOURCES
                    </h3>

                    <div>
                        <a className="block my-1" href="#">
                            Help centre
                        </a>
                        <a className="block my-1" href="#">
                            Blog
                        </a>
                        <a className="block my-1" href="#">
                            Career
                        </a>
                    </div>
                
                </div>  
           </div> 
        </div>
    )
}

export default Footer
