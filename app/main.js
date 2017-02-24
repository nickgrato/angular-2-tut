// main entry point
"use strict";
/*NOTE: This is the app entery point. This file really only needs to be touched one time
that is to iport your root module in this case AppModule and 'bootstrapping' the aplication
to that module. THAT'S IT.
*/
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app.module");
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map