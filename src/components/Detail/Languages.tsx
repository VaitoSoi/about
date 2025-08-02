import javascript from "@/assets/javascript.svg";
import typescript from "@/assets/typescript.svg";
import python from "@/assets/python.svg";
import cpp from "@/assets/cpp.svg";
import rust from "@/assets/rust.svg";
import { useState, type ComponentProps } from "react";
import { cn } from "@/lib/utils";

type Language = "javascript" | "typescript" | "python" | "cpp" | "rust"

interface LanguageDetail {
    since: string,
    level: string,
    description?: string,
    projects?: {
        name: string,
        repoLink?: string,
        tags?: string[]
    }[],
    frameworks?: {
        name: string,
        url: string,
        tags?: string[]
    }[],
    libraries?: {
        name: string,
        url: string,
        tags?: string[]
    }[],
    runtime?: {
        name: string,
        url: string,
    }[],
    packageManager?: {
        name: string,
        url: string,
    }[],
}

export default function () {
    const [languageTab, setLanguageTab] = useState<Language>("javascript");

    const languageDetails: Record<Language, LanguageDetail | null> = {
        "javascript": {
            since: "2020",
            level: "Advanced",
            projects: [
                {
                    name: "OggyTheBot",
                    repoLink: "https://github.com/VaitoSoi/OggyTheCode",
                    tags: ["discord-bot", "livechat"]
                },
            ],
            libraries: [
                {
                    name: "DiscordJS",
                    url: "https://discord.js.org/#/",
                    tags: ["discord", "bot"]
                }
            ],
            runtime: [
                {
                    name: "NodeJS",
                    url: "https://nodejs.org/"
                }
            ],
            packageManager: [
                {
                    name: "NPM",
                    url: "https://www.npmjs.com/"
                },
                {
                    name: "Yarn",
                    url: "https://yarnpkg.com/"
                }
            ]
        },
        "typescript": {
            since: "2021",
            level: "Advanced",
            projects: [
                {
                    name: "Test Generator",
                    repoLink: "https://github.com/VaitoSoi/generate-test",
                    tags: ["random", "generator"]
                },
                {
                    name: "Rannus",
                    tags: ["discord-bot", "multi-purpose"]
                },
                {
                    name: "Agent Bot",
                    tags: ["discord-bot", "gamble", "economy"]
                },
                {
                    name: "Simple Docker Dasboard Frontend",
                    repoLink: "https://github.com/VaitoSoi/simple-docker-dashboard",
                    tags: ["docker", "react"]
                },
                {
                    name: "Simple Hackclub AI UI",
                    repoLink: "https://github.com/VaitoSoi/hackclub_ai_ui",
                    tags: ["hackclub", "ai", "react"]
                },
                {
                    name: "This web :D",
                    tags: ["profile", "react"]
                }
            ],
            frameworks: [
                {
                    name: "ReactJS",
                    url: "https://react.dev/",
                    tags: ["frontend"]
                },
            ],
            libraries: [
                {
                    name: "DiscordJS",
                    url: "https://discord.js.org/#/",
                    tags: ["discord", "bot"]
                }
            ],
            runtime: [
                {
                    name: "NodeJS",
                    url: "https://nodejs.org/"
                },
                {
                    name: "Bun.sh",
                    url: "https://bun.sh/"
                }
            ],
            packageManager: [
                {
                    name: "Yarn",
                    url: "https://yarnpkg.com/"
                },
                {
                    name: "Bun.sh",
                    url: "https://bun.sh/"
                }
            ]
        },
        "python": {
            since: "2024",
            level: "Proficient",
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
                    name: "Simple Docker Dashboard Backend",
                    repoLink: "https://github.com/VaitoSoi/simple-docker-dashboard",
                    tags: ["fastapi", "docker"]
                }
            ],
            frameworks: [
                {
                    name: "FastAPI",
                    url: "https://fastapi.tiangolo.com/",
                    tags: ["api", "backend", "async"]
                },
            ],
            libraries: [
                {
                    name: "Pydantic",
                    url: "https://pydantic.dev/",
                    tags: ["typing"]
                },
                {
                    name: "SQLModel",
                    url: "https://sqlmodel.tiangolo.com/",
                    tags: ["sql", "db", "orm"]
                }
            ],
            runtime: [
                {
                    name: "Python",
                    url: "https://www.python.org/"
                }
            ],
            packageManager: [
                {
                    name: "PIP",
                    url: "https://pypi.org/project/pip/"
                }
            ]
        },
        "cpp": {
            since: "2023",
            level: "Noob",
            description: "I'm not very interested in this language. I only study it because my school requires me to :_D"
        },
        "rust": {
            since: "Planning",
            level: "None :D",
            description: "Rust is a powerfull yet strictly typed. I'm planning to learn this language in the feature :D"
        }
    };

    return <div className="w-6/7 h-full p-5 m-auto mr-0 backdrop-blur-3xl rounded-2xl">
        <div className="flex flex-row items-center gap-10">
            <LanguageTabSelector src={javascript} name="javascript" tab={[languageTab, setLanguageTab]} />
            <LanguageTabSelector src={typescript} name="typescript" tab={[languageTab, setLanguageTab]} />
            <LanguageTabSelector src={python} name="python" tab={[languageTab, setLanguageTab]} />
            <LanguageTabSelector src={cpp} name="cpp" tab={[languageTab, setLanguageTab]} />
            <LanguageTabSelector src={rust} name="rust" tab={[languageTab, setLanguageTab]} />
        </div>
        <LanguageDetails detail={languageDetails[languageTab]} />
    </div>;
}

function LanguageTabSelector({
    name,
    src,
    tab: [currentTab, setTab],
    className,
    ...props
}: {
    name: Language,
    src: string,
    tab: [Language, (lang: Language) => void]
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

function LanguageDetails({
    detail
}: {
    detail: LanguageDetail
}) {
    return <div className="mt-10 ml-10">
        <table className="text-3xl">
            <tr>
                <th className="w-50" />
                <th className="w-200" />
            </tr>
            <tr>
                <td className="font-bold">Learn since</td>
                <td>{detail.since}</td>
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
            {detail.frameworks && <tr>
                <td className="font-bold align-top">Frameworks</td>
                <td>{detail.frameworks.map(project =>
                    <div className="flex flex-row items-center gap-2">
                        {project.url
                            ? <a href={project.url} className="hover:underline">{project.name}</a>
                            : <p>{project.name}</p>}
                        {project.tags?.map(tag => <a
                            className="text-2xl font-semibold hover:underline"
                            href={`https://github.com/search?q=${tag}&type=repositories`}
                        >#{tag}</a>)}
                    </div>
                )}</td>
            </tr>}
            {detail.libraries && <tr>
                <td className="font-bold align-top">Libraries</td>
                <td>{detail.libraries.map(project =>
                    <div className="flex flex-row items-center gap-2">
                        {project.url
                            ? <a href={project.url} className="hover:underline">{project.name}</a>
                            : <p>{project.name}</p>}
                        {project.tags?.map(tag => <a
                            className="text-2xl font-semibold hover:underline"
                            href={`https://github.com/search?q=${tag}&type=repositories`}
                        >#{tag}</a>)}
                    </div>
                )}</td>
            </tr>}
            {detail.runtime && <tr>
                <td className="font-bold align-top">Runtime</td>
                <td>{detail.runtime.map(project =>
                    <div className="flex flex-row items-center gap-2">
                        {project.url
                            ? <a href={project.url} className="hover:underline">{project.name}</a>
                            : <p>{project.name}</p>}
                    </div>
                )}</td>
            </tr>}
            {detail.packageManager && <tr>
                <td className="font-bold align-top">Package</td>
                <td>{detail.packageManager.map(project =>
                    <div className="flex flex-row items-center gap-2">
                        {project.url
                            ? <a href={project.url} className="hover:underline">{project.name}</a>
                            : <p>{project.name}</p>}
                    </div>
                )}</td>
            </tr>}
        </table>
    </div>;
}
