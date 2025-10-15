import Link from 'next/link';

export default function Spot() {
    return (
        <section className="w-full bg-[#8a8aff]">
            {/* Mobile View */}
            <div className="block sm:hidden py-12 px-4">
                <div className="container-mobile text-center">
                    <p className="text-[2vh] font-bold mb-3 text-black uppercase">WHAT WE BELIEVE IN</p>
                    
                    <h2 className="text-[4vh] font-extrabold mb-6 text-black">
                        JOIN THE PRIMAL TRIBE TODAY!
                    </h2>
                    
                    <div className="mt-6">
                        <Link 
                            href="/reserve" 
                            className="bg-white text-black py-3 px-6 font-bold text-[2vh] rounded-md hover:bg-[#f0f0f0] transition-colors uppercase"
                        >
                            RESERVE YOUR SPOT
                        </Link>
                    </div>
                </div>
            </div>

            {/* Tablet View */}
            <div className="hidden sm:block md:hidden py-14">
                <div className="container-tablet text-center">
                    <p className="text-[2vh] font-bold mb-2 text-black uppercase">WHAT WE BELIEVE IN</p>
                    
                    <h2 className="text-[3vh] font-bold mb-8 text-black">
                        JOIN THE PRIMAL TRIBE TODAY!
                    </h2>
                    
                    <div className="mt-4">
                        <Link 
                            href="/reserve" 
                            className="bg-white text-black py-3 px-8 font-bold text-[2vh] rounded-md hover:bg-[#f0f0f0] transition-colors uppercase border border-black"
                        >
                            RESERVE YOUR SPOT
                        </Link>
                    </div>
                </div>
            </div>

            {/* Desktop View */}
            <div className="hidden md:block py-36">
                <div className="container-desktop text-center">
                    <p className="text-[2vh] font-bold mb-3 text-black uppercase">WHAT WE BELIEVE IN</p>
                    
                    <h2 className="text-[6vh] font-bold mb-8 text-black">
                        JOIN THE PRIMAL TRIBE TODAY!
                    </h2>
                    
                    <div className="mt-6">
                        <Link 
                            href="/reserve" 
                            className="bg-white text-black py-4 px-10 font-normal text-[2vh] rounded-md hover:bg-[var(--black)] hover:text-white"
                        >
                            RESERVE YOUR SPOT
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}