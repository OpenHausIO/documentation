## Environment variables
| Name                     | Default value             | Required | Description                                                     |
| ------------------------ | ------------------------- | -------- | --------------------------------------------------------------- |
| UUID                     |                           | x        | Unique v4 UUID to indentify instance                            |
| DATABASE_HOST            | `127.0.0.1`               |          | MongoDB Host                                                    |
| DATABASE_PORT            | `27017`                   |          | MongoDB Port                                                    |
| DATABASE_NAME            | `OpenHaus`                |          | MongoDB Name                                                    |
| DATABASE_URL             |                           |          | Full connection url, if set other database settings are ignored |
| DATABASE_WATCH_CHANGES   | `false`                   |          | Watch for changes in database and update object item            |
| HTTP_PORT                | `8080`                    |          | HTTP Server port for the API                                    |
| HTTP_ADDRESS             | `0.0.0.0`                 |          | HTTP Server Address for the API                                 |
| HTTP_SOCKET              |                           |          | HTTP Server unix socket path, e.g. `/tmp/open-haus.sock`        |
| LOG_PATH                 | `<cwd>/logs`              |          | Path where logfiles are stored                                  |
| LOG_LEVEL                | `verbose`                 |          | Winston log level                                               |
| LOG_DATEFORMAT           | `yyyy.mm.dd - HH:MM.ss.l` |          | Dateformat                                                      |
| LOG_TARGET               |                           |          | Log only specified target, usefull for devs                     |
| NODE_ENV                 | `production`              |          | Production or Development env?                                  |
| STARTUP_DELAY            | `0`                       |          | Wait till we do anything                                        |
| COMMAND_RESPONSE_TIMEOUT | `2000`                    |          | Device command response timeout                                 |
| API_SANITIZE_INPUT       | `true`                    |          | Sanitize HTTP API Input to prevent XSS                          |
| API_LIMIT_SIZE           | `25`                      |          | Max reqeust size in mb for API calls                            |
| DEBUG                    |                           |          |                                                                 |
| GC_INTERVAL              |                           |          |                                                                 |
| VAULT_MASTER_PASSWORD    |                           | x        | Vault component master Password, need to start OpenHaus         |
| VAULT_BLOCK_CIPHER       | `aes-256-cbc`             |          | Vault encryption method                                         |
| VAULT_AUTH_TAG_BYTE_LEN  | `16`                      |          | Vault auth tag length in bytes                                  |
| VAULT_IV_BYTE_LEN        | `16`                      |          | Vault "initial vector" value size in bytes                      |
| VAULT_KEY_BYTE_LEN       | `32`                      |          | Vault key size in bytes                                         |
| VAULT_SALT_BYTE_LEN      | `16`                      |          | Vault salt size in bytes                                        |

To set/edit environment variables edit the systemd unit file:
```bash
vim /lib/systemd/system/open-haus.service
```

Dont forget to reload the systemd daemon & restart the backend to apply the changes
```bash
systemctl daemon-reload
systemctl restart open-haus
```