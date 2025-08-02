import pfp from "@/assets/pfp.jpeg";

export default function () {
    return <div className="h-screen w-screen flex">
        <div className="w-1/2 h-full flex p-10 backdrop-blur-3xl rounded-br-4xl">
            <div className="m-auto flex flex-col gap-20">
                <div>
                    <p className="text-[75px] font-sans font-bold">Minh Duy</p>
                    <p className="text-3xl font-sans">Junior full-stack developer</p>
                </div>
                <table className="text-2xl">
                    <tr>
                        <th className="w-25" />
                        <th />
                    </tr>
                    <tr>
                        <td className="font-bold align-top">Email</td>
                        <td>
                            <table>
                                <tr className="gap-2 flex flex-row">
                                    <td>For work</td>
                                    <td><a href="mailto:duytm@agentbot.vn" className="hover:underline">duytm@agentbot.vn</a></td>
                                </tr>
                                <div className="gap-2 flex flex-row">
                                    <td className="w-25">Personal</td>
                                    <td><a href="mailto:duyduy15456@gmail.com" className="hover:underline">duyduy15456@gmail.com</a></td>
                                </div>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td className="font-bold w-20">Github</td>
                        <td><a href="https://github.com/VaitoSoi" className="hover:underline">github.com/VaitoSoi</a></td>
                    </tr>
                </table>
            </div>
        </div>
        <img className="size-100 rounded-xl ml-auto mt-auto mb-auto mr-40" src={pfp} />
    </div>;
}