export type Project = {
  name: string,
  time: string,
  live?: string,
  src?: string,
  img: string,
  summary?: string
};

export const ProjectData: Project[] = [
  {
    name: "Personal Music Player",
    time: "2022 - Jul",
    live: "https://portfolio-dk21c4iy6-ianyimi.vercel.app/",
    img: "https://dqeczc7c9n9n1.cloudfront.net/images/musicP.png",
    summary: ""
  },
  {
    name: "The Station",
    time: "2022 - Apr",
    live: "https://etherrealms.org/station",
    src: "https://github.com/ianyimi/EtherRealms",
    img: "https://dqeczc7c9n9n1.cloudfront.net/images/ers.png",
    summary: ""
  },
  {
    name: "The Creature Finds Its Voice",
    time: "2021 - Dec",
    live: "https://creature.world",
    img: "https://dqeczc7c9n9n1.cloudfront.net/images/tcfiv.png",
    summary: ""
  },
  {
    name: "Chad Knight Seasons",
    time: "2021 - May",
    live: "https://muse.place/chadknight/seasons",
    img: "https://dqeczc7c9n9n1.cloudfront.net/images/mpck.png",
    summary: ""
  },
  {
    name: "SpacesVR",
    time: "2020 - Nov",
    src: "https://github.com/musehq/spacesvr",
    img: "https://dqeczc7c9n9n1.cloudfront.net/images/msvr.png",
    summary: ""
  }
];
