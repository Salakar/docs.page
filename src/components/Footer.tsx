import React from 'react';
import { useSlugProperties } from '../hooks';
import { DarkModeToggle } from './DarkModeToggle';
import { Pencil } from './Icons';
import { ExternalLink } from './Link';

function Footer(): JSX.Element {
  const editUrl = useSlugProperties().editUrl;

  return (
    <footer className="flex dark:text-white font-mono text-sm">
      <div className="flex-1">
        <div>
          Powered by{' '}
          <ExternalLink href="https://docs.page" className="font-bold hover:underline">
            docs.page
          </ExternalLink>
        </div>
        <div className="mt-4">
          <DarkModeToggle />
        </div>
      </div>
      <ExternalLink href={editUrl} className="flex hover:underline">
        <Pencil size={16} />
        <span className="pl-2">Edit this page</span>
      </ExternalLink>
    </footer>
  );
}

export { Footer };
