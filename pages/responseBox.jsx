import React from 'react';

const Response = ({ responseData }) => {
    return (
        <div>
         {responseData ? (
            <main>
                <div className="landing container flex items-center p-4 mx-auto h-screen justify-center">

                    <div className="flex flex-col w-3/4 sm:w-4/5 md:w-3/5 lg:w-1/2 xl:w-2/5 h-2/5 mb-5">

                        <div className="h-1/5 bg-gray-700 border border-gray-600 text-sm rounded-lg block 
                        w-full p-2.5 mb-2 overflow-scroll text-base">
                            <p className="mb-3 font-normal text-white">What is the point value for an MPU?</p>
                        </div>

                        <div className="h-3/5 bg-gray-700 border border-gray-600 text-sm rounded-lg block 
                        w-full p-2.5 mb-2 overflow-scroll text-base">
                            <p className="mb-3 font-normal text-white">
                                The point value for an MPU is 8 points, assuming it 
                                was installed before or during the install the workorder was marked as being installed by the branch
                            </p>
                        </div>

                        <div className="flex justify-left">
                        <button type="submit" className="mt-auto h-min p-2.5 mr-2.5 text-sm font-medium text-white bg-blue-800 
                        rounded-lg border border-blue-800 hover:bg-blue-900 focus:ring-1 focus:outline-none focus:ring-blue-300">
                            Ask Another
                        </button>
                        <button type="submit" className="mt-auto h-min p-2.5 text-sm font-medium text-white bg-slate-400 
                        rounded-lg border border-slate-400 hover:bg-slate-500 focus:ring-1 focus:outline-none focus:ring-blue-300">
                            Give feedback
                        </button>
                    </div>

                    </div>

                </div>
            </main>
         ) : null}
            </div>
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