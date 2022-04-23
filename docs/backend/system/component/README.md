<div class="mb-0">
    🔗 <a class="source-code" target="_blank"
        href="https://github.com/OpenHausIO/backend/blob/dev&#x2F;system&#x2F;component&#x2F;index.js">index.js</a>
</div>
<hr style="margin: 0 !important" />

<!-- CLASS -->

<!-- GENERAL -->
<!-- CLASS -->



<!-- METHODS -->
<!-- METHODS -->



<!-- DESCRIPTION -->

### Description:

This describes the component staff in the system folder.<br />
Every component depends on this classes and inherits all properties/methods.

The `index.js` file is just a short cut to the class files:


##### Examples
    
```js
const BASE = require("./class.base.js");
const COMMON = require("./class.common.js");
const COMPONENT = require("./class.component.js");

module.exports = {
    BASE,
    COMMON,
    COMPONENT
};
```

<!-- DESCRIPTION -->