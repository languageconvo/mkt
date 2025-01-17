# New Instructions

Write your code, then `npm run build`, and copy/paste the code into webflow.


# Old Instructions:

# Overview

This is the javascript for our marketing site; when built in production, an npm package is published, which is then hosted on jsDelivr. Our webflow project can then include the script from jsDeliver. 

# Publishing New Version

**In Your Feature Branch**

- Edit version in package.json
- Run `yarn build:prod`
- Commit, push, open a PR to `main` branch

**Merge PR**

- Check to ensure version got bumped in package.json
- Check to ensure main.js got edited
- Merge the PR

**Automated Build Steps Occur Next**

After merging to `main`, CI/CD takes over and does things like:
- Publish the package to npm
- Wait for the new package version to be available on CDN (jsdelivr)
- Run e2e tests on dev site

**Create Version In Github**

This is optional, in the sense that if you fail to do it, the package will still be published. Create a new version in Github and write some notes on what was changed, just for future reference.
