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

**当前 manifest 版本为 `{{ version }}`。**

---

在 `package.json` 中，`manifest_version` 字段用于指定插件使用的 API 的版本号，请与你实际安装的 `paperlib-api` 包的版本保持一致。我们推荐始终使用最新的 API 版本。

```json
// package.json
{
  "manifest_version": "x.x.x"
}
``