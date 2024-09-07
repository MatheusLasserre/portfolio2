import { atom } from 'nanostores'
import gsap from 'gsap'
import { CustomEase } from 'gsap/CustomEase'
import { Flip } from 'gsap/Flip'
gsap.registerPlugin(CustomEase)
gsap.registerPlugin(Flip)
CustomEase.create('custom2', '0.33, 1, 0.68, 1')
CustomEase.create('EaseInCirc', '0.55, 0, 1, 0.45')
CustomEase.create('EaseOutCirc', '0, 0.55, 0.45, 1')
CustomEase.create('EaseInSine', '0.12, 0, 0.39, 0')
CustomEase.create('EaseOutSine', '0.61, 1, 0.88, 1')
CustomEase.create('EaseInExpo', '0.7, 0, 0.84, 0')
CustomEase.create('EaseOutExpo', '0.16, 1, 0.3, 1')
CustomEase.create('EaseOutCustom', '0.025, 0.925, 0.480, 0.985')
export const gsapStore = atom(gsap)
// const timeline = gsap.timeline()
export const localTimeline = atom(gsap.timeline())
// const pageTimeline = gsap.timeline()
export const pageTimelineStore = atom(gsap.timeline())
