export default function Dev3DCore() {
    return (
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex items-center justify-center animate-float">
            {/* Outer Glow */}
            <div className="absolute inset-0 bg-[#982598]/10 rounded-full blur-[60px]" />

            {/* 3D Stacked Layers representing Web App Architecture */}
            <div
                className="relative w-[60%] h-[60%] flex items-center justify-center"
                style={{
                    transformStyle: 'preserve-3d',
                    transform: 'rotateX(55deg) rotateZ(-45deg)',
                    animation: 'spin-slow 25s linear infinite'
                }}
            >
                {/* Bottom Layer: Database */}
                <div
                    className="absolute inset-0 border-[3px] border-[#1c1f4f] bg-[#1c1f4f]/90 rounded-2xl shadow-[0_0_30px_rgba(28,31,79,0.8)] flex items-center justify-center"
                    style={{ transform: 'translateZ(-80px)' }}
                >
                    <div className="grid grid-cols-4 grid-rows-4 gap-2 w-full h-full p-4 opacity-50">
                        {Array.from({ length: 16 }).map((_, i) => (
                            <div key={i} className="bg-[#982598] rounded-sm transform scale-75 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                        ))}
                    </div>
                </div>

                {/* Middle Layer: API / Backend */}
                <div
                    className="absolute inset-0 border-2 border-[#982598]/80 bg-[#982598]/20 rounded-2xl shadow-[0_0_40px_rgba(152,37,152,0.4)] backdrop-blur-sm flex flex-col justify-between p-4"
                    style={{ transform: 'translateZ(0px)' }}
                >
                    <div className="w-full flex justify-around">
                        <div className="w-2 h-8 bg-white/60 rounded-full animate-float"></div>
                        <div className="w-2 h-8 bg-white/60 rounded-full animate-float" style={{ animationDelay: '0.4s' }}></div>
                        <div className="w-2 h-8 bg-white/60 rounded-full animate-float" style={{ animationDelay: '0.8s' }}></div>
                    </div>
                    <div className="w-full h-1/2 border-t-2 border-dashed border-[#e491c9]/50 flex items-end justify-center">
                        <div className="w-16 h-16 rounded-full border-4 border-[#e491c9] border-t-transparent animate-spin-slow"></div>
                    </div>
                </div>

                {/* Top Layer: Frontend UI */}
                <div
                    className="absolute inset-0 border-2 border-[#e491c9] bg-[#e491c9]/10 rounded-2xl shadow-[0_0_60px_rgba(228,145,201,0.5)] backdrop-blur-md flex flex-col overflow-hidden"
                    style={{ transform: 'translateZ(80px)' }}
                >
                    {/* Mock Browser Header */}
                    <div className="h-6 w-full bg-[#1c1f4f]/80 flex items-center px-3 gap-1 border-b border-[#e491c9]/30">
                        <div className="w-2 h-2 rounded-full bg-[#982598]"></div>
                        <div className="w-2 h-2 rounded-full bg-[#e491c9]"></div>
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                    {/* Mock UI Content */}
                    <div className="flex-1 p-3 flex flex-col gap-2">
                        <div className="w-1/2 h-4 bg-white/80 rounded animate-pulse"></div>
                        <div className="flex gap-2 flex-1 mt-2">
                            <div className="w-1/3 h-full border border-white/40 rounded bg-white/10"></div>
                            <div className="w-2/3 h-full border border-white/40 rounded bg-white/10 flex flex-col p-2 gap-2">
                                <div className="w-full h-2 bg-white/30 rounded"></div>
                                <div className="w-full h-2 bg-white/30 rounded"></div>
                                <div className="w-3/4 h-2 bg-white/30 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating Connection Nodes */}
                <div className="absolute w-2 h-[200px] bg-gradient-to-b from-[#e491c9] to-transparent shadow-[0_0_15px_#e491c9] rounded-full" style={{ transform: 'translateZ(0px) rotateX(90deg) translateZ(50px) translateY(50px)' }} />
                <div className="absolute w-2 h-[200px] bg-gradient-to-b from-white to-transparent shadow-[0_0_15px_#fff] rounded-full" style={{ transform: 'translateZ(0px) rotateX(90deg) translateZ(-50px) translateY(-50px)' }} />
            </div>
        </div>
    );
}
