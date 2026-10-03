import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: '2018',
    title: 'StarChain Labs',
    subtitle: 'Founded by infinity1306it Pandey',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-4, -4, -3),
    year: '2020',
    title: 'Scalable Platforms',
    subtitle: 'Expanded to Enterprise',
    position: 'left',
  },
  {
    point: new THREE.Vector3(-3, -1, -6),
    year: '2022',
    title: 'Web3 Infrastructure',
    subtitle: 'Deployed Blockchain Solutions',
    position: 'left',
  },
  {
    point: new THREE.Vector3(0, -1, -10),
    year: '2024',
    title: 'Engineering Team',
    subtitle: 'Expanded to global talent',
    position: 'left',
  },
  {
    point: new THREE.Vector3(1, 1, -12),
    year: new Date().toLocaleDateString('default', { year: 'numeric' }),
    title: 'Building...',
    subtitle: 'Engineering the future',
    position: 'right',
  }
]