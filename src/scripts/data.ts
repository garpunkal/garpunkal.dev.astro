// @filename: squidex.ts
import { DynamicSortMultiple, BuildList } from "./utils";
import { MapExperience, MapProject, MapHome, MapArticle } from "./mapper";
import { Project } from './models/project';
import { Experience } from './models/experience';
import { Article } from './models/article';

const DevToApiKey = import.meta.env.DEVTO_API_KEY;
const DevToUrl = 'https://dev.to/api/articles/me/published?api-key=';
const squidexUrl = "https://cloud.squidex.io/api/content/garpunkaldev/";

let squidexHeaders = new Headers();
squidexHeaders.append("X-Flatten", "true");
squidexHeaders.append("X-NoResolveLanguages", "1");
squidexHeaders.append("X-Languages", "en");
squidexHeaders.append("timeout", "1000");
squidexHeaders.append("retry", "3");
squidexHeaders.append("retryDelay", "4000");

export async function GetArticles(page = 1) {
    let response = await fetch(DevToUrl + DevToApiKey + '?page=' + page, {
        method: "GET",
        headers: {
            'api-key': DevToApiKey,
            'Content-Type': 'application/json'
        }
    });

    const posts = await response.json();

    if (posts.length >= 30 && posts.length !== 0) {
        GetArticles(++page);
    }
    const articles = new Array<Article>();

    for (let post of posts)
        articles.push(MapArticle(post))

    articles.sort(DynamicSortMultiple("-published_at"));
    return articles;
}

export async function GetExperiences() {

    const experienceData = await fetch(squidexUrl + "experience", {
        method: "GET",
        headers: squidexHeaders
    });
    const experienceJson = await experienceData.json();

    const companyData = await fetch(squidexUrl + "company", {
        method: "GET",
        headers: squidexHeaders
    });
    const companyJson = await companyData.json();

    const projectData = await fetch(squidexUrl + "project", {
        method: "GET",
        headers: squidexHeaders
    });
    const projectJson = await projectData.json();

    // experiences
    const experiences = new Array<Experience>();
    for (const item of experienceJson.items) {
        // filter relations
        const company = companyJson.items.find(function (x: { id: any; }) {
            return x.id === item.data.company[0];
        });

        const projects = BuildList(item.data.projects, projectJson.items);
        const contribs = BuildList(item.data.contributions, projectJson.items);
        // map
        experiences.push(MapExperience(item, company, projects, contribs));
    }
    experiences.sort(DynamicSortMultiple("-orderDate"));

    return experiences;
}

export async function GetProjects() {
    const projectData = await fetch(squidexUrl + "project", {
        method: "GET",
        headers: squidexHeaders
    });
    const projectJson = await projectData.json();
    const projects = new Array<Project>();
    for (const item of projectJson.items)
        if (item.data.IsHighlight === true) projects.push(MapProject(item));
    projects.sort(DynamicSortMultiple("-sortOrder", "title"));

    return projects;

}

export async function GetHome() {
    const homeData = await fetch(squidexUrl + "home", {
        method: "GET",
        headers: squidexHeaders
    });

    const homeJson = await homeData.json();
    return MapHome(homeJson.items[0]);
}
