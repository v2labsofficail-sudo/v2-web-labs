import React from "react";

export default function Loading() {
  return (
    <div className="w-full bg-[#fafbfc] min-h-[80vh] overflow-hidden select-none relative">
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#1161ed]/[0.02] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-[#3b82f6]/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1100px] mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="col-span-1 lg:col-span-6 flex flex-col items-start">
            <div className="w-32 h-6 bg-slate-200/70 rounded-full mb-6 animate-pulse" />
            <div className="w-[85%] h-12 bg-slate-200/70 rounded-2xl mb-4 animate-pulse" />
            <div className="w-[60%] h-12 bg-slate-200/70 rounded-2xl mb-8 animate-pulse" />
            <div className="w-[95%] h-4 bg-slate-200/70 rounded-lg mb-2.5 animate-pulse" />
            <div className="w-[88%] h-4 bg-slate-200/70 rounded-lg mb-2.5 animate-pulse" />
            <div className="w-[75%] h-4 bg-slate-200/70 rounded-lg mb-8 animate-pulse" />
            <div className="flex gap-4 items-center">
              <div className="w-40 h-12 bg-slate-200/70 rounded-full animate-pulse" />
              <div className="w-32 h-12 bg-slate-200/70 rounded-full animate-pulse" />
            </div>
          </div>

          <div className="col-span-1 lg:col-span-6 flex items-center justify-center">
            <div className="w-full max-w-[480px] aspect-[4/3] rounded-[32px] bg-slate-200/70 border border-slate-200/20 shadow-[0_8px_30px_rgba(0,0,0,0.02)] animate-pulse" />
          </div>
        </div>

        <div className="w-full border-t border-slate-200/30 my-16 md:my-24" />

        <div className="flex flex-col items-center mb-12">
          <div className="w-24 h-5 bg-slate-200/70 rounded-full mb-4 animate-pulse" />
          <div className="w-64 h-8 bg-slate-200/70 rounded-xl animate-pulse" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-[30px]">
          {Array.from({ length: 3 }).map((_, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-[24px] border border-slate-200/30 bg-white/40 backdrop-blur-xl shadow-sm min-h-[270px] sm:min-h-[290px] flex flex-col justify-between items-start"
            >
              <div className="w-full">
                <div className="w-12 h-12 rounded-xl bg-slate-200/70 border border-slate-200/20 mb-6 animate-pulse" />
                <div className="w-2/3 h-6 bg-slate-200/70 rounded-lg mb-4 animate-pulse" />
                <div className="w-full h-4 bg-slate-200/70 rounded-lg mb-2 animate-pulse" />
                <div className="w-[85%] h-4 bg-slate-200/70 rounded-lg animate-pulse" />
              </div>
              <div className="w-full pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="w-24 h-4 bg-slate-200/70 rounded-md animate-pulse" />
                <div className="w-4 h-4 bg-slate-200/70 rounded-full animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
