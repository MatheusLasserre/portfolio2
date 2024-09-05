import { gsapStore, localTimeline } from "./store";


export function Init (): [typeof globalThis.gsap, gsap.core.Timeline, (updatedTimeline: gsap.core.Timeline) => void] {
    const setTimeLine = (updatedTimeline: gsap.core.Timeline) => {
        localTimeline.set(updatedTimeline)
    }
	return [
		gsapStore.get(),
		localTimeline.get(),
        setTimeLine
	]
  }