#!/usr/bin/env bash
# Push main, wait for the GitHub Pages build of that exact commit, then confirm the site answers.
# Usage: scripts/deploy-check.sh [--smoke]   (--smoke also runs tests/smoke.js against the live URL)
set -euo pipefail
[[ "${1:-}" == "--help" ]] && { sed -n '2,3p' "$0"; exit 0; }
cd "$(dirname "$0")/.."
git push -q
sha=$(git rev-parse HEAD)
for _ in $(seq 1 40); do
  s=$(gh api repos/mikestein2016/celpe-bras-prep/pages/builds/latest --jq '.status+" "+.commit')
  [[ "$s" == "built $sha" ]] && break
  [[ "$s" == errored* ]] && { echo "Pages build errored: $s"; exit 1; }
  sleep 6
done
url="https://mikestein2016.github.io/celpe-bras-prep/"
echo "built $sha → $(curl -s -o /dev/null -w '%{http_code}' "$url")"
[[ "${1:-}" == "--smoke" ]] && node tests/smoke.js "$url?v=$sha" | grep -E "round end|NO ERRORS|ERROR"
exit 0
