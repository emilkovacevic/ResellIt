const Search = () => {
  return (
    <form className="inline-flex justify-between items-center py-1 px-2 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
      <label
        htmlFor="search"
        className="text-xs bg-primary rounded-full text-primary-foreground px-4 py-1.5 mr-3"
      >
        Search
      </label>
      <input
        id="search"
        className="text-sm font-medium max-w-80 p-2"
        placeholder="Search anything..."
      />
      <svg
        className="ml-4 w-5 h-5"
        fill="green"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        ></path>
      </svg>
    </form>
  )
}

export default Search
