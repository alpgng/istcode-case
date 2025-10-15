export default function trainband() {
  return (
    <div className="w-full bg-[var(--white)]">
    <div className="w-full px-4 py-6 bg-[var(--white)]">
      {/* Mobile) */}
      <h1 className="font-extrabold leading-tight block sm:hidden">
        <div className="text-[4vh] text-black">TRAIN HARD.</div>
        <div className="text-[4vh] text-[var(--primary)] mt-2">LIVE BETTER</div>
      </h1>

      {/* Tablet */}
      <h1 className="font-bold leading-tight tracking-tight hidden sm:block lg:hidden container-tablet">
        <span className="text-[4.5vh] text-black inline-block mr-2">TRAIN HARD.</span>
        <span className="text-[4.5vh] text-[var(--primary)] inline-block">LIVE BETTER</span>
      </h1>

      {/* Desktop  */}
      <h1 className="font-bold leading-normal hidden tracking-tight lg:block container-desktop">
        <span className="text-[8vh] text-black inline-block mr-2">
          TRAIN HARD.
        </span>
        <span className="text-[8vh] text-[var(--primary)] inline-block">
          LIVE BETTER
        </span>
      </h1>
    </div>
    </div>
  );
}
