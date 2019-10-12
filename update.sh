cd ../nugareact2
yarn build

cd ../levabala.github.io
find . -name "*.bak" -type f -delete
cp -r ../nugareact2/dist/. ./
./commit.sh
