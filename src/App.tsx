import Detail from "./components/Detail";
import Profile from "./components/Profile";
import { ScrollArea } from "./components/ui/scroll-area";
import "./index.css";

export default function () {
    return <div>
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-violet-900 from-0% via-sky-500 via-50% to-white to-100%" />
        <ScrollArea className="overflow-hidden">
            <Profile />
            <Detail />
        </ScrollArea>
    </div>;
}