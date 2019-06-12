# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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
