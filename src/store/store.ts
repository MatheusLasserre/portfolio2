import {atom} from "nanostores"
import gsap from "gsap"
import { CustomEase } from "gsap/CustomEase";
gsap.registerPlugin(CustomEase)
CustomEase.create("custom2","0.33, 1, 0.68, 1")
export const gsapStore = atom(gsap)
const timeline = gsap.timeline()
export const localTimeline = atom(gsap.timeline())