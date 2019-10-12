cd ../nugareact2
yarn build

cd ../levabala.github.io
cp -r ../nugareact2/dist/. ./
./commit.sh
