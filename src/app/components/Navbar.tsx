"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`w-full ${isMenuOpen ? 'bg-white' : 'bg-[var(--secondary)]'} relative`}>
            
            <div className={`container-desktop border-y border-black px-4 py-4 ${isMenuOpen ? 'bg-white' : ''}`}>
                <div className="flex items-center justify-between">
                    
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center">
                            <Image 
                                src="/Vector.png" 
                                alt="Primal Training Logo" 
                                width={43} 
                                height={25} 
                                className="h-auto w-auto"
                            />
                        </Link>
                        <div className="text-[2.5vh] text-black font-bold ml-2">
                            PrimalTraining
                        </div>
                    </div>

                    {/* Menu Toggle Button - Mobile */}
                    <button 
                        className="block md:hidden" 
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        ) : (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 5V19M5 12H19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        )}
                    </button>

                    
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="Navlink text-black hover:opacity-50  ">
                            HOME
                        </Link>
                        <Link href="/about" className="Navlink text-black  hover:opacity-50">
                            ABOUT
                        </Link>
                        <Link href="/reserve" className="Button text-black Button-primary hover:bg-[var(--black)] hover:text-white">
                            RESERVE YOUR SPOT
                        </Link>
                    </div>
                </div>
            </div>
            
            
            {isMenuOpen && (
                <div className="md:hidden bg-white w-full absolute left-0 right-0 z-50 ">
                    <nav className="flex flex-col w-full">
                        <Link href="/" className="Navlink text-black p-4 border-black border-x  hover:text-[var(--primary)] w-full text-center">
                            HOME
                        </Link>
                        <Link href="/about" className="Navlink text-black p-4 border-black border-x  border-y hover:text-[var(--primary)] w-full text-center">
                            ABOUT
                        </Link>
                        <Link href="/reserve" className="Navlink text-black p-4 border-black border-x border-b bg-[var(--primary)] hover:text-[var(--primary)] w-full text-center">
                            RESERVE YOUR SPOT
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}