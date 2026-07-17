export interface Brand {
  id: string;
  name: string;
  logo: string;
  rating: number;
  bonus: string;
  url: string;
  isMobile: boolean;
  votes: number;
}

export const brands: Brand[] = [
  {
    id: "bananzia",
    name: "Bananzia",
    logo: "/brands/bananzia.svg",
    rating: 9.2,
    bonus: "300% up to 3000£ + 300FS",
    url: "https://bestcpa.online/click?o=510&a=75&aff_click_id=UK01ZZ",
    isMobile: true,
    votes: 1340,
  },
  {
    id: "spinyrush",
    name: "SpinyRush",
    logo: "/brands/SPINY.svg",
    rating: 9.0,
    bonus: "725% up to 6250£ + 425FS",
    url: "https://spinyrush777.net/dqrrw9cnz?subid=SpinyRush-UK01ZZ&visit_id=",
    isMobile: true,
    votes: 1105,
  },
  
  {
    id: "SpinShark",
    name: "SpinShark",
    logo: "/brands/spinshark.webp",
    rating: 9.0,
    bonus: "1500£ BONUS + 300FS",
    url: "https://spinshark.site/acwxzoyqaa?subid=SpinShark-UK01ZZ&visit_id=",
    isMobile: true,
    votes: 1105,
  },
  
  //  {
  //   id: "daytonaspin",
  //   name: "DaytonaSpin",
  //   logo: "/brands/daytonaspin.svg",
  //   rating: 9.2,
  //   bonus: "255% Up To 4500£ + 255FS",
  //   url: "https://bestcpa.online/click?o=380&a=75&aff_click_id=UK01ZZ",
  //   isMobile: true,
  //   votes: 1340,
  // },

  
 
  {
    id: "grosvenor-casinos",
    name: "Grosvenor",
    logo: "/brands/grosvenor.png",
    rating: 10.0,
    bonus: "Play with £40 when you deposit £20",
    url: "https://www.grosvenorcasinos.com/?SUB_ID=NR_79673fd31e5e41a9b31d6c394ea4d&var1=KAR92895826&AFF_ID=10008008011&pid=2340004&utm_source=10008008011&utm_medium=affiliate&utm_channel=affiliate&clickid=",
    isMobile: false,
    votes: 4089,
  }
];
