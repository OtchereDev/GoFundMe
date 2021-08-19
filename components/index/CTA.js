import React from 'react'

const CTA = () => {
    return (
        <div className="bg-section_bg py-20 mt-5">
            <h3 className="text-xl md:text-4xl text-center">
                Ready to start fundraising?
            </h3>

            <div className="flex justify-center mt-5">
                <button className=" bg-primary_green rounded-md  py-3 w-10/12 md:w-6/12 lg:w-2/12 text-white outline-none shadow-lg font-semibold">
                    Start a GoFundMe
                </button>
            </div>
        </div>
    )
}

export default CTA
