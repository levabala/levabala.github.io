cd ../nugareact2
yarn build
cat src/CurrentVersion.json

cd ../levabala.github.io
find . -name "*.bak" -type f -delete
cp -r ../nugareact2/dist/. ./
./commit.sh
