cd ./cn && npm i && npm run docs:build && cd ..
cd ./en && npm i && npm run docs:build && cd ..
mkdir site
cp -r ./cn/docs/.vitepress/dist ./site/
cp -r ./en/docs/.vitepress/dist ./site/