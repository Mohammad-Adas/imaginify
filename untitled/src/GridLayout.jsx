
const GridLayout = () => {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-8">
            <div className="relative">
                {/* Connector lines */}
                <div className="absolute top-1/2 left-[110px] w-[220px] h-[1px] bg-gray-800"></div>
                <div className="absolute top-[55px] left-[180px] h-[35px] w-[1px] bg-gray-800"></div>
                <div className="absolute bottom-[55px] left-[180px] h-[35px] w-[1px] bg-gray-800"></div>

                {/* Grid container */}
                <div className="grid grid-cols-5 gap-0">
                    {/* Top row - A B C D E */}
                    <div className="w-11 h-11 rounded-xl border-[0.5px] border-gray-800 bg-gray-900 flex items-center justify-center text-gray-600">A</div>
                    <div className="w-11 h-11 rounded-xl border-[0.5px] border-gray-800 bg-gray-900 flex items-center justify-center text-gray-600">B</div>
                    <div className="w-11 h-11 rounded-xl bg-gray-800 border-[0.5px] border-gray-700 flex items-center justify-center relative">
                        {/* Inner squares icon */}
                        <div className="relative w-4 h-4">
                            <div className="absolute w-2 h-2 bg-white rounded-sm"></div>
                            <div className="absolute w-2 h-2 bg-white rounded-sm right-0"></div>
                            <div className="absolute w-2 h-2 bg-white rounded-sm bottom-0"></div>
                            <div className="absolute w-2 h-2 bg-white rounded-sm bottom-0 right-0"></div>
                        </div>
                        {/* Top connector dot */}
                        <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gray-700 rounded-full"></div>
                        <div className="absolute -top-6 text-gray-600">C</div>
                    </div>
                    <div className="w-11 h-11 rounded-xl border-[0.5px] border-gray-800 bg-gray-900 flex items-center justify-center text-gray-600">D</div>
                    <div className="w-14 h-11 rounded-xl border-[0.5px] border-gray-800 bg-gray-900 -ml-3 flex items-center justify-center text-gray-600">E</div>

                    {/* Middle row - F G H I J */}
                    <div className="w-20 h-11 rounded-xl border-[0.5px] border-gray-800 bg-gray-900 flex items-center justify-center text-gray-600">F</div>
                    <div className="w-11 h-11 rounded-xl border-[0.5px] border-gray-800 bg-gray-900 -ml-9 flex items-center justify-center text-gray-600">G</div>
                    <div className="w-11 h-11 rounded-xl border-[0.5px] border-gray-800 bg-gray-900 flex items-center justify-center text-gray-600">H</div>
                    <div className="w-11 h-11 rounded-xl border-[0.5px] border-gray-800 bg-gray-900 flex items-center justify-center text-gray-600">I</div>
                    <div className="w-11 h-11 rounded-xl border-[0.5px] border-gray-800 bg-gray-900 -ml-3 flex items-center justify-center text-gray-600">J</div>

                    {/* Bottom row - K L M */}
                    <div className="w-16 h-11 rounded-xl border-[0.5px] border-gray-800 bg-gray-900 flex items-center justify-center text-gray-600">K</div>
                    <div className="col-span-3 w-[142px] h-11 rounded-xl border-[0.5px] border-gray-800 bg-gray-900 relative -ml-5 flex items-center justify-center text-gray-600">
                        L
                        {/* Bottom connector dot */}
                        <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gray-700 rounded-full"></div>
                    </div>
                    <div className="w-11 h-11 rounded-xl border-[0.5px] border-gray-800 bg-gray-900 -ml-3 flex items-center justify-center text-gray-600">M</div>
                </div>
            </div>
        </div>
    );
};

export default GridLayout;