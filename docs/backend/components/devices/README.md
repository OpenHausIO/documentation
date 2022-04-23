<div class="mb-0">
    🔗 <a class="source-code" target="_blank"
        href="https://github.com/OpenHausIO/backend/blob/dev&#x2F;components&#x2F;devices&#x2F;index.js">index.js</a>
</div>
<hr style="margin: 0 !important" />

<!-- CLASS -->

<!-- GENERAL -->
## `class` C_DEVICES  `extends`  [COMPONENT](backend/system/component/class.component.js)  
### Description:

Device component class<br />
Represents a device instance in the component `.items` Array.

<!-- GENERAL -->

<!-- PARAMETER -->
<!-- PARAMETER -->

<!-- PROPERTIES -->
<!-- PROPERTIES -->

<!-- EVENTS -->
<!-- EVENTS -->

<!-- EXAMPLES -->
#### Examples:
        
```js
const C_DEVICES = require(".../component/devices/");

C_DEVICES.find({
  enabled: true
}).then((devices) => {
  console.log(devices);
}).catch((err) => {
  console.log(err);
});
```

        
```json
[
    {
        "_id": "625c307b26cdd30f007989ca",
        "name": "Samsung Fridge",
        "interfaces": [
            {
                "type": "ETHERNET",
                "settings": {
                    "host": "172.16.5.23",
                    "port": 8080,
                    "socket": "tcp",
                    "mac": null
                },
                "_id": "625c307b26cdd30f007989cb",
                "adapter": [
                    "raw"
                ]
            }
        ],
        "timestamps": {
            "created": 1650208891581,
            "updated": null
        },
        "room": null,
        "enabled": true
    },
    {
        "name": "ZigBee Gateway",
        "interfaces": [
            {
                "type": "ETHERNET",
                "description": "RESTful API",
                "settings": {
                    "host": "172.16.4.12",
                    "port": 80,
                    "socket": "tcp",
                    "mac": null
                },
                "_id": "625c311123ed9311d25efbec",
                "adapter": [
                    "raw"
                ]
            },
            {
                "type": "ETHERNET",
                "description": "WebSocket API",
                "settings": {
                    "host": "172.16.4.12",
                    "port": 443,
                    "socket": "tcp",
                    "mac": null
                },
                "_id": "625c311123ed9311d25efbed",
                "adapter": [
                    "raw"
                ]
            }
        ],
        "timestamps": {
            "created": 1650209041327,
            "updated": null
        },
        "_id": "625c311123ed9311d25efbeb",
        "room": null,
        "enabled": true
    },
    {
        "name": "AV Receiver",
        "interfaces": [
            {
                "type": "ETHERNET",
                "description": "eISCP Interface",
                "settings": {
                    "host": "192.168.2.10",
                    "port": 60128,
                    "socket": "tcp",
                    "mac": null
                },
                "adapter": [
                    "eiscp"
                ],
                "_id": "625c330e23ed9311d25efbef"
            }
        ],
        "timestamps": {
            "created": 1650209550659,
            "updated": null
        },
        "_id": "625c330e23ed9311d25efbee",
        "room": null,
        "enabled": true
    }
]
```

<!-- EXAMPLES -->

<!-- LINKS -->
<!-- LINKS -->

<!-- CLASS -->



<!-- METHODS -->
<!-- METHODS -->



<!-- DESCRIPTION -->
<!-- DESCRIPTION -->