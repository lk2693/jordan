export default function Loading() {
  return (
    <div className="min-h-screen">
      {/* Hero skeleton */}
      <div className="bg-[#152852] pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl space-y-4 animate-pulse">
            <div className="h-8 bg-white/10 rounded-full w-48" />
            <div className="h-14 bg-white/10 rounded-xl w-full max-w-lg" />
            <div className="h-14 bg-white/10 rounded-xl w-3/4" />
            <div className="h-6 bg-white/8 rounded-lg w-full max-w-md mt-4" />
            <div className="h-12 bg-amber-500/20 rounded-xl w-56 mt-6" />
          </div>
        </div>
      </div>
      {/* Content skeleton */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-6 animate-pulse">
            <div className="h-8 bg-slate-100 rounded-xl w-64 mx-auto" />
            <div className="h-5 bg-slate-100 rounded-lg w-96 mx-auto" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-slate-50 rounded-2xl p-6 h-48 border border-slate-100" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
