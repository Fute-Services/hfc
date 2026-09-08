/**
 * Shared shapes for the tower datasets.
 *
 * All eight towers (Pavilion, Grandstand, Arcadia, Citadel, Greenfield,
 * Athletica, Stadia, Olympus) export the same structure, so these types replace
 * the `any` annotations that were scattered across the tower components.
 */

/** A labelled room polygon inside a unit plan. */
export interface Room {
  id: number;
  name: string;
  /** Dimensions as printed on the plan, e.g. `10'6'' x 13'10''`. */
  size: string;
  /** SVG polygon points, in the plan image's own coordinate space. */
  polygon: string;
  hoverColor?: string;
}

/** One apartment on a floor. */
export interface Unit {
  id: number;
  name: string;
  /** Configuration label, e.g. `3 BHK`. */
  type: string;
  size?: string;
  hoverColor?: string;
  /** SVG polygon marking the unit on the floor plate. */
  polygonPoints?: string;
  unitimage?: string;
  image2D?: string;
  image2Dstatic?: string;
  image3D?: string;
  rooms?: Room[];
  roomstatic?: Room[];
  room2D?: Room[];
}

/** One floor of a tower. */
export interface Floor {
  id: number;
  name?: string;
  /** Percentage offsets used to place the hotspot over the elevation image. */
  top?: string;
  left?: string;
  width?: number;
  height?: number;
  hoverColor?: string;
  /** SVG polygon marking the floor on the tower elevation. */
  polygon?: string;
  image?: string;
  /** Alternate floor-plate drawing, used by some towers' zoom view. */
  image1?: string;
  floorimage?: string;
  imageSettings?: {
    svgSize?: string;
    imageWidth?: number | string;
    imageHeight?: number | string;
  };
  units?: Unit[];
}

/** The short blurb shown over a tower's elevation view. */
export interface TowerDescription {
  towerName: string;
  configuration: string;
}
