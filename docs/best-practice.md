# Best practice guide


#### Running the backend behind nginx
Visual representation
![](img/157492467-bdcafc6d-06f4-4add-9c69-4fbd6b4169d8.jpg)

1) Install the nginx webserver
```sh
yum install nginx -y
```

2) Create a nginx configuration file `/etc/nginx/conf.d/open-haus.conf`:
```
server {

    listen 80;
    server_name 127.0.0.1 localhost open-haus.lan;

    # remove server version
    server_tokens off;

    root /opt/OpenHaus/frontend;

    try_files $uri $uri/ =404;
    index index.html;

    autoindex off;

    location ~ ^/(api|auth)/ {
        proxy_pass http://127.0.0.1:8080/;
    }
}
```

!> Be sure to create the root folder `/opt/OpenHaus/frontend` if you dont serve the frontend<br />
This is not neccesary if you symlink the latest version of the frontend. Analog to the backend installation process

1) Enable autostart
```sh
systemctl enable --now nginx
systemctl status nginx
```

4) Test the configuration
```sh
curl -v http://127.0.0.1
```