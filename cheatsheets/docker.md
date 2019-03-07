---
path: "/docker"
title: "Docker"
---

# Docker

| <ins>Commands</ins> | <ins>Descriptions</ins> |
| --- | --- |
| <br /><br /> |
| `docker pull [image]:[tag]` | Pulls an image from a registry. <br />Eg. `docker pull php:7.3` will pull an image of PHP version 7.3 |
| `docker build .` | Build an image from a Dockerfile |
| `docker build -t <tag> .` | Build an image and assign it a tag. Eg., `docker build -t myapp:v1 .` |
| `docker ps` | List all running containers |
| `docker ps -a` | List all containers including stopped containers |
| `docker container prune` | Remove all stopped containers |
| `docker cp <container id>:<file path within container> <host path>` | Copy file from container to host. Eg., `docker cp app-postgres:/tmp/backup.sql ~/` |
