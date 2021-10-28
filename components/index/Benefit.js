import { faGlobe, faCheckCircle,faHandHoldingUsd, faMobileAlt, faChartLine, faPhoneAlt  } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import BenefitCard from './BenefitCard'
import { useRouter } from 'next/router'

const Benefit = () => {
    const router = useRouter()
    const onClick =()=>{
        router.push("/create-fundraiser")
    }
    
    return (
        <div className="bg-section_bg lg:py-20 py-10 px-8 mt-8">
            <h2 className="text-2xl font-semibold lg:text-4xl md:text-center">
                The leader in online fundraising
            </h2>

            <div className="lg:w-10/12 mx-auto mt-4 md:mt-8 flex-wrap flex flex-col md:flex-row md:justify-center">

                
            <BenefitCard icon={faGlobe} title={"Worldwide leader"} description={"GoFundMe is trusted around the world for its simple, reliable fundraising platform."} />

            <BenefitCard icon={faCheckCircle} title={"Simple setup"} description={"You can personalise and share your GoFundMe in just a few minutes."} />

            <BenefitCard icon={faHandHoldingUsd} title={"Secure"} description={"Our Trust & Safety team works around the clock to protect you against fraud."} />

            <BenefitCard icon={faMobileAlt} title={"Mobile App"} description={"The GoFundMe app makes it simple to launch and manage your fundraiser on the go."} />

            <BenefitCard icon={faChartLine} title={"Social reach"} description={"Harness the power of social media to spread your story and get more support."} />

            <BenefitCard icon={faPhoneAlt} title={"24/7 expert advice"} description={"Our best-in-class Customer Support agents will answer your questions, day or night."} />

            </div>
            
            <div className="flex justify-center mt-5">
                <button onClick={onClick} className=" bg-primary_green rounded-md  py-3 w-full md:w-6/12 lg:w-2/12 text-white outline-none shadow-lg font-semibold">
                    Start a GoFundMe
                </button>
            </div>

        </div>
    )
}

export default Benefit
