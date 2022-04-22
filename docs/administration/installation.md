# Installation

This gude describes the basic installation of the backend.<br />
Keep in mind that this is the absolute minimal installations steps that you must do.<br />
There are more configuration possibilitys, like running the backend behind nginx, serve from the same host the frontend, etc.

The purpose of this installation instrucations is to give you a "ready to use" application. See [Best practice](best-practice.md) guide for further information.

### Requirements
- Linux Host (Dosnt really matter what Distribution, suggest CentOS/Rocky Linux, but Debian/Ubuntu is also fine)
- [Node.js](https://nodejs.org) installed
- [MongoDB](https://www.mongodb.com) up & running
> NOTE: All commands/examples are for Redhat/CentOS based distros.<br />
> If you use a Debian/Ubuntu based distro (or other) please adapt the provided commands

### Prepare the Host
Install needed software:
```sh
yum install -y wget curl tar pwgen uuid vim
```

1) First create a directory where the OpenHaus backend is stored
```bash
mkdir /opt/OpenHaus/
```

2) Download & extract the latest OpenHaus release from GitHub
```bash
wget "https://github.com/OpenHausIO/backend/releases/download/v1.0.0/backend-v1.0.0.tgz"
tar -zxvf -C /opt/OpenHaus/backend-v1.0.0 backend-v1.0.0.tgz
```

3) Install npm dependencies
```bash
cd /opt/OpenHaus/backend-v1.0.0
NODE_ENV=production npm install
```
A quick test with `npm start` should show something like that:
```bash
Starting OpenHaus vX.X.X...
...
```
The error message is fine, since we need to configure some [environment variables](configuration.md).

4) Create a symlink to link the latest version to `/opt/OpenHaus/backend`
```bash
ln -s /opt/OpenHaus/backend-v1.0.0 /opt/OpenHaus/backend
```

5) Create a systemd unit file, to run the backend after reboots
```systemd
cat << EOF > /lib/systemd/system/open-haus.service
[Unit]
Description=OpenHaus SmartHome/IoT backend
Documentation=https://open-haus.io
After=network.target
\
[Service]
WorkingDirectory=/opt/OpenHaus/backend
#Environment=DATABASE_HOST=127.0.0.1
#Environment=DATABASE_PORT=27017
Environment=NODE_ENV=production
Environment=VAULT_MASTER_PASSWORD=<password>
Environment=UUID=<uuid:v4>
Type=simple
ExecStart=/usr/bin/node index.js
Restart=on-failure
\
[Install]
WantedBy=multi-user.target
EOF
```

!> Replace `<password>` & `<uuid:v4>` with custom generated values
- Password: `pwgen -cns 32 1`
- UUIDv4: `uuid -v 4`
<br />

See [configuration](configuration.md) for more details about environment variables & configuraiton possibilites.

Reload the systemd deamon to detect the new file
```bash
systemctl daemon-reload
```

Enable & start the backend
```bash
systemctl enable --now open-haus
systemctl status open-haus
```

6) Verify the installation
```bash
curl -v http://127.0.0.1:8080/api/
```

### Further steps:
- [Configuration](configuration.md)
- [Frontend](frontend.md)
- [Best practice](best-practice.md)