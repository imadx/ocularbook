#!/bin/sh

VITE_STORIES_BASE_DIRECTORY=/tmp/stories
ln -s $VITE_STORIES_BASE_DIRECTORY ./external-stories  

VITE_OCULARBOOK_SOURCES=$output npm run dev
