# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.7.1] - 2019-06-24

### Meta

- branch: master
- reason: Netlify is not building the site after the latest PR, it might be because the new file name `metadata.yaml` - there may be some conflict in the background somewhere. Let's change that file name!

### Updated

- metadata.yml: renamed site-data.yml

## [0.7.0] - 2019-06-24

### Meta

- branch: site-data
- reason: audit the site to compile all of the data groupings/categories and data points. This list represents the main uses/functions of the site, and will be the basis for architecting the new site draft. The data on the current website is awkward, inconsistent, duplicative, and generally messy. The goal behind this branch work is to tame this data mess, and provide a guide for the new site draft.

### Added

- metadata.yml: store all the site data

## [0.6.0] - 2019-06-13

### Meta

- branch name: master

### Added/updated

- main.css: Add border-box styles from Tachyons
- TheHeader.vue:
  - Refactor hardcoded nav links into v-for and data props
  - Differentiate between normal nav links and the call to action by dynamically applying cta classes

## [0.5.1] - 2019-06-13

### Meta

- branch name: header-tweaks

### Added/updated

- main.css: hover class
- TheHeader.vue:
  - update nav link innerHTML
  - update h1 link hover

## [0.5.0] - 2019-06-12

### Meta

- branch name: upcoming events

### Added/updated

- src/data/pastHackathons.yml
- HackathonsList.vue:
  - 💅 styled it up based on existing site
  - turned it into a reusable component by abstracting all of the hardcoded references to "upcoming hackathons"
  - removed data imports, now accepts data via props
- App.vue:
  - imports yaml data and sends it to HackathonsList components as props
  - renders both upcoming and past hackathon events

## [0.4.0] - 2019-06-12

### Meta

- branch: render-local-data

### Added/Updated

- src/data/upcomingHackathons.yml: Parcel's [yaml support](https://parceljs.org/yaml.html) ftw 🎉
- src/components/HackathonsList.vue: Component to render out event data from local yaml file

## [0.3.0] - 2019-06-11

### Meta

- branch: header

### Added

- src/components/TheHeader.vue
  - Header banner and nav bar adapted from biohackathons.github.io
  - fixed nav bar on scroll
- App.vue: Register and render TheHeader, delete unused data property

## [0.2.0] - 2019-06-09

### Meta

- branch: footer

### Added

- App.vue: hardcoded footer element, markup styles for centered text and sticky footer
- main.css: flex styles for sticky footer

## [0.1.0] - 2019-06-09

### Meta

- branch: master

### Added

- ./\*

### Notes

Project init, including:

- Vue.js and Parcel
- custom domain, [biohackathons.org](https://biohackathons.org)
- deployment and https via netlify
