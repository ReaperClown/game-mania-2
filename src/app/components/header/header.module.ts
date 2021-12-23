import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { AppBootstrapModule } from 'src/app/modules/app-bootstrap.module';

@NgModule({
  imports: [BrowserModule, AppBootstrapModule],
})
export class HeaderModule {}