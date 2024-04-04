import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatExpansionModule} from '@angular/material/expansion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTabsModule } from '@angular/material/tabs';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

const matWidgets=[
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  MatSelectModule,
  MatDialogModule,
  MatProgressBarModule,
  MatTableModule,
  MatCheckboxModule,
  MatProgressSpinnerModule,
  FormsModule,
  ReactiveFormsModule,
  MatToolbarModule,
  MatChipsModule,
  MatFormFieldModule,
  MatExpansionModule,
  MatPaginatorModule,
  CommonModule,
  MatButtonModule,
  MatListModule,
  MatIconModule,
  MatToolbarModule,
  MatMenuModule,
  MatCardModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatInputModule,
  MatSidenavModule,
  MatExpansionModule,
  MatDividerModule,
  MatBadgeModule,
  MatTabsModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatDialogModule,
  MatPaginatorModule,
  MatTableModule,
  MatSortModule,
  MatAutocompleteModule,
  MatRadioModule,
  MatDatepickerModule,
  MatStepperModule,
  MatToolbarModule,
  MatNativeDateModule,
  MatDividerModule,
  MatTooltipModule,
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    matWidgets
  ]
,
exports:[matWidgets]
})
export class MaterialModule { }
