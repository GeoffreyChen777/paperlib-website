cd ./cn && npm i && npm run docs:build && cd ..
cd ./en && npm i && npm run docs:build && cd ..
mkdir site && mkdir site/cn && mkdir site/en
cp -r ./cn/docs/.vitepress/dist/* ./site/cn/
cp -r ./en/docs/.vitepress/dist/* ./site/en/