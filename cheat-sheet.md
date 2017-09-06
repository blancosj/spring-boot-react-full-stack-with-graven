## Docker

- Stop all containers
docker stop $(docker ps -a -q)
- Remove all containers
docker rm $(docker ps -a -q)
- Remove all anonymous images
docker rmi $(docker images -f dangling=true -q)
