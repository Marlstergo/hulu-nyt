import Image from "next/image";
import HeaderItem from "./headeritem";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header>
      <div className="flex sm:flex-row m-5 justify-between items-center h-auto flex-col">
        <div className="flex flex-grow max-w-2xl">
          <HeaderItem title="HOME" Icon={HomeIcon} />
          <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
          <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
          <HeaderItem title="COLLECTIOINS" Icon={CollectionIcon} />
          <HeaderItem title="SEACRH" Icon={SearchIcon} />
          <HeaderItem title="ACCOUNT" Icon={UserIcon} />
        </div>
        <div className="">
          <Image
            src="https://links.papareact.com/ua6"
            width={200}
            height={100}
            alt=""
            className="object-contain"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
