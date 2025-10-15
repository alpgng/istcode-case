import Image from 'next/image';


export default function Footer() {
    return (
        <footer className="w-full bg-[#e8ecff] py-12">
            
                {/* Desktop View  */}
                <div className="hidden md:flex container-desktop flex-col">
                    
                    <div className="flex justify-between w-full mb-16">
                        <div className="relative w-[229px] h-[139px]">
                            <Image 
                                src="/Vector.png" 
                                alt="Primal Training Logo" 
                                width={229} 
                                height={139}
                                className="object-contain"
                            />
                        </div>
                        <h2 className="text-[4vh] text-black font-bold">PrimalTraining</h2>
                    </div>
                    
                    
                    <div className="flex justify-between w-full">
                        
                        <div>
                            <h3 className="text-black font-extrabold mb-4 uppercase">CONTACT</h3>
                            <p className="text-black font-bold mb-1">Email: hello@figma.com</p>
                            <p className="text-black font-bold">Phone: (203) 555-5555</p>
                        </div>

                        
                        <div>
                            <h3 className="text-black font-extrabold mb-4 uppercase">OPENING HOURS</h3>
                            <div className="flex">
                                <div className="mr-8">
                                    <p className="text-black font-bold mb-1">MON – FRI</p>
                                    <p className="text-black font-bold mb-1">SATURDAYS</p>
                                    <p className="text-black font-bold mb-1">SUNDAYS</p>
                                    <p className="text-black font-bold">HOLIDAYS</p>
                                </div>
                                <div>
                                    <p className="text-black font-bold mb-1">5:00 – 23:00</p>
                                    <p className="text-black font-bold mb-1">8:00 – 16:00</p>
                                    <p className="text-black font-bold mb-1">8:00 – 13:00</p>
                                    <p className="text-black font-bold">8:00 – 16:00</p>
                                </div>
                            </div>
                        </div>

                        
                        <div>
                            <h3 className="text-black font-extrabold mb-4 uppercase">SOCIAL</h3>
                            <p className="text-black font-bold mb-1">Instagram</p>
                            <p className="text-black font-bold mb-1">X</p>
                            <p className="text-black font-bold mb-1">LinkedIn</p>
                            <p className="text-black font-bold">Spotify</p>
                        </div>
                    </div>
                </div>

                {/* Tablet View  */}
                <div className="hidden sm:flex md:hidden flex-col">
                    <div className="flex justify-center mb-8">
                        <div className="relative w-[80px] h-[80px]">
                            <Image 
                                src="/Vector.png" 
                                alt="Primal Training Logo" 
                                width={80} 
                                height={80}
                                className="object-contain"
                            />
                        </div>
                        <h2 className="text-[4vh] font-bold ml-4">PrimalTraining</h2>
                    </div>
                    
                    <div className="flex justify-between">
                        <div>
                            <h3 className="text-black font-extrabold mb-4 uppercase">CONTACT</h3>
                            <p className="text-black mb-1">Email: hello@figma.com</p>
                            <p className="text-black">Phone: (203) 555-5555</p>
                        </div>

                        <div>
                            <h3 className="text-black font-extrabold mb-4 uppercase">OPENING HOURS</h3>
                            <div className="flex">
                                <div className="mr-4">
                                    <p className="text-black font-bold mb-1">MON – FRI</p>
                                    <p className="text-black font-bold mb-1">SATURDAYS</p>
                                    <p className="text-black font-bold mb-1">SUNDAYS</p>
                                    <p className="text-black font-bold">HOLIDAYS</p>
                                </div>
                                <div>
                                    <p className="text-black font-bold mb-1">5:00 – 23:00</p>
                                    <p className="text-black font-bold mb-1">8:00 – 16:00</p>
                                    <p className="text-black font-bold mb-1">8:00 – 13:00</p>
                                    <p className="text-black font-bold">8:00 – 16:00</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-black font-extrabold mb-4 uppercase">SOCIAL</h3>
                            <p className="text-black font-bold mb-1">Instagram</p>
                            <p className="text-black font-bold mb-1">X</p>
                            <p className="text-black font-bold mb-1">LinkedIn</p>
                            <p className="text-black font-bold">Spotify</p>
                        </div>
                    </div>
                </div>

                {/* Mobile View  */}
                <div className="flex flex-col p-2 sm:hidden">
                    <div className="flex flex-col items-start mb-8">
                        <div className="flex items-center mb-4">
                            <div className="relative w-[150px] h-[80px]">
                                <Image 
                                    src="/Vector.png" 
                                    alt="Primal Training Logo" 
                                    width={150} 
                                    height={89}
                                    className="object-contain"
                                />
                            </div>
                           
                        </div>
                         <h2 className="text-[6vh] font-bold text-black ">PrimalTraining</h2>
                    </div>
                   
                    <div className="mb-6">
                        <h3 className="text-[2vh] text-black font-extrabold mb-3 uppercase">CONTACT</h3>
                        <p className="text-black font-bold mb-1">Email: hello@figma.com</p>
                        <p className="text-black font-bold mb-4">Phone: (203) 555-5555</p>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-[2vh] text-black font-extrabold mb-3 uppercase">OPENING HOURS</h3>
                        <div className="flex">
                            <div className="mr-16 font-extrabold">
                                <p className="text-black font-bold mb-1">MON – FRI</p>
                                <p className="text-black font-bold mb-1">SATURDAYS</p>
                                <p className="text-black font-bold mb-1">SUNDAYS</p>
                                <p className="text-black font-bold mb-4">HOLIDAYS</p>
                            </div>
                            <div className="font-extrabold">
                                <p className="text-black font-bold mb-1">5:00 – 23:00</p>
                                <p className="text-black font-bold mb-1">8:00 – 16:00</p>
                                <p className="text-black font-bold mb-1">8:00 – 13:00</p>
                                <p className="text-black font-bold mb-4">8:00 – 16:00</p>
                            </div>
                        </div>
                    </div>

                    <div >
                        <h3 className="text-[2vh] text-black font-extrabold mb-3 uppercase">SOCIAL</h3>
                        <p className="text-black font-bold mb-1">Instagram</p>
                        <p className="text-black font-bold mb-1">X</p>
                        <p className="text-black font-bold mb-1">LinkedIn</p>
                        <p className="text-black font-bold">Spotify</p>
                    </div>
                </div>
            
        </footer>
    );
}