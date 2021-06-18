import Image from "next/image";
import HeaderItem from "./headeritem";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon
} from "@heroicons/react/outline"

function Header() {
  return (
    <header>
      
      <div className="">
        <HeaderItem title='HOME' Icon={HomeIcon} />
      </div>
      <Image
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
        alt=""
        className="object-contain"
      />
    </header>
  );
}

export default Header;
