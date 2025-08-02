import postgres from "@/assets/postgresql.svg";
import sqlite from "@/assets/sqlite.svg";
import redis from "@/assets/redis.svg";
import loki from "@/assets/loki.svg";
import influxdb from "@/assets/influxdb.svg";
import docker from "@/assets/docker.svg";
import { useState, type ComponentProps } from "react";
import { cn } from "@/lib/utils";

type Service = "postgres" | "sqlite" | "redis" | "loki" | "influxdb" | "docker"

interface ServiceDetail {
    level: string,
    description?: string,
    projects?: {
        name: string,
        repoLink?: string,
        tags?: string[]
    }[],
}

export default function () {
    const [serviceTab, setServiceTab] = useState<Service>("postgres");

    const serviceDetails: Record<Service, ServiceDetail> = {
        "postgres": {
            level: "Proficient",
            description: "Postgres is a powerful database. I have used this in many projects, including large project.",
            projects: [
                {
                    name: "Rannus",
                    tags: ["discord-bot", "multi-purpose"]
                },
                {
                    name: "Agent Bot",
                    tags: ["discord-bot", "gamble", "economy"]
                },
            ]
        },
        "sqlite": {
            level: "Proficient",
            description: "Unlike Postgres, SQLite is a simple database yet powerfull. I used this in projects when Im too lazy to set Postgres :D.",
            projects: [
                {
                    name: "gen-py",
                    repoLink: "https://github.com/VaitoSoi/gen-py",
                    tags: ["random", "generator"]
                },
                {
                    name: "Justyse",
                    repoLink: "https://github.com/VaitoSoi/justyse",
                    tags: ["fastapi", "backend"]
                },
                {
                    name: "Judgyse",
                    repoLink: "https://github.com/VaitoSoi/judgyse",
                    tags: ["fastapi", "docker", "judge"]
                },
                {
                    name: "Simple Docker Dasboard",
                    repoLink: "https://github.com/VaitoSoi/simple-docker-dashboard",
                    tags: ["docker", "react"]
                },
            ]
        },
        "redis": {
            level: "Proficient",
            description: "Redis is a great in-memory database. I have also used this in many project, when caching is required.",
            projects: [
                {
                    name: "Rannus",
                    tags: ["discord-bot", "multi-purpose"]
                },
                {
                    name: "Agent Bot",
                    tags: ["discord-bot", "gamble", "economy"]
                },
            ]
        },
        "loki": {
            level: "Beginner",
            description: "Loki is great a at logging. I just have used this in my recent projects.",
            projects: [
                {
                    name: "Rannus",
                    tags: ["discord-bot", "multi-purpose"]
                },
                {
                    name: "Agent Bot",
                    tags: ["discord-bot", "gamble", "economy"]
                },
            ]
        },
        "influxdb": {
            level: "Beginner",
            description: "InfluxDB is also great at logging. As well as Loki, I just have used in my recent projects.",
            projects: [
                {
                    name: "Agent Bot",
                    tags: ["discord-bot", "gamble", "economy"]
                },
            ]
        },
        "docker": {
            level: "Proficient",
            description: "Docker provide a strong containerization tool, image hub, etc.",
            projects: [
                {
                    name: "Rannus",
                    tags: ["discord-bot", "multi-purpose"]
                },
                {
                    name: "Agent Bot",
                    tags: ["discord-bot", "gamble", "economy"]
                },
                {
                    name: "Judgyse",
                    repoLink: "https://github.com/VaitoSoi/judgyse",
                    tags: ["fastapi", "docker", "judge"]
                },
                {
                    name: "Simple Docker Dasboard",
                    repoLink: "https://github.com/VaitoSoi/simple-docker-dashboard",
                    tags: ["docker", "react"]
                },
            ]
        },
    };

    return <div className="w-6/7 h-full p-5 m-auto mr-0 backdrop-blur-3xl rounded-2xl">
        <div className="flex flex-row items-center gap-10">
            <ServicesTabSelector name="postgres" src={postgres} tab={[serviceTab, setServiceTab]} />
            <ServicesTabSelector name="sqlite" src={sqlite} tab={[serviceTab, setServiceTab]} />
            <ServicesTabSelector name="redis" src={redis} tab={[serviceTab, setServiceTab]} />
            <ServicesTabSelector name="loki" src={loki} tab={[serviceTab, setServiceTab]} />
            <ServicesTabSelector name="influxdb" src={influxdb} tab={[serviceTab, setServiceTab]} />
            <ServicesTabSelector name="docker" src={docker} tab={[serviceTab, setServiceTab]} />
        </div>
        <ServiceDetails detail={serviceDetails[serviceTab]} />
    </div>;
}

function ServicesTabSelector({
    name,
    src,
    tab: [currentTab, setTab],
    className,
    ...props
}: {
    name: Service,
    src: string,
    tab: [Service, (lang: Service) => void]
} & ComponentProps<"img">) {
    return <img
        id={name}
        src={src}
        className={cn(
            "size-25 rounded-2xl cursor-pointer " + 
            (currentTab == name ? "bg-sky-600/50 " : ""),
            className
        )}
        onClick={() => setTab(name)}
        {...props}
    />;
}

function ServiceDetails({
    detail
}: {
    detail: ServiceDetail
}) {
    return <div className="mt-10 ml-10">
        <table className="text-3xl">
            <tr>
                <th className="w-50" />
                <th className="w-200" />
            </tr>
            <tr>
                <td className="font-bold">Level</td>
                <td>{detail.level}</td>
            </tr>
            {detail.description && <tr>
                <td className="font-bold align-top">Description</td>
                <td>{detail.description}</td>
            </tr>}
            {detail.projects && <tr>
                <td className="font-bold align-top">Projects</td>
                <td>{detail.projects.map(project =>
                    <div className="flex flex-row items-center gap-2">
                        {project.repoLink
                            ? <a href={project.repoLink} className="hover:underline">{project.name}</a>
                            : <p>{project.name}</p>}
                        {project.tags?.map(tag => <a
                            className="text-2xl font-semibold hover:underline"
                            href={`https://github.com/search?q=${tag}&type=repositories`}
                        >#{tag}</a>)}
                    </div>
                )}</td>
            </tr>}
        </table>
    </div>;
}
