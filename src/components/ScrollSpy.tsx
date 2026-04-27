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
          if (pageYOffset >= offsetTop - 120) {
            newActiveSection = id;
          }
        }
      });

      setActiveSection(newActiveSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return (
    <nav
      aria-label="Section navigation"
      className="fixed left-[max(1.25rem,2vw)] top-1/2 -translate-y-1/2 z-50 hidden lg:block"
    >
      <ul className="flex flex-col gap-2.5">
        {sections.map(({ id, label }) => {
          const active = activeSection === id;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`block label-mono transition-colors duration-150 ${
                  active ? 'text-signal' : 'text-ink-muted hover:text-ink'
                }`}
              >
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default ScrollSpy;
