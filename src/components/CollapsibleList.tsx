import React, { useState } from 'react';

interface CollapsibleListProps {
    items: string[];
    initialVisibleCount?: number;
    className?: string;
}

function CollapsibleList({ items, initialVisibleCount = 3, className }: CollapsibleListProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    
    const visibleItems = isExpanded ? items : items.slice(0, initialVisibleCount);
    const hasMoreItems = items.length > initialVisibleCount;

    return (
        <div className={className}>
            <div className="space-y-2">
                {visibleItems.map((item, index) => (
                    <div 
                        key={index} 
                        className="group flex items-center gap-3 py-1"
                    >
                        <div className="h-px w-4 bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-500 group-hover:w-6 transition-all duration-300" />
                        <span className="text-gray-300 group-hover:bg-clip-text  transition-all duration-200">
                            {item}
                        </span>
                    </div>
                ))}
            </div>
            {hasMoreItems && (
                <button 
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-sky-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-sky-400 hover:via-indigo-400 hover:to-purple-500 mt-3 font-medium transition-all duration-200"
                >
                    {isExpanded ? 'Show Less' : `Show ${items.length - initialVisibleCount} More`}
                </button>
            )}
        </div>
    );
}

export default CollapsibleList;