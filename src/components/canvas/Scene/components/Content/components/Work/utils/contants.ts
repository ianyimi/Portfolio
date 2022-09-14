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
    name: "The Station",
    time: "April 2022",
    live: "https://etherrealms.org/station",
    src: "https://github.com/ianyimi/EtherRealms",
    img: "https://dqeczc7c9n9n1.cloudfront.net/images/ers.png",
    summary: ""
  },
  {
    name: "The Creature Finds Its Voice",
    time: "December 2021",
    live: "https://creature.world",
    img: "https://dqeczc7c9n9n1.cloudfront.net/images/tcfiv.png",
    summary: ""
  },
  {
    name: "Chad Knight Seasons",
    time: "May 2021",
    live: "https://muse.place/chadknight/seasons",
    img: "https://dqeczc7c9n9n1.cloudfront.net/images/mpck.png",
    summary: ""
  },
  {
    name: "SpacesVR",
    time: "Nov 2020",
    src: "https://github.com/musehq/spacesvr",
    img: "https://dqeczc7c9n9n1.cloudfront.net/images/msvr.png",
    summary: ""
  }
];
