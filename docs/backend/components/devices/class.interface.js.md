<div class="mb-0">
    🔗 <a class="source-code" target="_blank"
        href="https://github.com/OpenHausIO/backend/blob/dev&#x2F;components&#x2F;devices&#x2F;class.interface.js">class.interface.js</a>
</div>
<hr style="margin: 0 !important" />

<!-- CLASS -->

<!-- GENERAL -->
## `class` Interface 
### Description:

Implements a interface item, that hides a duplex stream in it, to read/write data from a device interface

<!-- GENERAL -->

<!-- PARAMETER -->
#### Parameter:
| Parameter | Type       | Description    |
| :-------- | :--------- |:------------- |
| obj | `Object` |  Object that matches the item schema. See properties below: |
| stream | `InterfaceStream` |  Instance of a InterfaceStream object |
<!-- PARAMETER -->

<!-- PROPERTIES -->
#### Properties:
| Name | Type | Description |
| :---- | :-------- | :----------- |
| _id | `String` | MongoDB Object id is as string |
| type | `String` | Type of the interface, `SERIAL` or `ETHERNET` |
| settings | `Object` | Interface specifiy type settings. |
| adapter | `Array` | Array of adapter to use for encoding/decoding data: `base64`, `eiscp`, `json`, `raw` |
<!-- PROPERTIES -->

<!-- EVENTS -->
<!-- EVENTS -->

<!-- EXAMPLES -->
<!-- EXAMPLES -->

<!-- LINKS -->
#### See:
- [interfaceStream](/backend/components/devices/class.interfaceStream.js)<br />
- [https://github.com/OpenHausIO/backend/blob/dev/components/devices/class.interface.js#L27](https://github.com/OpenHausIO/backend/blob/dev/components/devices/class.interface.js#L27)<br />
- [https://github.com/OpenHausIO/backend/blob/dev/components/devices/class.interface.js#L40](https://github.com/OpenHausIO/backend/blob/dev/components/devices/class.interface.js#L40)<br />
<!-- LINKS -->

<!-- CLASS -->



<!-- METHODS -->
### Methods:
####  .schema();  `static`  

| Parameter | Type       | Description    |
| :-------- | :--------- |:------------- |


Interface schema 


*Returns*  `Object`    https://joi.dev/api/?v=17.6.0#anyvalidatevalue-options 


<!-- LINKS -->
<!-- LINKS -->

####  .httpAgent(options);  

| Parameter | Type       | Description    |
| :-------- | :--------- |:------------- |
| options | `Object` |  httpAgent options |


Creates a custom http agent which use the underalying interfaceStream to forward data


*Returns*  `Object`    httpAgent object



<!-- LINKS -->
##### See:
- [https://nodejs.org/dist/latest-v16.x/docs/api/http.html#new-agentoptions](https://nodejs.org/dist/latest-v16.x/docs/api/http.html#new-agentoptions)<br />
<!-- LINKS -->

<!-- METHODS -->



<!-- DESCRIPTION -->
<!-- DESCRIPTION -->