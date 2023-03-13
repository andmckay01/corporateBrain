import React from 'react';

const Response = ({ handleSubmit }) => {
    return (
    <main>
        <div className="landing container flex items-center p-4 mx-auto h-screen justify-center">

        <form className="flex w-3/4 sm:w-3/5 md:w-3/5 lg:w-1/2 xl:w-2/5 h-2/5 mb-5 items-end"
        onSubmit={handleSubmit} htmlFor="search">   

            <label htmlFor="search" className="sr-only">Search</label>

            <div className="w-full h-full relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                </div>
                <input type="text"
                id="search"
                name="search"
                className="h-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block 
                w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                required></input>
            </div>

            <button type="submit" className="h-min p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Ask Again
            </button>
        </form>

        </div>
    </main>
    );
};

export default Response;

/*
responseBox will want to be called with the reponse of the openai stuff
our index.js will control the transition between the search and the response

features of response:
1. bigger box (overflow will scroll)
2. button changes from blue submit to yellow (ask another question)
3. 


*/