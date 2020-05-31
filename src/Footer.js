import React from 'react';
import packageJson from './package-alias.json';
import GitCommit from './_git_commit';
import GitCommitHeroku from './_git_commit_heroku';

function Footer() {

  return (
    <footer className="footer mt-auto py-3">
      <div className="container">
        <span className="text-muted">&copy; 2020 Sławomir Wójcicki |
        version: {packageJson.version} build: {GitCommit.logMessage || GitCommitHeroku.logMessage}</span>
      </div>
    </footer>
    );
}

export default Footer;