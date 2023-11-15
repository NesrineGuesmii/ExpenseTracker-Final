import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { category } from '../datas/Category';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [MessageService]
})
export class HomeComponent implements OnInit{
  items: MenuItem[] | undefined;
  incomes: any = [];
  expenses: any = [];
  total = {
    income: 0,
    expense: 0,
    general: 0
  };
  dtOptions: any;
  chart: any;
  @ViewChild("#moneydata") mycanvas!: HTMLCanvasElement;
  
  

  constructor(private messageService: MessageService) {}
    
    ngOnInit() {

        this.dtOptions = {
            // Declare the use of the extension in the dom parameter
            dom: 'Bfrtip',
            // Configure the buttons
            buttons: [
              'columnsToggle',
              'colvis',
              'copy',
              'print',
              'excel'
            ]
          };
        
        
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

    ngAfterViewInit() {
        this.createChart();

    }

    stateOptions: any[] = [{label: 'Income', value: 'income'}, {label: 'Expense', value: 'expense'}];
    value:string='income';
    categorySelected:any = category["income"];
    date:Date = new Date();
    data = {
        category: "",
        money: 0,
        description: "",
        created_at: this.date
    };


    update() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
    }

    delete() {
        this.messageService.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
    }

    changeCategoryStatus() {
        
        if (this.value === "income") {
            this.categorySelected = category['income'];
        } else {
            this.categorySelected = category["expense"];
        }

        console.log(this.categorySelected);
        
    }

    add() {
        if (this.value === "expense") {
            this.insertExpense(this.data);
        } else {
            this.insertIncome(this.data);
        }
    
        console.log(this.total);
        console.log(this.incomes);
        console.log(this.expenses);
        

        this.chart.data.datasets[0].data = [this.total.income, this.total.expense];
        this.chart.update();

        this.clear();
        // this.createChart();
    }


    clear() {
        this.data = {
            category: "",
            money: 0,
            description: "",
            created_at: this.date
        };
    }


    insertIncome(icome:any) {
        this.incomes.push(icome);
        this.total.income += icome.money;
    }

    insertExpense(expense: any) {
        this.expenses.push(expense);
        this.total.expense += expense.money;
        this.total.income -= expense.money;
    }


    createChart() {
        console.log("sdss");
        const canvas = <HTMLCanvasElement>document.getElementById("money-data");

        if (canvas) {

            this.chart = new Chart(canvas, {
                type: 'doughnut',
                data: {
                    labels: ["income", "expense"],
                    datasets: [
                        {
                            label: "",
                            data: [this.total.income, this.total.expense],
                            backgroundColor: [
                                'rgb(54, 162, 235)',
                                'rgb(255, 99, 132)',
                            ],
                        }
                    ]
                },
            })

        } else {
            console.log("ni");
            
        }
        
    }
    
}

