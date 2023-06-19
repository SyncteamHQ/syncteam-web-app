import Logo from "@/components/Ui/Logo";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import GetStartedModal from "./GetStartedModal";
import { logo } from "@/assets";
import Image from "next/image";
import SignUpModal from "./SignUpModal";

type Props = {};

const LandingPage = (props: Props) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <>
      <div className="">
        <Head>
          <title>ThirdSpace </title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/Logo.svg" />
        </Head>

        <div className="">
          <div className="flex justify-between mx-12 ">
            <Image src={logo} alt="logo" width={180} />

            <div className=" mt-2">
              <ConnectButton />
            </div>
          </div>

          <h1 className="text-center text-white font-extrabold text-6xl  font-nexa items-center justify-center mt-20 ">
            The Next Gen All-In-One <br />{" "}
            <span className="logoGradient">Workspace</span>
          </h1>

          <div className="text-center text-white font-normal  mt-10 font-nexa  text-sm   ">
            <p className="leading-6">
              Connect your GitHub account, join bounties, and earn rewards for
              your coding skills. Our smart <br /> contracts ensure fair payouts
              and easy payment processing
            </p>
          </div>

          <div className="flex flex-col md:flex-row text-white gap-10 justify-center mt-10">
            <Link href="/" className="flex   btnBorderGradient2  ">
              <button className="flex justify-center items-center mx-auto gap-8">
                <p className="">Sign In</p>

                <div className="btnBackgroundGradient rounded-full w-[40px] h-[40px] items-center flex justify-end ">
                  <BsArrowUpRight className=" w-6 h-6  mx-auto flex" />
                </div>
              </button>
            </Link>
            <Link
              href="/"
              className="btnBackgroundGradient flex w-[160px] h-[60px] rounded-[50px]"
            >
              <button
                className="flex justify-center items-center mx-auto gap-8"
                onClick={() => setShowModal(true)}
              >
                <p>Sign Up</p>
                <div className="bg-black rounded-full w-[40px] h-[40px] items-center flex justify-end ">
                  <BsArrowUpRight className=" w-6 h-6  mx-auto flex" />
                </div>
              </button>
            </Link>

            {/* Modals */}

            <SignUpModal
              isVisible={showModal}
              onClose={() => setShowModal(false)}
            />

            <Link href="/"></Link>

            {/* <button
              className="flex w-[250px] h-[50px] rounded-full  justify-center items-center mx-auto btnBackgroundGradient font-extrabold text-3xl"
              onClick={() => setShowModal(true)}
            >
              Get Started
            </button> */}

            {/* GetStarted Modal */}

            {/* <div>
              <GetStartedModal
                isVisible={showModal}
                onClose={() => setShowModal(false)}
              />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
