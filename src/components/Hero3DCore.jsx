import '../App.css';

export default function Hero3DCore() {
    return (
        <div className="relative w-[340px] h-[340px] md:w-[450px] md:h-[450px] flex items-center justify-center animate-float">
            {/* Outer Glow */}
            <div className="absolute inset-0 bg-[#e491c9]/5 rounded-full blur-[80px]"></div>

            {/* Outer Grid Sphere */}
            <div
                className="absolute w-full h-full rounded-full border border-[#982598]/30 shadow-[0_0_40px_rgba(152,37,152,0.2)]"
                style={{ animation: 'spin-slow 20s linear infinite' }}
            >
                <div className="w-full h-[1px] bg-[#982598]/20 absolute top-1/2 left-0 transform -translate-y-1/2" />
                <div className="w-[1px] h-full bg-[#982598]/20 absolute top-0 left-1/2 transform -translate-x-1/2" />
            </div>

            {/* Middle Angled Ring */}
            <div
                className="absolute w-[80%] h-[80%] rounded-full border-t-[3px] border-b-[3px] border-[#e491c9]/80 shadow-[0_0_50px_rgba(228,145,201,0.4)]"
                style={{ animation: 'spin-reverse-slow 12s linear infinite' }}
            />

            {/* Inner Fast Ring */}
            <div
                className="absolute w-[60%] h-[60%] rounded-full border-r-[4px] border-l-[4px] border-white shadow-[0_0_20px_#fff]"
                style={{ animation: 'spin-slow 6s linear infinite' }}
            />

            {/* Core Energy Sphere */}
            <div className="absolute w-[35%] h-[35%] bg-gradient-to-tr from-[#1c1f4f] via-[#982598] to-[#e491c9] rounded-full blur-[2px] shadow-[0_0_80px_#e491c9] animate-pulse">
                {/* Core highlight */}
                <div className="absolute top-[20%] right-[20%] w-[30%] h-[30%] bg-white rounded-full blur-[4px]"></div>
            </div>

            {/* Floating Nano Particles */}
            <div className="absolute w-4 h-4 bg-white rounded-sm top-[10%] left-[20%] shadow-[0_0_10px_#fff] animate-float" style={{ animationDelay: '0.5s', animationDuration: '4s' }}></div>
            <div className="absolute w-3 h-3 bg-[#e491c9] rounded-full bottom-[15%] right-[15%] shadow-[0_0_15px_#e491c9] animate-float" style={{ animationDelay: '1.5s', animationDuration: '5s' }}></div>
            <div className="absolute w-5 h-5 border-2 border-[#982598] rotate-45 top-[70%] left-[10%] animate-float" style={{ animationDelay: '2.5s', animationDuration: '6s' }}></div>
        </div>
    );
}
