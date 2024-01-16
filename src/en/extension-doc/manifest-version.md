---
title: "Manifest Version"
---

<script setup>

import { onMounted, onUnmounted, ref } from 'vue';

const version = ref('')

onMounted(async () => {
  const response = await fetch('https://raw.githubusercontent.com/Future-Scholars/paperlib/dev-3.0.0/paperlib-api/package.json');
  const pkgInfo = await response.json();
  version.value = pkgInfo.version;
  console.log(version.value)
})
</script>

# Manifest Version

**The current manifest version is `{{ version }}`.**

---

The `manifest_version` field must be included in `package.json` to indicate the API version used by the extension. Please keep it consistent with the version of the `paperlib-api` package you actually installed. We recommend that you always use the latest API version.

```json
// package.json
{
  "manifest_version": "x.x.x"
}
``