---
layout: home

hero:
  name: Paperlib
  text: to organise academic papers decently. 
  tagline: 一个简单好用的论文管理工具。
  image:
    src: /assets/images/ui.png
    alt: PaperlibUI
  actions:
    - theme: brand
      text: 使用指南
      link: ./doc/getting-started
    - theme: alt
      text: 下载
      link: ./download
    - theme: alt
      text: 捐赠
      link: ./donate


features:
- title: 自动检索元数据
  details: 接入各学科数据库用于匹配论文元数据，逐步为每一个学科（例如计算机科学，物理学等）定制化数据库组合提高检索精度。尤其是精准的会议论文元数据检索能力
- title: 管理你的论文
  details: 为论文评分，分配标签、组，方便进行分类检索。支持 markdown 和纯文本笔记
- title: 导出引用
  details: 导出论文引用到 BibTex 或者 Plain Text 格式，快速导出插件让你一键复制 BibTex。同时支持 Word 插件
- title: 插件系统
  details: 开发并发布你自己的插件吧！
- title: RSS 订阅
  details: 订阅 RSS 信息流来获取最新论文
- title: 现代UI，多平台、云同步
  details: 支持 macOS, Linux 和 Windows。现代化简介美观的 UI。数据库云同步功能，跨平台随处访问您的论文库
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
  <div class="m-auto text-2xl font-bold"> 
    评价
  </div>
  <hr class='max-w-[250px] w-[250px] mx-auto mt-4 mb-8' />
  <VPTeamMembers size="small" :members="members" />
</div>

<div class="flex flex-col mt-20">
  <div class="m-auto text-2xl font-bold"> 用户 </div>
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