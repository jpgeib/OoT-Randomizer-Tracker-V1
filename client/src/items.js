import DekuSticks from "./assets/images/first-row/Deku-Stick-3D.png";
import DekuNuts from "./assets/images/first-row/Deku-Nut-3D.png";
import BombBag from "./assets/images/first-row/Bomb-Bag-3D.png";
import FairyBow from "./assets/images/first-row/Bow-3D.png";
import FireArrows from "./assets/images/first-row/Arrow-Fire-3D.png";
import DinsFire from "./assets/images/first-row/Dins-Fire-3D.png";
import KokiriSword from "./assets/images/first-row/Kokiri-Sword-3D.png";
import MasterSword from "./assets/images/first-row/Master-Sword-3D.png";
import BigGoronSword from "./assets/images/second-row/Biggorons-Sword.png";
import FairySlingshot from "./assets/images/second-row/Slingshot-3D.png";
import FairyOcarina from "./assets/images/second-row/Fairy-Ocarina-3D.png";
import Bombchus from "./assets/images/second-row/Bombchu-3D.png";
import HookShot from "./assets/images/second-row/Hookshot-3D.png";
import IceArrows from "./assets/images/second-row/Arrow-Ice-3D.png";
import FaroresWind from "./assets/images/second-row/Farores-Wind-3D.png";
import DekuShield from "./assets/images/second-row/Deku-Shield-3D.png";

const itemCounterStyle = {
    color: "white",
    fontSize: "12px",
    position: "absolute",
    top: "45%",
    left: "65%",
    transform: "translate(-25%, -55%)"
}

export const items = [
    { id: 1, name: "Deku Sticks", hasItem: null, image: DekuSticks, quantity: 0, minQuantity: 0, maxQuantity: 30, style: itemCounterStyle },
    { id: 2, name: "Deku Nuts", hasItem: null, image: DekuNuts, quantity: 0, minQuantity: 0, maxQuantity: 40, style: itemCounterStyle },
    { id: 3, name: "Bomb Bag", hasItem: null, image: BombBag, quantity: 0, minQuantity: 0, maxQuantity: 40, style: itemCounterStyle },
    { id: 4, name: "Fairy Bow", hasItem: null, image: FairyBow, quantity: 0, minQuantity: 0, maxQuantity: 50, style: itemCounterStyle },
    { id: 5, name: "Fire Arrows", hasItem: null, image: FireArrows },
    { id: 6, name: "Dins Fire", hasItem: null, image: DinsFire },
    { id: 7, name: "Kokiri Sword", hasItem: null, image: KokiriSword },
    { id: 8, name: "Master Sword", hasItem: null, image: MasterSword },
    { id: 9, name: "Big Goron Sword", hasItem: null, image: BigGoronSword },
    { id: 10, name: "Fairy Slingshot", hasItem: null, image: FairySlingshot, quantity: 0, minQuantity: 0, maxQuantity: 50, style: itemCounterStyle },
    { id: 11, name: "Fairy Ocarina", hasItem: null, hasOcarinaOfTime: null, image: FairyOcarina },
    { id: 12, name: "Bomchus", hasItem: null, image: Bombchus },
    { id: 13, name: "Hookshot", hasItem: null, hasLongShot: null, image: HookShot },
    { id: 14, name: "Ice Arrows", hasItem: null, image: IceArrows },
    { id: 15, name: "Farore's Wind", hasItem: null, image: FaroresWind },
    { id: 16, name: "Deku Shield", hasItem: null, image: DekuShield }
];
