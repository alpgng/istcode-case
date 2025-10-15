import Image from 'next/image';
import Link from  'next/link';

export default function CommunityBand() {
    return (
        <div>
            <section className="w-full bg-[var(--white)]">
           <div className="container-mobile sm:container-tablet md:container-desktop bg-[var(--white)] px-4 py-6">
                {/* Mobile */}
                <h1 className="text-[3vh] font-bold leading-tight sm:hidden">
                    <div className="text-black">JOIN THE</div>
                    <div className="text-[var(--primary)]">COMMUNITY</div>
                </h1>
                
                {/* Tablet  */}
                <h1 className="text-[4vh] font-bold leading-tight hidden sm:block md:hidden">
                    <span className="text-black">JOIN THE </span>
                    <span className="text-[var(--primary)]">COMMUNITY</span>
                </h1>
                
                {/* Desktop  */}
                <h1 className="text-[5vh] font-bold leading-tight hidden md:block">
                    <span className="text-black">JOIN THE </span>
                    <span className="text-[var(--primary)]">COMMUNITY</span>
                </h1>
            </div>
            </section>        
        </div>
    );
}