// @filename: image.ts
export class Image {
    url: string;
    background: string;
    alt: string;

    constructor(
        url: string,
        background: string,
        alt: string
    ) {
        this.url = url;
        this.background = background;
        this.alt = alt;
    }
}
