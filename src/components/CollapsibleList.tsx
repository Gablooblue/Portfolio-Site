import React, { useState } from 'react';

interface CollapsibleListProps {
    items: string[];
    initialVisibleCount?: number;
}

function CollapsibleList({ items, initialVisibleCount = 3 }: CollapsibleListProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    const visibleItems = isExpanded ? items : items.slice(0, initialVisibleCount);
    const hasMoreItems = items.length > initialVisibleCount;

    return (
        <div>
            <ul className="space-y-1.5 max-w-[68ch]">
                {visibleItems.map((item, index) => (
                    <li
                        key={index}
                        className="grid grid-cols-[1rem_1fr] gap-3 items-start"
                        style={{ fontSize: '1rem', lineHeight: 1.55 }}
                    >
                        <span
                            aria-hidden
                            className="mt-[0.55em] block w-[6px] h-[6px] bg-signal"
                        />
                        <span className="text-ink">{item}</span>
                    </li>
                ))}
            </ul>

            {hasMoreItems && (
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="label-mono mt-4 text-ink-muted hover:text-signal transition-colors duration-150"
                >
                    {isExpanded
                        ? '[ collapse ]'
                        : `[ +${items.length - initialVisibleCount} more ]`}
                </button>
            )}
        </div>
    );
}

export default CollapsibleList;
