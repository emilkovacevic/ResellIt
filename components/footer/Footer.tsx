'use client'

import Link from 'next/link'
import { BsFacebook, BsGithub, BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="bg-card px-4 mt-10 md:px-0">
      {/* Top area: Blocks */}
      <div className="mx-auto px-4 text-foreground grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-border container">
        {/* 1st block */}
        <div className="sm:col-span-12 lg:col-span-3">
          <div className="my-2 text-2xl">Resell It</div>
          <div className="text-sm mt-4">
            <ul>
              <li className="mb-2">
                <a
                  href="#0"
                  className=" hover:underline transition duration-150 ease-in-out"
                >
                  Terms
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#0"
                  className=" hover:underline transition duration-150 ease-in-out"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 2nd block */}
        <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
          <h6 className="font-medium mb-2">Categories</h6>
          <ul className="text-sm">
            <li className="mb-2">
              <Link
                href="/cars"
                className=" transition duration-150 ease-in-out"
              >
                Cars & Vehicles
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/jewelry"
                className=" transition duration-150 ease-in-out"
              >
                Jewelry
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/music"
                className=" transition duration-150 ease-in-out"
              >
                Musical Instruments
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/pets"
                className=" transition duration-150 ease-in-out"
              >
                Pets
              </Link>
            </li>
            <li className="mb-2">
              <a href="/toys" className=" transition duration-150 ease-in-out">
                Toys
              </a>
            </li>
          </ul>
        </div>

        {/* 3rd block */}
        <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
          <h6 className=" font-medium mb-2">Resources</h6>
          <ul className="text-sm">
            <li className="mb-2">
              <a href="#0" className=" transition duration-150 ease-in-out">
                Documentation
              </a>
            </li>
            <li className="mb-2">
              <a href="#0" className=" transition duration-150 ease-in-out">
                Tutorials & Guides
              </a>
            </li>
            <li className="mb-2">
              <a href="#0" className=" transition duration-150 ease-in-out">
                Blog
              </a>
            </li>
            <li className="mb-2">
              <a href="#0" className=" transition duration-150 ease-in-out">
                Support Center
              </a>
            </li>
            <li className="mb-2">
              <a href="#0" className=" transition duration-150 ease-in-out">
                Partners
              </a>
            </li>
          </ul>
        </div>

        {/* 4th block */}
        <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
          <h6 className=" font-medium mb-2">Company</h6>
          <ul className="text-sm">
            <li className="mb-2">
              <a href="#0" className=" transition duration-150 ease-in-out">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#0" className=" transition duration-150 ease-in-out">
                About us
              </a>
            </li>
            <li className="mb-2">
              <a href="#0" className=" transition duration-150 ease-in-out">
                Company values
              </a>
            </li>
            <li className="mb-2">
              <a href="#0" className=" transition duration-150 ease-in-out">
                Pricing
              </a>
            </li>
            <li className="mb-2">
              <a href="#0" className=" transition duration-150 ease-in-out">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* 5th block */}
        <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
          <h6 className=" font-medium mb-2">Subscribe</h6>
          <p className="text-sm 0 mb-4">
            Get the latest news and articles to your inbox every month.
          </p>
          <form>
            <div className="flex flex-wrap mb-4">
              <div className="w-full">
                <label className="block text-sm sr-only" htmlFor="newsletter">
                  Email
                </label>
                <div className="relative flex items-center max-w-xs">
                  <input
                    id="newsletter"
                    type="email"
                    className="form-input w-full  px-3 py-2 pr-12 text-sm"
                    placeholder="Your email"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute inset-0 left-auto"
                    aria-label="Subscribe"
                  >
                    <span
                      className="absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-300"
                      aria-hidden="true"
                    ></span>
                    <svg
                      className="w-3 h-3 fill-current text-blue-600 mx-3 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                        fillRule="nonzero"
                      />
                    </svg>
                  </button>
                </div>
                {/* Success message */}
                {/* <p className="mt-2 text-green-600 text-sm">Thanks for subscribing!</p> */}
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Bottom area */}
      <div className="md:flex container mx-auto md:items-center md:justify-between py-4 md:py-8 border-t bg-card border-gray-200 ">
        <div className="container flex justify-between">
          {/* Social as */}
          <ul className=" flex mb-4 md:order-1 md:ml-4 md:mb-0 text-foreground">
            <li>
              <a
                href="#0"
                className="flex justify-center items-center rounded-full shadow transition duration-150 ease-in-out"
                aria-label="Twitter"
              >
                <BsTwitter />
              </a>
            </li>
            <li className="ml-4">
              <a
                href="#0"
                className="flex justify-center items-center  rounded-full shadow transition duration-150 ease-in-out"
                aria-label="Github"
              >
                <BsGithub />
              </a>
            </li>
            <li className="ml-4">
              <a
                href="#0"
                className="flex justify-center items-center rounded-full shadow transition duration-150 ease-in-out"
                aria-label="Facebook"
              >
                <BsFacebook />
              </a>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="text-sm text-right text-foreground mx-4">
            &copy;{' '}
            <a
              className="hover:underline mx-2"
              href="https://emilthedev.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              2023 ResellIt
            </a>{' '}
            All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
