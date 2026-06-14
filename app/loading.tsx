export default function Loading() {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-[#3d1d1a] text-white">
      <div className="flex flex-col items-center gap-8">
        <div className="flex items-center">
          <span className="text-5xl font-serif font-bold tracking-tighter">
            DCTM
          </span>
          <span className="ml-3 border-l border-white/25 pl-3 leading-[0.85]">
            <span className="block text-[10px] font-medium uppercase tracking-[0.22em] text-white/75">
              Law
            </span>
            <span className="block text-[10px] font-medium uppercase tracking-[0.22em] text-white/75">
              Group
            </span>
          </span>
        </div>

        <div className="h-[1px] w-56 overflow-hidden bg-white/15">
          <div className="loader-line h-full w-1/2 bg-white" />
        </div>

        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/45">
          იტვირთება
        </p>
      </div>
    </div>
  );
}
