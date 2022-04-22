# Docker documentation


- [Docker documentation](#docker-documentation)
  - [Images](#images)
    - [Import the image](#import-the-image)
    - [Export a image](#export-a-image)
    - [Build the backend image<sup>*</sup>](#build-the-backend-imagesupsup)
  - [Container](#container)
    - [Start a backend container](#start-a-backend-container)
    - [5) Use `docker-compose up`<sup>*</sup>](#5-use-docker-compose-upsupsup)

---

## Images
### Import the image
Get the latest docker image from the release page: https://github.com/OpenHausIO/backend/releases/
```sh
gzip -cdr docker-image-v1.0.0.tgz | docker image import - openhaus/backend:latest
```

### Export a image
```sh
docker image save openhaus/backend:latest | gzip > docker-image-v1.0.0.tgz
```

### Build the backend image<sup>*</sup>
```sh
npm run build:docker-image
```

----


## Container
### Start a backend container
```sh
docker run --rm --name=backend --env=DATABASE_HOST=<database host> --expose 8080 openhaus/backend
```
See [environment variables](administration/configuration) for more configuration.

### 5) Use `docker-compose up`<sup>*</sup>
```sh
docker-compose up
```

> To import the sample database dump:<br />
> `docker cp demo-database.gz  backend_database_1:/` <br />
> `docker exec -i backend_database_1 mongorestore --archive=/demo-database.gz`

----
<sup>*</sup> Commands must be run inside the source code folder.<br />
(Download it from github: https://github.com/OpenHausIO/backend)