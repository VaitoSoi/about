import { useState } from "react";
import Languages from "./Detail/Languages";
import Services from "./Detail/Services";
import Tools from "./Detail/Tools";

type Tab = "Languages" | "Services" | "Tools";
const tabs: Tab[] = ["Languages", "Services", "Tools"];

export default function () {
    const [tab, setTab] = useState<Tab>("Languages");

    return <div className="w-screen h-screen flex">
        <div className="w-4/5 h-4/5 gap-10 flex m-auto">
            <div className="w-1/7 h-1/2 flex flex-col gap-5 m-auto ml-0 p-4 backdrop-blur-3xl rounded-2xl">
                {tabs.map((name) =>
                    <div
                        className={
                            "w-full h-1/3 rounded-2xl flex items-center justify-center cursor-pointer " +
                            (tab == name ? "bg-sky-500/10 backdrop-blur-md rounded-lg" : "")
                        }
                        onClick={() => setTab(name)}
                    >
                        <p className="font-bold text-2xl">{name}</p>
                    </div>
                )}
            </div>
            {tab == "Languages" && <Languages />}
            {tab == "Services" && <Services />}
            {tab == "Tools" && <Tools />}
        </div>
    </div>;
}