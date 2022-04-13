# Folder structure
```
backend
├── adapter
├── components
│   ├── devices
│   ├── endpoints
│   ├── rooms
│   └── vault
├── helper
├── routes
├── scripts
├── system
│   ├── component
│   └── logger
└── tests
    ├── helper
    └── system
```

__adapter__: Adapter are stream middleware that "encode/decode","pack/unpack" data that is read&written from a device interface.

__components__: Components are a abstraction layer of handling items, thare are hookable which allow plugins to intetrage into the data flow.

__helper__: The helper folder containes (as the name inidicates) helper scripts that can be used to avoid to include large libraries like `underscore`, `lodash`, `request`, `async`, etc.

__routes__: This folder containes all kind of files that handle the HTTP/WebSockets API requests.

__scripts__: Handy scripts that makes a developer life easier. E.g. to bridge layer 4 connections via WebSocket to the backend
(Does not have any purpose for the functionality of the backend)

__system__: Contains files that are necessary for components to work. Like classes & logger.

__tests__: Unit tests for `system`, `components` & `helper`

<hr />

Folder that are not needed to run the backend:
- __log__ (Store log files, can be anywhere else)
- __plugins__ (If no plugin is installed, then this folder is not needed)