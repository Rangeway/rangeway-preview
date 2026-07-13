export interface GuideImage {
  src: string;
  alt: string;
  caption: string;
  focalPosition?: string;
}

export type FieldGuideImages = readonly [
  GuideImage,
  GuideImage,
  GuideImage,
  GuideImage
];
