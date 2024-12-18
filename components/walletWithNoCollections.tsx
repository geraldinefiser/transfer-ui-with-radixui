import { HomeIcon } from "@heroicons/react/24/outline";
import Nav from "./nav";

export default function WalletWithNoCollections() {
  return (
    <div>
      <Nav />
      <div className="flex flex-row items-start gap-10 px-10">
        <div className="flex flex-col w-[300px]">
          <div className="py-3 px-3 mr-3 mb-3 flex-auto  flex flex-row items-center gap-2 border border-gray-300 rounded">
            <HomeIcon className="w-[30px] h-[30px]" />
            <p>Home</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="bg-orange-100/50 rounded w-full p-10 text-orange-500 ">
            <p className="font-bold mb-3">No NFTs to transfer in this wallet</p>
            <p>Connect your another wallet</p>
          </div>
        </div>
      </div>
    </div>
  );
}
