#!/bin/sh

VITE_STORIES_BASE_DIRECTORY=$(pwd)

(
  cd node_modules/ocularbook

  rm -f ./external-stories-aimevoli
  ln -s $VITE_STORIES_BASE_DIRECTORY ./external-stories-aimevoli

  VITE_OCULARBOOK_SOURCES=$output npm run dev
)
