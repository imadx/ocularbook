#!/bin/sh

(
  cd node_modules/ocularbook
  
  VITE_STORIES_BASE_DIRECTORY=/tmp/stories
  rm -f ./external-stories-aimevoli
  ln -s $VITE_STORIES_BASE_DIRECTORY ./external-stories-aimevoli
  
  VITE_OCULARBOOK_SOURCES=$output npm run dev
)
