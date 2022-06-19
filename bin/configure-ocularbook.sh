#!/bin/sh

VITE_STORIES_BASE_DIRECTORY=$(pwd)

(
  cd node_modules/ocularbook
  node "./bin/configure-package-json.js" "${VITE_STORIES_BASE_DIRECTORY}/package.json"
)
