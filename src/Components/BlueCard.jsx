

export const BlueCard = (
    {
        title,
        amount,
        orderCount,
        Date
    }
) => {
    return (
        <div>
        <div className="bg-blue-900 rounded shadow-lg p-4 text-white">
            <div className="flex text-gray-700 pt-1.5 pb-1.5 gap-2 items-center text-white">
                <div>
                    {title} 
                </div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>
                </div>
            </div>
            <div className="flex justify-between pb-1.5 pt-2.5 items-center">
                <div className="font-semibold text-3xl">
                    {amount}
                </div>
                <div>
                {orderCount? <div className="flex cursor-pointer underline text-white">
                        <div className="">
                            {orderCount} orders
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                        </div> : null}
                </div>
            </div>
        </div>
        </div>

    )
}