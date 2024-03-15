---
title: "更新日志"
---

<script setup>

import { onMounted, onUnmounted } from 'vue';

onMounted(async () => {
  const response = await fetch('https://api.paperlib.app/release-notes/html?lang=CN');
  const html = await response.text();
  document.getElementById('release-note').innerHTML = html;
})

const donwloadUrls = [{
  name: 'macOS (Intel)',
  url: 'https://distribution.paperlib.app/electron-mac/latest.dmg'
},
{
  name: 'macOS (silicon)',
  url: 'https://distribution.paperlib.app/electron-mac-arm/latest.dmg'
},
{
  name: 'Windows',
  url: 'https://distribution.paperlie.app/electron-win/latest.zip'
},
{
  name: 'Linux',
  url: ''
}
]

</script>

<style>

#release-note {
  font-size: 14px;
  font-weight: 400;
}

#release-note h1,h2 {
  font-size: 1.5rem;
}

#release-note  li{
  line-height: 1.2;
}

</style>

<div class='flex flex-col'>
<div><a href="https://paperlib.app/release-notes/rss" target="_blank" rel="noopener"><p>Release Note RSS Feed</p></a></div>
<div id="release-note"></div>
</div> 
