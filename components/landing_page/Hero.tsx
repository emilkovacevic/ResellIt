import { AiFillGithub, AiOutlineOneToOne } from "react-icons/ai"
import Search from "../search/Search"

export default function Hero() {
  return (
    <section className="bg-card">
      <div className="py-8 px-4 mx-auto text-center lg:py-16 lg:px-12">
        <Search />
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Find anything you need</h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here at Resell it, you can search for items you need, or sell anything.</p>
        <hr className="my-8" />
        <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
          <span className="font-semibold text-gray-400 uppercase">DEVELOPER LINKS</span>
          <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
            <a href="https://github.com/emilkovacevic/ResellIt" target="_blank" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
              <div className="flex gap-4 items-center text-2xl">
                <AiFillGithub size={50} /> Github Code
              </div>
            </a>
            <a href="https://emilthedev.com/" target="_blank" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
              <div className="flex gap-4 items-center text-2xl">
                <AiOutlineOneToOne size={50} /> My Portfolio
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}