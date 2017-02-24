// main entry point

/*NOTE: This is the app entery point. This file really only needs to be touched one time
that is to iport your root module in this case AppModule and 'bootstrapping' the aplication
to that module. THAT'S IT.
*/

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
