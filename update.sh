cd ../nugareact2
yarn build

cd ../levabala.github.io
cp -a ../nugareact2/. ./
./commit.sh
