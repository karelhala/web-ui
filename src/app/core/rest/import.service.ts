/*
 * Lumeer: Modern Data Definition and Processing Platform
 *
 * Copyright (C) since 2017 Answer Institute, s.r.o. and/or its affiliates.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Store} from '@ngrx/store';

import {Observable} from 'rxjs/Observable';
import {Collection} from '../dto/collection';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';
import {LumeerError} from '../error/lumeer.error';
import {catchError} from 'rxjs/operators';
import {Workspace} from '../store/navigation/workspace.model';
import {AppState} from '../store/app.state';
import {selectWorkspace} from '../store/navigation/navigation.state';
import {ImportedCollection} from "../dto/imported-collection";

@Injectable()
export class ImportService {

  private workspace: Workspace;

  constructor(private http: HttpClient,
              private store: Store<AppState>) {
    this.store.select(selectWorkspace).subscribe(workspace => this.workspace = workspace);
  }

  public importFile(format: string, importedCollection: ImportedCollection): Observable<Collection> {
    const queryParams = new HttpParams().set('format', format);

    return this.http.post<Collection>(this.apiPrefix(), importedCollection, {params: queryParams})
      .pipe(catchError(ImportService.handleGlobalError));
  }

  private static handleGlobalError(error: HttpErrorResponse): ErrorObservable {
    throw new LumeerError(error.message);
  }

  private apiPrefix(): string {
    const organizationCode = this.workspace.organizationCode;
    const projectCode = this.workspace.projectCode;

    return `/${API_URL}/rest/organizations/${organizationCode}/projects/${projectCode}/import`;
  }

}
