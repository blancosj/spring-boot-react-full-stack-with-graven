#!/bin/bash
# Script to build the images and containers

## Remove all
docker-compose down --rmi all

## Build docker image for frontend
(cd ../../frontend && exec npm run build)
(cd ../../frontend && exec docker build -t frontend .)

DOCKER_IMG_PATH=docker-image-frontend.tar.gz
PACKAGE_FILE=package.tar.gz

## Save image
(cd . && exec docker save -o ${DOCKER_IMG_PATH} frontend)

du -hs ${DOCKER_IMG_PATH}

tar -czvf ${PACKAGE_FILE} docker-compose.yml ${DOCKER_IMG_PATH} nginx.conf

du -hs ${PACKAGE_FILE}

echo "OK"
