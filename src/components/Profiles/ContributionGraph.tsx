import React from 'react';

interface ContributionGraphProps {
    data: number[][];
}

export default function ContributionGraph({ data }: ContributionGraphProps) {
    const getColor = (value: number) => {
        if (value === 0) return 'bg-gray-700';
        if (value < 3) return 'bg-neon-green/30';
        if (value < 6) return 'bg-neon-green/60';
        return 'bg-neon-green';
    };

    return (
        <div className="overflow-x-auto">
            <div className="grid grid-cols-52 gap-1 min-w-[1000px]">
                {data.map((week, weekIndex) => (
                    <div key={weekIndex} className="grid grid-rows-7 gap-1">
                        {week.map((value, dayIndex) => (
                            <div
                                key={`${weekIndex}-${dayIndex}`}
                                className={`w-3 h-3 rounded-sm ${getColor(value)} transition-colors duration-200 hover:ring-2 hover:ring-neon-blue cursor-pointer`}
                                title={`${value} contributions`}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}