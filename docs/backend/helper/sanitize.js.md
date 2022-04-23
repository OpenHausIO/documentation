<div class="mb-0">
    🔗 <a class="source-code" target="_blank"
        href="https://github.com/OpenHausIO/backend/blob/dev&#x2F;helper&#x2F;sanitize.js">sanitize.js</a>
</div>
<hr style="margin: 0 !important" />

<!-- CLASS -->

<!-- GENERAL -->
<!-- CLASS -->



<!-- METHODS -->
### Methods:
####  .encode(str, rules);  

| Parameter | Type       | Description    |
| :-------- | :--------- |:------------- |
| str | `String` |  String to encode |
| rules | `Array` |  Additional array of rules to apply |


Encode/replace a string 
 

*Returns*  `String`    Returns the encoded string


##### Examples
    
```js * 
const { encode } = require(".../helper/sanitize");

encode("<harmful> ../../etc/passwd string"); // &lt;harmful&gt; ..&#x2F;..&#x2F;etc&#x2F;passwd string
```

<!-- LINKS -->
<!-- LINKS -->

####  .decode(str, rules);  

| Parameter | Type       | Description    |
| :-------- | :--------- |:------------- |
| str | `String` |  Input string |
| rules | `Array` |  Additional array of rules to apply |


Decode a encoded string
 

*Returns*  `String`    Returns the decoded string


##### Examples
    
```js
const { decode } = require(".../helper/sanitize");

decode("&gt; Hello World &lt;"); // > Hello World <
```

<!-- LINKS -->
<!-- LINKS -->

<!-- METHODS -->



<!-- DESCRIPTION -->
<!-- DESCRIPTION -->