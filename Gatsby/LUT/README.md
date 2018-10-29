# LevelUpTuts

## Docker Dev Environment
```
# Build Docker Image
docker image build -t gatsby_dev .

# Docker run in detached while mounted to current working directory via port 8080
docker container run -dit -p 8000:8000 -p 3000:3000 -v $(pwd):/usr/workspace --name dev_env gatsby_dev

# Run in interactive
docker container exec -it dev_env bash

# Start container
docker container start dev_env

# Stop Container
docker container stop dev_env

# Remove Container
docker container rm dev_env

# Remove Image
docker image remove ubuntu_image

# Remove All Image
docker rm -f $(docker ps -aq) 


```

## Gatsby command

New Project
```
gatsby new gatsbyLUT
```


## Run Gatsby dev and expose to host
```
# map gatsby to host on 0.0.0.0
gatsby develop -H 0.0.0.0 -p 8000
```


