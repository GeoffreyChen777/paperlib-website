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
      link: ./doc/getting-started
    - theme: alt
      text: Download
      link: ./download
    - theme: alt
      text: Donate
      link: ./donate


features:
- title: Scrape Metadata
  details: Scrape paper’s metadata in many metadata databases. Tailored for many disciplines (e.g., computer science, physics etc.). Especially, the precise metadata scraping for conference papers
- title: Organise your Paper
  details: Flag, tag, and create folders to let your library clean and tidy. Also support markdown and plain text notes
- title: Export References
  details: Export references by using the Quick Copy-paste plugin when you write your draft paper. Also supports Word plugin
- title: Extensible
  details: Develop and publish your own extensions.
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

const users = [
  'AS201773 University of Warwick',
  'AS201773 Zhejiang University',
  'AS201773 Xiamen University',
  'AS201773 Ocean University of China',
  'AS46 Rutgers, The State University',
  'AS15496 Aalto University',
  'AS13371 Duke University',
  'AS3794 Texas A&M University',
  'AS23162 University of Kentucky',
  'AS15318 McGill University',
  'AS16643 Virginia Commonwealth University',
  'AS3999 The Pennsylvania State University',
  'AS24436 University of Queensland',
  'AS9419 Nanyang Technological University',
  'AS7582 University of Macau',
  'AS47 University of Southern California',
  'AS26934 University of Missouri-Columbia',
  'AS20162 University of Texas at Dallas',
  'AS1851 The University of Adelaide',
  'AS23859 University of New South Wales',
  'AS46543 University of Maryland at Baltimore',
  'AS56132 Monash University,',
  'AS42289 ITMO University',
  'AS2501 The University of Tokyo',
  'AS4158 City University of Hong Kong',
  'AS3363 Hong Kong University of Science and Technology',
  'AS17 Purdue University',
  'AS24371 Jilin University',
  'AS1706 University of Arizona',
  'AS2504 Kyoto University',
  'AS53403 Mount Royal University'
].map((user) => {
  return user.split(' ').slice(1).join(' ');
}).sort()
</script>

<div class="flex flex-col mt-20 px-6">
  <div class="m-auto text-2xl font-bold"> Comments </div>
  <hr class='max-w-[250px] w-[250px] mx-auto mt-4 mb-8' />
  <VPTeamMembers size="small" :members="members" />
</div>

<div class="flex flex-col mt-20">
  <div class="m-auto text-2xl font-bold"> Users </div>
  <hr class='max-w-[250px] w-[250px] mx-auto mt-4 mb-8' />
  <div class="m-auto grid lg:grid-cols-2 grid-cols-1 gap-2">
    <li v-for="(user, index) in users" :key="index">
      {{ user }}
    </li>
  </div>
</div>

<div class="flex flex-col mt-20">
  <div class="m-auto text-2xl font-bold"> Sponsors </div>
  <hr class='max-w-[250px] w-[250px] mx-auto mt-4 mb-8' />
  <div class="flex justify-center space-x-10">
    <img class="my-auto h-20 bg-white" src="/assets/images/sponsors/MacStadium.png" style="box-shadow: none" />
    <img class="my-auto h-10 bg-white" src="/assets/images/sponsors/digitalocean.svg" style="box-shadow: none" />
  </div>
</div>
