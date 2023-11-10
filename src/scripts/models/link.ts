// @filename: link.ts
export class Link {
    title: string;
    url: string;
    cssClass: string;
    svgPath: string;
    svgStroke: string;
    svgStrokeWidth: string;
    svgFill: string;
    svgStrokeLineCap: string;
    svgStrokeLineJoin: string;
    rel: string;
    displayComponent: boolean;

    constructor(
        title: string,
        url: string,
        cssClass: string,
        svgPath: string,
        svgStroke: string,
        svgStrokeWidth: string,
        svgFill: string,
        svgStrokeLineCap: string,
        svgStrokeLineJoin: string,
        rel: string,
        displayComponent: boolean
    ) {
        this.title = title;
        this.url = url;
        this.cssClass = cssClass;
        this.svgPath = svgPath;
        this.svgStroke = svgStroke;
        this.svgStrokeWidth = svgStrokeWidth;
        this.svgFill = svgFill;
        this.svgStrokeLineCap = svgStrokeLineCap;
        this.svgStrokeLineJoin = svgStrokeLineJoin;
        this.rel = rel;
        this.displayComponent = displayComponent;
    }
}