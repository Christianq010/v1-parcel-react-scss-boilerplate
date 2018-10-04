# React/Parcel/SCSS boilerplate

## Date created: (Sep 2018) by Christiaan Quyn

> This repo contains my default parcel boilerplate of getting started with React.

- Inspired by the [Frontend Masters][fem] course here - [See the course website here][v4].
- The repo from the Front-End Masters Course - https://github.com/btholt/complete-intro-to-react-v4
- Lecture Notes - https://btholt.github.io/complete-intro-to-react-v4/

[v4]: https://bit.ly/react-v4
[fem]: https://frontendmasters.com/courses/react/

### Install

```bash
# Install npm packages
npm install

# Run development mode
npm run dev

# Build for production
npm run build
```

## Set-up configuration

- This project by default has ESLint and Prettier set up.

- Routing via https://github.com/reach/router (https://btholt.github.io/complete-intro-to-react-v4/reach-router)

- `.babelrc` configured for custom babel setting.

## Debugging

Parcel is an ever evolving project that's just getting better. If you run into problems with it not respecting changes (particularly to your `.babelrc` or `.env` files) then delete the `dist/` and the `.cache/` directories. You can do this in bash by running from the root directoy of your project `rm -rf dist/ .cache/` or just by deleting those directories in your editor. This will force Parcel to start over and not cache anything.

- Parcel Docs (https://parceljs.org/)

### Resources

- Tutorial on seeting up Parcel with React and SCSS - https://scotch.io/tutorials/setting-up-a-react-project-with-parcel

- Directory structure example - https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1

- SCSS architeture -
  https://scotch.io/tutorials/aesthetic-sass-1-architecture-and-style-organization

### Troubleshoot

- Git Detached HEAD issue _[Solved]_ - https://stackoverflow.com/questions/5772192/how-can-i-reconcile-detached-head-with-master-origin
