#!/bin/bash
#author       :blanco
#version      :1.0
#Script to build the images and containers

if [ "$#" -eq "0" ]
then
  help=true
fi

while [ $# -ne 0 ]
do
  arg="$1"
  case "$arg" in
    run)
      run=true
      ;;
    compile)
      compile=true
      ;;
    --help)
      help=true
      ;;
    *)
      ;;
  esac
  shift
done

if [ "$help" == true ]; then
  echo usage: sh go.sh [compile] [docker] [run]
  echo arguments:
  echo . compile  - compile projects
  echo . run      - run containers
  echo
fi

if [ "$compile" == true ]; then
  (cd frontend && exec npm run build)
fi

if [ "$run" == true ]; then
  (cd devops && exec docker-compose up frontend)
fi
