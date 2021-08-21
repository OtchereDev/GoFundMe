import React from 'react'
import Image from "next/image"
import TestImage from '../assets/gofundme_homepage-mobile.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine} from "@fortawesome/free-solid-svg-icons"
import DonateItem from './DonateItem'


const Header = () => {
    return (
        <div className="w-full flex flex-col lg:flex-row detail_header">
            <div className="w-full lg:w-8/12 lg:py-10 lg:flex justify-center items-center ">
                {/* image part */}
                <div className="w-full lg:w-9/12 relative img_cont lg:rounded-md overflow-hidden ">
                    <Image src={TestImage} layout={"fill"} />
                </div>
            </div>
            <div className="w-full lg:w-4/12 lg:flex lg:justify-center py-5 lg:py-10">
                {/* Donate Card Part */}
                <div className="lg:w-11/12 px-5 lg:shadow-lg lg:rounded-md py-5 ">

                    <h2 className="text-2xl lg:text-3xl font-bold ">
                        $152,040 raised <span className=" text-sm font-normal ">of $300,000</span> 

                    </h2>

                    <div className="w-full my-2">
                        <div className="w-full h-1 relative rounded-3xl bg-gray-200 overflow-hidden">
                            <div className="w-3/12 h-full absolute rounded-3xl top-0 left-0 bg-primary_green">

                            </div>
                        </div>
                    </div>

                    <button className="w-full py-3 px-2 flex btn_deep items-center rounded-md outline-none">
                        <svg height="32" viewBox="0 0 19 19" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none"><rect fill="#333" height="19" rx="2" width="19"></rect><path clipRule="evenodd" d="m6.056 11.16c.095-.084.182-.159.28-.22.281-.172.589-.226.915-.198.153.013.3.048.441.11.2.088.351.234.473.412.02.03.03.035.054.001a1.18 1.18 0 0 1 .874-.526c.363-.044.702.026.982.279.141.127.22.291.254.477.022.125.03.25.03.376.002.639 0 1.277.003 1.915 0 .055-.016.067-.069.067a72.604 72.604 0 0 0 -1.011 0c-.05 0-.063-.012-.063-.062a251.2 251.2 0 0 0 .001-1.508c0-.12-.01-.24-.038-.358-.098-.413-.567-.415-.776-.22-.129.12-.172.273-.19.438-.017.14-.01.282-.01.422-.002.41-.002.82 0 1.23 0 .043-.01.058-.055.058a88.164 88.164 0 0 0 -1.029 0c-.048 0-.058-.015-.058-.06.002-.508 0-1.017.001-1.525 0-.104-.004-.208-.024-.31a.426.426 0 0 0 -.34-.356.505.505 0 0 0 -.556.21.652.652 0 0 0 -.086.357c-.004.538-.004 1.076-.002 1.614 0 .058-.016.07-.071.07a72.605 72.605 0 0 0 -1.012 0c-.047 0-.058-.014-.058-.06v-2.955c0-.048.015-.058.06-.057.34.001.682.002 1.023 0 .048 0 .059.014.058.06-.004.101-.001.203-.001.318zm6.789.745h.592c.023 0 .054.006.042-.035a.651.651 0 0 0 -.245-.386c-.135-.095-.288-.11-.447-.104a.59.59 0 0 0 -.573.48c-.009.04.002.045.039.045zm.518.615h-1.124c-.064 0-.07.006-.061.07.008.063.012.125.029.187a.518.518 0 0 0 .363.387c.17.052.34.062.511.011a.568.568 0 0 0 .299-.213c.022-.03.044-.044.083-.043h.983c.054 0 .057.015.042.06-.173.51-.539.803-1.052.93a2.26 2.26 0 0 1 -.508.06 2.323 2.323 0 0 1 -.871-.128c-.55-.207-.897-.593-1.002-1.174-.08-.442-.021-.868.225-1.255.188-.296.453-.5.787-.608a2.335 2.335 0 0 1 1.368-.027c.565.16.899.548 1.052 1.102.055.196.063.398.06.6 0 .045-.027.04-.055.04h-1.13zm.558-6.556c.06-.044.13-.069.197-.1.318-.15.833-.085 1.051.177a.593.593 0 0 1 .035.725l-.068.069c-.263.193-1.88 1.383-2.124 1.53-.266.162-.825.16-1.141-.16-.14-.143-.158-.274-.14-.433.02-.175.142-.31.278-.428zm-8.841-.049 1.91 1.38c.137.119.26.253.28.428.017.16 0 .29-.14.433-.317.321-.876.323-1.142.161-.245-.148-1.86-1.337-2.124-1.531l-.068-.068a.593.593 0 0 1 .035-.726c.218-.262.733-.326 1.051-.177.067.032.137.057.198.1zm5.309-.03-.01 1.238a.554.554 0 0 1 -.018.144c-.097.343-.44.528-.847.528-.421 0-.772-.161-.855-.517a.632.632 0 0 1 -.015-.145l.001-1.248c.004-.472.395-.729.876-.729.484 0 .869.221.869.697zm1.648 2.842c.504.249.882.57 1.157.925h-7.548l.003-.003h-.01c.64-.857 1.897-1.446 3.772-1.446 1.12 0 1.978.202 2.626.524z" fill="#fff" fill-rule="evenodd"></path></g></svg>
                        <span className=" w-full text-center text-lg font-semibold">
                            Donate
                        </span>
                    </button>

                    <div className="flex w-full items-center mt-3 text-purple-900">
                        <div className="flex justify-center border-0 items-center h-10 w-10 rounded-full mr-4 bg-purple-100">

                            <FontAwesomeIcon className=" text-xl" icon={ faChartLine} />
                        </div>
                        <span className="text-lg font-semibold">
                            1,258 people just donated
                        </span>
                    </div>
                    <div>
                        <DonateItem border_class={"border-t"} />
                        <DonateItem border_class={"border-t"} />
                        <DonateItem border_class={"border-t"} />
                        <DonateItem border_class={"border-t"} />

                        <div>
                            <button className="text-green-700 bg-white border-green-600 border rounded-md py-2 px-4 hover:bg-green-600 hover:text-white font-semibold">
                                See all
                            </button>
                           
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Header
