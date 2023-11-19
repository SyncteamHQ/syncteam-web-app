import Link from "next/link";
import Head from "next/head";
import { BsArrowUpRight } from "react-icons/bs";
import { signIn } from "next-auth/react";

const HeroBanner = () => {
    return ( 
        <div>
          <div className="font-dmSans">
        <Head>
          <title>ThirdSpace </title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/Logo.svg" />
        </Head>

        {/* Desktop View */}

        <div className="hidden md:flex flex-col font-DM Sans ">
          <h1 className="text-center text-white font-extrabold xl:text-8xl mx-24 lg:text-6xl md:text-5xl font-dmSans items-center justify-center mt-56 Q` leading-[70px] ">
          Get Paid for Your  <span className="logoGradient">Git  </span>
            <br /> <p className="logoGradient mt-6">Contributions</p>
          </h1>

          <div className="text-center text-white font-normal  mt-10 font-DMSans text-lg lg:mx-8 xl:mx-8 md:mx-6 " >
            <p className="max-w-[700px] mx-auto  text-lg md:text-xl ">
              Join bounties, and earn rewards for your coding skills and open source contributions. Our smart contracts ensure fair payouts and easy payment processing            </p>
            {/* <p className=""> blockchain-powered Payrolls, outsource tasks 
            and chat system  with A.I workspace assistant</p> */}
          </div>

          <div className="flex flex-col md:flex-row text-white gap-10 justify-center mt-10">
            <Link href="/signin" className="border-[1px] border-btnBackgroundGradient flex w-auto px-8 h-[60px] rounded-[50px]">
              <button className="flex justify-center items-center mx-auto gap-3 sm:gap-5">
                  <p className="">Sign In</p>

                  <div className="btnBackgroundGradient rounded-full w-[40px] h-[40px] items-center flex justify-end ">
                    <BsArrowUpRight className=" w-6 h-6  mx-auto flex" />
                  </div>
                </button>
            </Link>
              
            <Link
              href="/signup"
              className="btnBackgroundGradient flex w-auto h-[60px] px-8 rounded-[50px]"
            >
              <button className="flex justify-center items-center mx-auto gap-3 sm:gap-5">
                <p>Sign Up</p>
                <div className="bg-black rounded-full w-[40px] h-[40px] items-center flex justify-end ">
                  <BsArrowUpRight className=" w-6 h-6  mx-auto flex" />
                </div>
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile View */}
        <div className="flex flex-col md:hidden">
          <h1 className="text-center text-white font-extrabold text-3xl sm:text-5xl font-dmSans items-center justify-center mt-20 leading-[40px] ">
            Get Paid for your <span className="logoGradient">Git</span>
            <br /> <span className="logoGradient mt-2">Contributions</span>
          </h1>

          <div className="text-center text-white font-normal mt-4 font-dmSans text-sm sm:text-lg  ">
            <p className="leading-6">
              Join bounties, and earn rewards for <br /> your coding skills and
              open source contributions.
            </p>
            <p>
              Our smart contracts ensure fair payouts and <br /> easy payment
              processing.
            </p>
          </div>

          <div className="flex flex-row text-white gap-5 justify-center mt-20">
            <Link href="/signin" className="flex  mobileBtnBorderGradient2   ">
              <button className="flex justify-center items-center mx-auto gap-8">
                <p className="">Sign In</p>

                <div className="btnBackgroundGradient rounded-full w-[30px] h-[30px] items-center flex justify-end ">
                  <BsArrowUpRight className=" w-5 h-5  mx-auto flex" />
                </div>
              </button>
            </Link>
            <Link
              href="/signup"
              className="btnBackgroundGradient flex w-[140px] h-[50px] rounded-[50px] px-2"
            >
              <button className="flex justify-center items-center mx-auto gap-8">
                <p className="text-sm">Sign Up</p>
                <div className="bg-black rounded-full w-[30px] h-[30px] items-center flex justify-end ">
                  <BsArrowUpRight className=" w-5 h-5  mx-auto flex" />
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
     );
}
 
export default HeroBanner;