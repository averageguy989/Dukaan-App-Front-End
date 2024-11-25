

export const TableTop = () => {
    return(
    
    <div className="flex flex-row items-center justify-between p-4">
        <div className="flex flex-row items-center gap-2 border border-gray-300 p-2 rounded-md w-1/3">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </div>
            <div className="flex-1">
                <input type="text" placeholder="Order ID or Transaction ID" className="w-full text-gray-700 placeholder-gray-500 focus:outline-none"/>
            </div>
        </div>
        <div className="flex flex-row items-center gap-2 ">
            <div className="flex flex-row items-center gap-2 border border-gray-300 p-2 rounded-md">
                <div>
                    Sort
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                    </svg>
                </div>
            </div>
            <div className="flex flex-row items-center gap-2 border border-gray-300 p-2 rounded-md">
                <div>
                    Download
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                </div>
            </div>
        </div>

    </div>)
}
