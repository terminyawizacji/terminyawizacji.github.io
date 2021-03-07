import React from 'react';
import packageJson from './package-alias.json';
import GitCommit from './_git_commit';
import GitCommitHeroku from './_git_commit_heroku';

function Footer() {

  function getYear() {
    let year = new Date().getFullYear();
    if (year === 2020) {
      return year;
    }
    return '2020 - ' + year;
  }

  return (
    <footer className="footer mt-auto py-3">
      <div className="container">
        <span className="text-muted">{getYear()} | na licencji: <a href="https://unlicense.org/">Unlicense</a> | autor: Sławomir Wójcicki |
        version: {packageJson.version} build: {GitCommit.logMessage || GitCommitHeroku.logMessage}</span>
      </div>
    </footer>
  );
}

export default Footer;
