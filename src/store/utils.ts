import { gsapStore, localTimeline, pageTimelineStore } from "./store";


export function Init (): [typeof globalThis.gsap, gsap.core.Timeline, (updatedTimeline: gsap.core.Timeline) => void, gsap.core.Timeline, (updatedTimeline: gsap.core.Timeline) => void] {
    const setTimeLine = (updatedTimeline: gsap.core.Timeline) => {
        localTimeline.set(updatedTimeline)
    }
    const setPageTimeLine = (updatedTimeline: gsap.core.Timeline) => {
        pageTimelineStore.set(updatedTimeline)
    }
	return [
		gsapStore.get(),
		localTimeline.get(),
        setTimeLine,
        pageTimelineStore.get(),
        setPageTimeLine
	]
  }