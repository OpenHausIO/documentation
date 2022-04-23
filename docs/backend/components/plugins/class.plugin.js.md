<div class="mb-0">
    🔗 <a class="source-code" target="_blank"
        href="https://github.com/OpenHausIO/backend/blob/dev&#x2F;components&#x2F;plugins&#x2F;class.plugin.js">class.plugin.js</a>
</div>
<hr style="margin: 0 !important" />

<!-- CLASS -->

<!-- GENERAL -->
## `class` Plugin 
### Description:

Represents a single plugin item that is stored in the components `.items` array.

<!-- GENERAL -->

<!-- PARAMETER -->
#### Parameter:
| Parameter | Type       | Description    |
| :-------- | :--------- |:------------- |
| obj | `Object` |  Object that matches the item schema. See properties below: |
<!-- PARAMETER -->

<!-- PROPERTIES -->
#### Properties:
| Name | Type | Description |
| :---- | :-------- | :----------- |
| _id | `String` | MongoDB Object id is as string |
| name | `String` | Human readable name |
| uuid | `String` | UUIDv4 that is used a unique identifier and file/folder name on the filesystem |
| version | `Number` | Version number of the plugin. e.g. `1.2`, `0.4` |
| autostart | `Boolean` | Start the plugin after the backend has initzialized successful? |
| enabled | `Boolean` | Indicates if this thing can do anything |
<!-- PROPERTIES -->

<!-- EVENTS -->
<!-- EVENTS -->

<!-- EXAMPLES -->
<!-- EXAMPLES -->

<!-- LINKS -->
<!-- LINKS -->

<!-- CLASS -->



<!-- METHODS -->
### Methods:
####  .boot();  

| Parameter | Type       | Description    |
| :-------- | :--------- |:------------- |


Start/boot installed plugin

*Returns*   `undefined`   


<!-- LINKS -->
<!-- LINKS -->

<!-- METHODS -->



<!-- DESCRIPTION -->
<!-- DESCRIPTION -->