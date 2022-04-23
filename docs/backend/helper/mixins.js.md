<div class="mb-0">
    🔗 <a class="source-code" target="_blank"
        href="https://github.com/OpenHausIO/backend/blob/dev&#x2F;helper&#x2F;mixins.js">mixins.js</a>
</div>
<hr style="margin: 0 !important" />

<!-- CLASS -->

<!-- GENERAL -->
<!-- CLASS -->



<!-- METHODS -->
### Methods:
####  .mixins(objs, options, options.transparent, options.setPrototype, lookup);  

| Parameter | Type       | Description    |
| :-------- | :--------- |:------------- |
| objs | `Array` |  Array of objects to "merge" |
| options | `Object` |  Options object |
| options.transparent | `Boolean` |  Hide "overlay" objects, merge everything into a single object. If false: Merge return single object, with "root" obj set as protoype true: Use a proxy for requests, "hide" everything, only visible object is "root", like the opposite as "false" |
| options.setPrototype | `Boolean` |  Set prototype of newly created object to `obs[1]`, all other properties a merged/overriden |
| lookup | `Function` |  Lookup callback for transparent mode |


Mix/merge a bunch of objects
 

*Returns*  `Object,Proxy`    Returns a proxy or wrapper object where items are merged


<!-- LINKS -->
<!-- LINKS -->

<!-- METHODS -->



<!-- DESCRIPTION -->
<!-- DESCRIPTION -->