// components/Footer.js
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { SiVisa, SiMastercard, SiPaypal, SiGooglepay } from "react-icons/si";

const aboutlist = [
  "Contact US",
  "About",
  "Careers",
  "Ecommerce Stories",
  "Press",
  "Corporate Information",
];

const grouplist = ["Myntra", "Cleartrip", "Shopsy"];

const helplist = ["Payments", "Shipping", "Cancellation & Returns", "FAQ"];

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-white w-full ">
        <div className=" px-10 py-10 grid grid-cols-1 md:grid-cols-3">
          <div className="font-sm ">
            <p className="text-gray-500 text-sm my-2">About</p>
            {aboutlist.map((about, idx) => {
              return (
                <Link
                  href={`/${about}`}
                  key={idx}
                  className="hover:underline text-sm"
                >
                  <p>{about}</p>
                </Link>
              );
            })}
          </div>
          <div className="">
            <p className="text-gray-500 text-sm my-2">GROUP COMPANIES</p>
            {grouplist.map((group, index) => {
              return (
                <Link
                  href={`/${group}`}
                  key={index}
                  className="hover:underline text-sm "
                >
                  <p>{group}</p>
                </Link>
              );
            })}
          </div>
          <div>
            <p className="text-gray-500 text-sm my-2">Help</p>
            {helplist.map((help, index) => {
              return (
                <Link
                  href={`/${help}`}
                  key={index}
                  className="hover:underline text-sm"
                >
                  <p>{help}</p>
                </Link>
              );
            })}
          </div>
        </div>
          <hr className="w-[90%] mx-auto "/>
        <div className="text-center py-7">
          <p>© 2025 Interiority. All rights reserved. Design by Tanveer Ali</p>
        </div>
        
      </footer>
    </>
  );
};

export default Footer;
