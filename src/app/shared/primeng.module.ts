import { NgModule } from "@angular/core";
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';
import {SkeletonModule} from 'primeng/skeleton';
import {TimelineModule} from 'primeng/timeline';
import {CardModule} from 'primeng/card';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {StepsModule} from 'primeng/steps';
import {TabMenuModule} from 'primeng/tabmenu';
import {ChipsModule} from 'primeng/chips';
import {BadgeModule} from 'primeng/badge';
import {CheckboxModule} from 'primeng/checkbox';

@NgModule({
    imports: [
        TableModule,
        ToastModule,
        CalendarModule,
        SliderModule,
        MultiSelectModule,
        ContextMenuModule,
        DialogModule,
        ButtonModule,
        DropdownModule,
        ProgressBarModule,
        InputTextModule,
        SkeletonModule,
        TimelineModule,
        CardModule,
        ConfirmDialogModule,
        ConfirmPopupModule,
        StepsModule,
        TabMenuModule,
        ChipsModule,
        BadgeModule,
        CheckboxModule
    ],

    exports: [
        TableModule,
        ToastModule,
        CalendarModule,
        SliderModule,
        MultiSelectModule,
        ContextMenuModule,
        DialogModule,
        ButtonModule,
        DropdownModule,
        ProgressBarModule,
        InputTextModule,
        SkeletonModule,
        TimelineModule,
        CardModule,
        ConfirmDialogModule,
        ConfirmPopupModule,
        StepsModule,
        TabMenuModule,
        ChipsModule,
        BadgeModule,
        CheckboxModule

    ]
})

export class SharedPrimeNgModule{};