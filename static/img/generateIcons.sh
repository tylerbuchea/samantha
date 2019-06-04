#!/bin/bash

# Icon generated using https://gauger.io/fonticon/

convert favicon.png \
-resize 16x16 \
favicon-16x16.png

convert favicon.png \
-resize 32x32 \
favicon-32x32.png

convert favicon.png \
-resize 140x140 \
-gravity center \
-background white \
-extent 180x180+0+0  \
apple-touch-icon.png