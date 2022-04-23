<div class="mb-0">
    🔗 <a class="source-code" target="_blank"
        href="https://github.com/OpenHausIO/backend/blob/dev&#x2F;components&#x2F;endpoints&#x2F;class.endpoint.js">class.endpoint.js</a>
</div>
<hr style="margin: 0 !important" />

<!-- CLASS -->

<!-- GENERAL -->
## `class` Endpoint 
### Description:

Endpoint item, stored in the component `.items` Array.

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
| _id | `String` | MongoDB ObjectID as String |
| name | `String` | User friendly name |
| enabled | `Boolean` | Is hits item active? |
| room | `String` | MongoDB ObjectID as String |
| device | `String` | MongoDB ObjectID as String |
| commands | `Commands` | Commands Array |
| states | `States` | States Array |
| identifier | `String` | Machine readable/hardcoded identifier |
| icon | `String` | [Fontawesome](https://fontawesome.com/) icon class |
<!-- PROPERTIES -->

<!-- EVENTS -->
<!-- EVENTS -->

<!-- EXAMPLES -->
<!-- EXAMPLES -->

<!-- LINKS -->
#### See:
- [Rooms](/backend/components/rooms/)<br />
- [Devices](/backend/components/devices/)<br />
- [InterfaceStream](/backend/components/devices/class.interfaceStream.js)<br />
<!-- LINKS -->

<!-- CLASS -->



<!-- METHODS -->
<!-- METHODS -->



<!-- DESCRIPTION -->
<!-- DESCRIPTION -->