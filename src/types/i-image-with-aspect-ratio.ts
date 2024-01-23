// --- interface for img html element and 

export default interface IImageWithAspectRatio {
  parentWidthPx: number;
  aspectRatio: number; // width / height
  imgWidthPx?: number; // --- use this to limit the image width in case image width < parent width
  imgSrc: string;
  title: string;
}
