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

export class Document {

  public id: string;
  public collectionId: string;
  public creationDate?: Date; // TODO Date is currently in MongoDb format
  public updateDate?: Date; // Date is currently in MongodDb format
  public createdBy?: string;
  public updatedBy?: string;
  public dataVersion?: number;
  public data: {[attribute: string]: any} = {};
  public favorite?: boolean;

}
