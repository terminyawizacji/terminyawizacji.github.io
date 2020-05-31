import React from 'react';
import packageJson from './package-alias.json';
import GitCommit from './_git_commit';

function Footer() {
  return (
    <footer className="footer mt-auto py-3">
      <div className="container">
        <span className="text-muted">&copy; 2020 Sławomir Wójcicki |
        version: {packageJson.version} build: {GitCommit.logMessage}</span>
      </div>
    </footer>
    );
}

export default Footer;