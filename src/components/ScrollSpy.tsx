import React, { useEffect, useState } from 'react';

interface Section {
  id: string;
  label: string;
}

interface ScrollSpyProps {
  sections: Section[];
}

function ScrollSpy({ sections }: ScrollSpyProps) {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const pageYOffset = window.pageYOffset;
      let newActiveSection = sections[0].id;

      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          const { offsetTop } = element;
          if (pageYOffset >= offsetTop - 100) {
            newActiveSection = id;
          }
        }
      });

      setActiveSection(newActiveSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return (
    <nav className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
      <ul className="flex flex-col gap-4">
        {sections.map(({ id, label }) => (
          <li key={id} className="flex items-center justify-end gap-3">
            <span className={`text-sm whitespace-nowrap transition-colors duration-200 ${
              activeSection === id ? 'text-white font-bold' : 'text-gray-600'
            }`}>
              {label}
            </span>
            <a
              href={`#${id}`}
              className={`block rounded-full transition-colors duration-200 ${
                activeSection === id
                  ? 'bg-sky-400'
                  : 'bg-gray-700 hover:bg-gray-600'
              }`}
            >
              <div className="w-3 h-3"></div>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default ScrollSpy;