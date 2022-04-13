## Classes

<dl>
<dt><a href="#BASE">BASE</a></dt>
<dd></dd>
<dt><a href="#COMMON">COMMON</a> ⇐ <code><a href="#BASE">BASE</a></code></dt>
<dd></dd>
<dt><a href="#COMPONENT">COMPONENT</a> ⇐ <code><a href="#COMMON">COMMON</a></code></dt>
<dd></dd>
</dl>

<a name="BASE"></a>

## BASE
**Kind**: global class  
**Category**: System  
**Emits**: <code>event:ready When ready to use</code>, <code>event:error When something happend while initzilizliz</code>  
**Subcategory**: Component  
**Properties**

| Name   | Type                 | Description                                                                                          |
| ------ | -------------------- | ---------------------------------------------------------------------------------------------------- |
| ready  | <code>Boolean</code> | Indicate if the component is ready to use                                                            |
| events | <code>Object</code>  | node.js [EventEmitter](https://nodejs.org/dist/latest-v16.x/docs/api/events.html#class-eventemitter) |
| hooks  | <code>Object</code>  | system/[hooks](Hooks) class instance                                                                 |


* [BASE](#BASE)
    * [new BASE()](#new_BASE_new)
    * [.init(cb)](#BASE.init)

<a name="new_BASE_new"></a>

### new BASE()
Class description

<a name="BASE.init"></a>

### BASE.init(cb)
Init the component, like fill the .items array

**Kind**: static method of [<code>BASE</code>](#BASE)  

| Param | Type                  | Description     |
| ----- | --------------------- | --------------- |
| cb    | <code>function</code> | Worker callback |

<a name="COMMON"></a>

## COMMON ⇐ [<code>BASE</code>](#BASE)
**Kind**: global class  
**Extends**: [<code>BASE</code>](#BASE)  
**Category**: System  
**Subcategory**: Component  
**Properties**

| Name   | Type                | Description     |
| ------ | ------------------- | --------------- |
| logger | <code>Object</code> | Logger instance |


* [COMMON](#COMMON) ⇐ [<code>BASE</code>](#BASE)
    * [new COMMON()](#new_COMMON_new)
    * [._defineMethod(name, executor)](#COMMON._defineMethod)

<a name="new_COMMON_new"></a>

### new COMMON()
Class description

<a name="COMMON._defineMethod"></a>

### COMMON.\_defineMethod(name, executor)
Defines a hookable/event emitting method on component scope

**Kind**: static method of [<code>COMMON</code>](#COMMON)  

| Param    | Type                  | Description                                         |
| -------- | --------------------- | --------------------------------------------------- |
| name     | <code>String</code>   | Name of the method that gets patche into the scope  |
| executor | <code>function</code> | Wokrer function that does the actual implementation |

<a name="COMPONENT"></a>

## COMPONENT ⇐ [<code>COMMON</code>](#COMMON)
**Kind**: global class  
**Extends**: [<code>COMMON</code>](#COMMON)  
**Category**: System  
**Subcategory**: Component  
**Properties**

| Name       | Type                | Description                                                                                             |
| ---------- | ------------------- | ------------------------------------------------------------------------------------------------------- |
| items      | <code>Array</code>  | Store where instance of items are keept                                                                 |
| collection | <code>Object</code> | MongoDB [collection](https://mongodb.github.io/node-mongodb-native/3.7/api/Db.html#collection) instance |
| schema     | <code>Object</code> | Joi [object schema](https://joi.dev/api/?v=17.6.0#object)                                               |


* [COMPONENT](#COMPONENT) ⇐ [<code>COMMON</code>](#COMMON)
    * [new COMPONENT()](#new_COMPONENT_new)
    * [.add(data)](#COMPONENT.add)
    * [.get(_id)](#COMPONENT.get)
    * [.remove(_id)](#COMPONENT.remove)
    * [.update(_id, data)](#COMPONENT.update)
    * [.find(query)](#COMPONENT.find)

<a name="new_COMPONENT_new"></a>

### new COMPONENT()
Class description

<a name="COMPONENT.add"></a>

### COMPONENT.add(data)
**Kind**: static method of [<code>COMPONENT</code>](#COMPONENT)  
**Emits**: <code>event:add When function has completed</code>  

| Param | Type                | Description                              |
| ----- | ------------------- | ---------------------------------------- |
| data  | <code>Object</code> | Object that matches the component schema |

<a name="COMPONENT.get"></a>

### COMPONENT.get(_id)
**Kind**: static method of [<code>COMPONENT</code>](#COMPONENT)  
**Emits**: <code>event:get When function has completed</code>  

| Param | Type                | Description                      |
| ----- | ------------------- | -------------------------------- |
| _id   | <code>String</code> | Item ObjectId as string (<._id>) |

<a name="COMPONENT.remove"></a>

### COMPONENT.remove(_id)
**Kind**: static method of [<code>COMPONENT</code>](#COMPONENT)  
**Emits**: <code>event:remove When function has completed</code>  

| Param | Type                | Description                                            |
| ----- | ------------------- | ------------------------------------------------------ |
| _id   | <code>String</code> | Removes item with matching ObjectId as string (<._id>) |

<a name="COMPONENT.update"></a>

### COMPONENT.update(_id, data)
**Kind**: static method of [<code>COMPONENT</code>](#COMPONENT)  
**Emits**: <code>event:update When function has completed</code>  

| Param | Type                | Description                              |
| ----- | ------------------- | ---------------------------------------- |
| _id   | <code>String</code> | Item ObjectId as string (<._id>)         |
| data  | <code>Object</code> | Partial object properties to update item |

<a name="COMPONENT.find"></a>

### COMPONENT.find(query)
Find matching item with key/values

**Kind**: static method of [<code>COMPONENT</code>](#COMPONENT)  
**Emits**: <code>event:remove When function has completed</code>  

| Param | Type                | Description                                             |
| ----- | ------------------- | ------------------------------------------------------- |
| query | <code>Object</code> | key/value pair to search for in [.items](#items)  array |

