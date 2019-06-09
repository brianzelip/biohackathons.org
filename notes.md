# notes

## Audit existing site

The needs of the organization should dictate the role and functionality of the site. Short of having a sit down with Ben and other key stakeholders, there's an audit that I can do of the current site, to model the role it's currently playing.

biohackathons.github.io

### Lists

- upcoming hackathons list
  - hackathon name
  - hackathon date
  - hackathon link
- old hackathons list
  - hackathon name
  - hackathon date
  - hackathon link
- products from hackathons list (should be sortable/filterable)
  - Product repo name
  - Product repo description
  - Product repo links: source code, manuscript [DO WE WANT DEMO TOO?]

### Forms

- join mailing list [EXISTS]
- add your product to the products from hackathons list [EXISTS]
- add your hackathon to the upcoming hackathons list [DOES NOT EXIST]

### Content

#### About

- https://biohackathons.github.io/About.html

#### Contact

##### Email

- [biohackathons@gmail.com](mailto:biohackathons@gmail.com)
- [ben.busby@nih.gov](mailto:ben.busby@nih.gov)

##### URL

- [twitter](@dcgenomics)
- [git hub org home](https://github.com/biohackathons)

#### Biohackathon products

Should be sortable and filterable

Categories in the current site's nav 'Selected Hackathon Products' drop down menu:

- Metadata and text mining
- Structural variants
- Structure
- Expression
- Graph Genomes
- Immunogenicity
- Defunct
- Metagenomics
- SNPs
- Other

#### 3rd party resources

- https://biohackathons.github.io/Community-Resources.html

#### Images

Used in the header for general aesthetics

- creative commons medical images?
- https://guides.lib.umich.edu/c.php?g=282888&p=1885044
  - https://visualsonline.cancer.gov/

## Repo organization

- need contributing guidelines - the steps folks should take to submit a PR (fork, new branch, work, test, submit PR)
- need onboarding technical docs of how the site runs for org devs
- need onboarding docs on how to update content (like the upcoming hackathons list, etc.) for org non-devs
- have a list of what's editable by non-devs, for anyone to know what kind of content is maintainable in this project
- changelog should keep track of changes to the site, not content; so once the site is up and running, content shouldn't really effect semver, except in fringe cases perhaps, on a case-by-case basis.
- promote a git usage style guide for org devs
  - feature branch
  - granular commits
  - commit messages
