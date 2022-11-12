---
title: "Release Note"
---

<script setup>

import { onMounted, onUnmounted } from 'vue';

onMounted(() => {
  var xhr= new XMLHttpRequest();
  xhr.open('GET', 'https://objectstorage.uk-london-1.oraclecloud.com/n/lrarf8ozesjn/b/bucket-20220130-2329/o/distribution%2Felectron-mac%2Fchangelog_en.html', true);
  xhr.onreadystatechange= function() {
      if (this.readyState==4 && this.status==200)                
          document.getElementById('release-note').innerHTML= this.responseText;
  };
  xhr.send();
})

const donwloadUrls = [{
  name: 'macOS (Intel)',
  url: 'https://paperlib.app/distribution/electron-mac/latest.dmg'
},
{
  name: 'macOS (silicon)',
  url: 'https://paperlib.app/distribution/electron-mac-arm/latest.dmg'
},
{
  name: 'Windows',
  url: 'https://paperlib.app/distribution/electron-win/latest.zip'
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

<div class='flex'>
<div id="release-note"></div>
</div> 