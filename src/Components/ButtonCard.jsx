

export const ButtonCard = () => {
    return(
        <div className="flex flex-row items-center p-4 sm:pl-64 gap-2">
            <button className="rounded-2xl text-sm bg-gray-200 text-gray-700 pr-4 pl-4 pt-1.5 pb-1.5">
                Payout (22)
            </button>
            <button className="rounded-2xl text-sm bg-blue-900 text-white pr-4 pl-4 pt-1.5 pb-1.5">
                Refund (6)
            </button>
        </div>
    )
}