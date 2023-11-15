// @filename: skill.ts
export class Skill {
    url: string;
    background: string;
    foreground: string;
    title: string;
    percentage: number

    constructor(
        url: string,
        background: string,
        foreground: string,
        title: string,
        percentage: number
    ) {
        this.url = url;
        this.background = background;
        this.foreground = foreground;
        this.title = title;
        this.percentage = percentage;
    }
}
