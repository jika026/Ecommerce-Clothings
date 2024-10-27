import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../routes";

const Footer = () => {
  return (
    <footer className="py-20 px-8 bg-[#f0f0f0] flex justify-between">
      <div
        className="max-w-[272px] cursor-pointer"
        onClick={() => (window.location.href = ROUTES.HOME)}
      >
        <img src="/IMAGES/logo/footerLogo.png" alt="Logo" className="w-full" />
      </div>
      <ul className="flex flex-col gap-y-4">
        <li className="list-none">
          <Link className="no-underline text-black" to="#">
            Customer Care
          </Link>
        </li>
        <li className="list-none">
          <Link className="no-underline text-black" to="#">
            Account
          </Link>
        </li>
        <li className="list-none">
          <Link className="no-underline text-black" to="#">
            Contact us
          </Link>
        </li>
        <li className="list-none">
          <Link className="no-underline text-black" to="#">
            Return & Exchange
          </Link>
        </li>
        <li className="list-none">
          <Link className="no-underline text-black" to="#">
            Size Guide
          </Link>
        </li>
        <li className="list-none">
          <Link className="no-underline text-black" to="#">
            Hijab Guide
          </Link>
        </li>
      </ul>
      <ul className="flex flex-col gap-y-4">
        <li className="list-none">
          <Link className="no-underline text-black" to="#">
            Information
          </Link>
        </li>
        <li className="list-none">
          <Link className="no-underline text-black" to="#">
            Our Brand
          </Link>
        </li>
        <li className="list-none">
          <Link className="no-underline text-black" to="#">
            FAQ
          </Link>
        </li>
        <li className="list-none">
          <Link className="no-underline text-black" to="#">
            Blog
          </Link>
        </li>
        <li className="list-none">
          <Link className="no-underline text-black" to="#">
            Privacy Policy
          </Link>
        </li>
        <li className="list-none">
          <Link className="no-underline text-black" to="#">
            {" "}
            Affiliate Program{" "}
          </Link>
        </li>
        <li className="list-none">
          <Link className="no-underline text-black" to="#">
            Kaltu’s Rewards
          </Link>
        </li>
      </ul>
      <div className="flex flex-col gap-y-4">
        <p className="no-underline text-black">
          <Link className="no-underline text-black" to="#">
            Get Socials
          </Link>
        </p>
        <div className="flex gap-x-3">
          <i
            className="fa-brands fa-facebook-f fa-2x"
            onClick={() =>
              window.open(
                "https://www.facebook.com/kaltus_collectibles",
                "_blank"
              )
            }
          ></i>
          <i
            className="fa-brands fa-instagram fa-2x"
            onClick={() =>
              window.open(
                "https://www.instagram.com/kaltus_collectibles",
                "_blank"
              )
            }
          ></i>
          <i
            className="fa-brands fa-x-twitter fa-2x"
            onClick={() =>
              window.open(
                "https://www.twitter.com/kaltus_collectibles",
                "_blank"
              )
            }
          ></i>
          <i
            className="fa-brands fa-linkedin fa-2x"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/kaltus_collectibles",
                "_blank"
              )
            }
          ></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
