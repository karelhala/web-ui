/*
 * -----------------------------------------------------------------------\
 * Lumeer
 *
 * Copyright (C) since 2016 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * -----------------------------------------------------------------------/
 */

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {StaticTableComponent} from './static-table/static-table.component';
import {TableHeaderComponent} from './static-table/table-header.component';
import {TableRowComponent} from './static-table/table-row.component';
import {HeaderActions} from './static-table/header-actions.component';
import {HeaderTitle} from './static-table/header-title.componet';
import {AutoComplete} from '../auto-complete/autocomplete.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AutoComplete
  ],
  declarations: [
    StaticTableComponent,
    TableHeaderComponent,
    HeaderActions,
    HeaderTitle,
    TableRowComponent,
  ],
  exports: [
    StaticTableComponent
  ]
})
export class TableModule {

}
