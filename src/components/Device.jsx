import Sticker from "./Sticker";

export default function Device() {
  return (
    <div className="w-96 flex flex-col border-4 border-slate-300 rounded-lg bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 shadow-lg">
      <div className="w-full pt-5 p-3 bg-slate-100 rounded-md border-2 border-slate-200 z-10">
        <div className="grid grid-cols-4 w-full gap-2">
          <div className="w-full py-2 col-span-4 flex justify-center">
            <Sticker />
          </div>
        </div>
      </div>
      <div className="h-10 bg-transparent rounded-b-lg transform -translate-y-2 bg-gradient-to-t from-transparent to-black opacity-5" />
    </div>
  );
}
