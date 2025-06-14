"use client"
import CountUp from "react-countup"

const countersData = [
    {
        num: 3,
        title: " Years",
        subtitle: "Experience",
    },
    {
        num: 11,
        title: "+",
        subtitle: "Project Completed",
    },
    {
        num: 6,
        title: "+",
        subtitle: "Happy Client",
    },
]
const Counters = () => {
    return (
        <div className="grid grid-cols-3 gap-1 xl:w-[600px] lg:w-[400px] max-w-full rounded-md overflow-hidden shadow-lg">
            {countersData.map((item, i) => (
                <div
                    key={i}
                    className="text-tsecondary text-center bg-biege bg-opacity-40 py-4"
                >
                    <p className="2xl:text-2xl lg:text-xl">
                        <CountUp end={+item.num} start={0} duration={5} />
                        {item.title}
                    </p>
                    <p className="2xl:text-base md:text-sm text-xs">
                        {item.subtitle}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default Counters
