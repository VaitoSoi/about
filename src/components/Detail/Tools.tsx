interface ToolCategory {
    category: string,
    tools: {
        name: string,
        url?: string,
    }[]
}

export default function () {
    const toolCategories: ToolCategory[] = [
        {
            category: "Editor",
            tools: [
                {
                    name: "Visual Studio Code",
                    url: "https://code.visualstudio.com/"
                },
                {
                    name: "PyCharm",
                    url: "https://www.jetbrains.com/pycharm/"
                },
                {
                    name: "IntelliJ IDEA",
                    url: "https://www.jetbrains.com/pycharm/"
                },
                {
                    name: "DataGrip",
                    url: "https://www.jetbrains.com/datagrip/"
                }
            ]
        },
        {
            category: "Shell",
            tools: [
                {
                    name: "Bash",
                },
                {
                    name: "ZSH"
                }
            ]
        },
        {
            category: "OS",
            tools: [
                {
                    name: "Windows",
                    url: "https://www.microsoft.com/windows"
                },
                {
                    name: "Ubuntu Desktop",
                    url: "https://ubuntu.com/desktop"
                },
                {
                    name: "Ubuntu Server",
                    url: "https://ubuntu.com/server"
                },
                {
                    name: "Manjaro",
                    url: "https://manjaro.org/"
                },
                {
                    name: "ZorinOS",
                    url: "https://zorin.com/os/"
                },
                {
                    name: "Fedora",
                    url: "https://fedoraproject.org/"
                }
            ]
        },
        {
            category: "Design",
            tools: [
                {
                    name: "Figma",
                    url: "https://www.figma.com/"
                },
                {
                    name: "Canva",
                    url: "https://www.canva.com/"
                }
            ]
        },
        {
            category: "Cloud",
            tools: [
                {
                    name: "GCP",
                    url: "https://cloud.google.com/"
                },
                {
                    name: "AWS",
                    url: "https://aws.amazon.com/"
                },
                {
                    name: "Heroku",
                    url: "https://www.heroku.com/"
                },
                {
                    name: "Render",
                    url: "https://render.com/"
                }
            ]
        },
        {
            category: "API Tester",
            tools: [
                {
                    name: "Postman",
                    url: "https://www.postman.com/"
                },
                {
                    name: "Insomnia",
                    url: "https://insomnia.rest/"
                }
            ]
        }
    ];

    return <div className="w-6/7 h-full p-10 m-auto mr-0 backdrop-blur-3xl rounded-2xl text-[28px]">
        <div>
            <p className="text-[35px] font-bold">Used/Using tools</p>
            <table>
                {toolCategories.map(category => <tr className="flex gap-5">
                    <td className="font-bold w-40">{category.category}</td>
                    <td className="flex flex-row gap-2">{category.tools.map((tool) =>
                        tool.url
                            ? <a href={tool.url} className="hover:underline">{tool.name}</a>
                            : <p>{tool.name}</p>
                    )}</td>
                </tr>)}
            </table>
        </div>
    </div>;
}