message=${1:-patch update}
target=${2:-master}

git add ./
git commit -m "$message"
git push origin "$target"