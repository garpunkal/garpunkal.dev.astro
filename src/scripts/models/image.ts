// @filename: image.ts
export class Image {
    webp: string;
    url: string;
    background: string;
    alt: string;

    constructor(
        webp: string,
        url: string,
        background: string,
        alt: string
    ) {
        this.webp = webp;
        this.url = url;
        this.background = background;
        this.alt = alt;
    }
}
