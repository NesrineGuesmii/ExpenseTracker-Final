import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [MessageService]
})
export class HomeComponent implements OnInit{
  items: MenuItem[] | undefined;

  constructor(private messageService: MessageService) {}
    
    ngOnInit() {
        this.items = [
            {
                label: 'Nesrine',
                items: [
                    {
                        label: 'Settings',
                        icon: 'pi pi-user-edit',
                        command: () => {
                            this.update();
                        }
                    },
                    {
                        label: 'Logout',
                        icon: 'pi pi-sign-out',
                        command: () => {
                            this.delete();
                        }
                    }
                ]
            }
        ];
    }

    stateOptions: any[] = [{label: 'Income', value: 'income'}, {label: 'Expense', value: 'expense'}];
    value:string='income';
    date:Date = new Date();
    update() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
    }

    delete() {
        this.messageService.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
    }
}

