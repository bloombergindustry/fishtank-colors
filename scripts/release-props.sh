#!/usr/bin/env bash
# Bamboo release tasks must know the version we're bumping to ahead of time. This script
# outputs that to a file which can then be injected in the build task.
set -euo pipefail
preset=${1:-angular}

level=$(conventional-recommended-bump -p $preset)
next_version=$(semver --increment $level $npm_package_version)

printf 'CURR_VERSION=%q\n' $npm_package_version
printf 'NEXT_VERSION=%q\n' $next_version
printf 'GIT_HEAD=%q\n' $(git rev-parse HEAD)
