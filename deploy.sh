cd ./cn && npm i && npm run docs:build && cd ..
cd ./en && npm i && npm run docs:build && cd ..
mkdir site
cp -r cn/docs/.vuepress/dist site/cn
cp -r en/docs/.vuepress/dist site/en