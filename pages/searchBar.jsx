import React from 'react';

const Search = ({ handleSubmit }) => {
    return (
    <main>
        <div className="landing container flex items-center p-4 mx-auto h-screen justify-center">

        <form className="flex w-3/4 sm:w-3/5 md:w-3/5 lg:w-1/2 xl:w-2/5 mb-5"
        action="" onSubmit={handleSubmit} htmlFor="search">   

            <label htmlFor="search" className="sr-only">Search</label>

            <div className="w-full relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" 
                    viewBox="0 0 20 20" 
                    xmlns="http://www.w3.org/2000/svg"><path 
                    fillRule="evenodd" 
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" 
                    clipRule="evenodd"></path></svg>
                </div>
                <input type="text"
                id="search"
                name="search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block 
                w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder="Ask a question"
                required></input>
            </div>

            <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                submit
            </button>
        </form>

        </div>
    </main>
    );
};

export default Search;