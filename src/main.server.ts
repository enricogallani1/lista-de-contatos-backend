import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { CreateContactComponent } from './app/create-contact/create-contact.component';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
