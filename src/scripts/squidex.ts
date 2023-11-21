// @filename: squidex.ts
import { DynamicSortMultiple, BuildList } from "./utils";
import { MapExperience, MapProject, MapHome } from "./mapper";
import { Project } from './models/project';
import { Experience } from './models/experience';

const squidexKey = import.meta.env.SQUIDEX_KEY;
const squidexUrl = "https://cloud.squidex.io/api/content/" + squidexKey + "/";

let squidexHeaders = new Headers();
squidexHeaders.append("X-Flatten", "true");
squidexHeaders.append("X-NoResolveLanguages", "1");
squidexHeaders.append("X-Languages", "en");
squidexHeaders.append("timeout", "1000");
squidexHeaders.append("retry", "3");
squidexHeaders.append("retryDelay", "4000");

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
    const experiences: Experience[] = [];

    for (const item of experienceJson.items) {
        const company = companyJson.items.find(function (x: { id: any; }) {
            return x.id === item.data.company[0];
        });

        const projects = BuildList(item.data.projects, projectJson.items);
        const contribs = BuildList(item.data.contributions, projectJson.items);
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

    const projects: Project[] = [];

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
