---
layout: home

hero:
  name: Paperlib
  text: to organise academic papers decently. 
  tagline: An open-source and simple academic paper management tool.
  image:
    src: /assets/images/ui.png
    alt: PaperlibUI
  actions:
    - theme: brand
      text: Get Started
      link: /doc/getting-started
    - theme: alt
      text: Download
      link: /download
    - theme: alt
      text: Donate
      link: /donate


features:
- title: Scrape Metadata
  details: Scrape paper’s metadata in many metadata databases. Tailored for many disciplines (e.g., computer science, phisics etc.). Especially, the precise metadata scraping for conference papers
- title: Organise your Paper
  details: Flag, tag, and create folders to let your library clean and tidy. Also support markdown and plain text notes
- title: Export References
  details: Export references by using the Quick Copy-paste plugin when you write your draft paper. Also supports Word plugin
- title: Three Search Modes
  details: General search, advanced search, and full-text search
- title: RSS Feed
  details: Subscribe to RSS feed to get new papers
- title: Modern UI, Cross Platform and Cloud Sync
  details: Supports macOS, Linux and windows. Modern and clean UI (supports darkmode). Access your library from everywhere with a sync database
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/9260067?v=4',
    name: '@seon**inp',
    org: 'actionpower.kr',
    desc: 'Thank you for this great piece of software! Makes my life much easier. I have fond memories of iTunes and PaperLib is giving me similar vibes.',
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/6159411?v=4',
    name: '@Pe**Foo',
    org: 'Opera Inc.',
    desc: 'Thanks for your great work! I have been using this app the manage all my papers now and it is working really well!',
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/15147123?v=4',
    name: '@jis**qing',
    org: 'California Institute of Technology',
    desc: 'PaperLib is absolutely a great tool for paper management in many academic areas.',
  },

]
</script>

<div class="flex flex-col mt-20 px-6">
  <div class="m-auto text-2xl font-bold"> Comments </div>
  <hr class='max-w-[250px] w-[250px] mx-auto mt-4 mb-8' />
  <VPTeamMembers size="small" :members="members" />
</div>

<div class="flex flex-col mt-20">
  <div class="m-auto text-2xl font-bold"> Sponsors </div>
  <hr class='max-w-[250px] w-[250px] mx-auto mt-4 mb-8' />
  <img class="m-auto h-20 bg-white" src="/assets/images/sponsors/MacStadium.png" style="box-shadow: none" />
</div>