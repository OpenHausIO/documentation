<div class="mb-0">
    🔗 <a class="source-code" target="_blank"
        href="https://github.com/OpenHausIO/backend/blob/dev&#x2F;system&#x2F;component&#x2F;class.base.js">class.base.js</a>
</div>
<hr style="margin: 0 !important" />

<!-- CLASS -->

<!-- GENERAL -->
## `class` BASE 
### Description:

Base class for all components.<br />
Provides basic properties & handle initialization phase.

<!-- GENERAL -->

<!-- PARAMETER -->
<!-- PARAMETER -->

<!-- PROPERTIES -->
#### Properties:
| Name | Type | Description |
| :---- | :-------- | :----------- |
| ready | `Boolean` | Indicate if the component is ready to use |
| events | `EventEmitter` | node.js EventEmitter instance |
| hooks | `Object` | Hooks class instance |
<!-- PROPERTIES -->

<!-- EVENTS -->
#### Events:
| Name | Description |
| :---- | :----------- |
| ready | When ready to use |
| error | When something happend while initzilizliz |
<!-- EVENTS -->

<!-- EXAMPLES -->
<!-- EXAMPLES -->

<!-- LINKS -->
#### See:
- [Hooks](/backend/system/hooks.js)<br />
- [https://nodejs.org/dist/latest-v16.x/docs/api/events.html#class-eventemitter](https://nodejs.org/dist/latest-v16.x/docs/api/events.html#class-eventemitter)<br />
<!-- LINKS -->

<!-- CLASS -->



<!-- METHODS -->
### Methods:
####  .init(cb);  

| Parameter | Type       | Description    |
| :-------- | :--------- |:------------- |
| cb | `Function` |  Worker callback |


Init the component, like fill the `.items` array


*Returns*   `undefined`   


<!-- LINKS -->
<!-- LINKS -->

<!-- METHODS -->



<!-- DESCRIPTION -->
<!-- DESCRIPTION -->