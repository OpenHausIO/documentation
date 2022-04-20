# Overview

!> Components should **not** be constructed directly! Require/import them, and use them "as-they-are".

Components represents a abstaction of working with "items", thats represents itself a thing.<br />
All components methods are full hookable & emit events when the execution is successful completed.

Following components are provided:
- Devices ([C_DEVICES](backend/components/devices/))
- Endpoints ([C_ENDPOINTS](backend/components/endpoints/))
- Plugins ([C_PLUGINS](backend/components/plugins/))
- Rooms ([C_ROOMS](backend/components/rooms/))
- Vault ([C_VAULT](backend/components/vault/))

Each component can be used as they are and no construction is needed.<br />
On the contrary, it is not recommended to initialize the component manually!

Each component can be reached via HTTP over `<host>/api/<component>`.<br />
The HTTP API allows to listen for events and manipulate items with the full pre/post hooks.<br />
To learn more about the HTTP API we provide a [postman collection](https://github.com/OpenHausIO/backend/blob/dev/postman.json).