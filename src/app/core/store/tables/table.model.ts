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

export const DEFAULT_TABLE_ID = 'default';

export const DEFAULT_COLUMN_WIDTH = 100;

export interface TableModel {

  id: string;
  linkInstanceId?: string;

  parts: TablePart[];

  selectedCell?: SelectedTableCell;

}

export interface TablePart {

  index: number;
  collectionId?: string;
  linkTypeId?: string;

  columns: TableColumn[];
  columnDepth: number;

}

export enum TableColumnType {

  COMPOUND = 'compound',
  HIDDEN = 'hidden'

}

export interface TableColumn {

  type: TableColumnType;

}

export class TableSingleColumn {

  public constructor(public attributeId: string,
                     public width: number = DEFAULT_COLUMN_WIDTH) {
  };

}

export class TableCompoundColumn implements TableColumn {

  public readonly type = TableColumnType.COMPOUND;

  public constructor(public parent: TableSingleColumn,
                     public children: TableColumn[]) {
  };

}

export class TableHiddenColumn implements TableColumn {

  public readonly type = TableColumnType.HIDDEN;

  public constructor(public attributeIds: string[]) {
  };

}

export interface SelectedTableCell {

  partIndex: number;
  columnPath: number[];

}

export interface TableConfig {

  parts: TableConfigPart[]

}

export interface TableConfigPart {

  collectionId?: string;
  linkTypeId?: string;
  columns: TableConfigColumn[];

}

export interface TableConfigColumn {

  type: TableColumnType;
  attributeIds: string[];
  width?: number;
  children?: TableConfigColumn[];

}
