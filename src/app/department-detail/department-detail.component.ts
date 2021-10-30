import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h2>Thank for selecting the department</h2>
    <h3>You selected Department with ID = {{departmentId}}</h3>  
    <h4> And Basic Salary is {{departmentDetails[departmentId]}}</h4>
    <router-outlet></router-outlet>
    <button routerLink="/" routerLinkActive="active"> Back </button>
    <!--
    <div>
      <button (click)="gotoDepartments()">Back</button>
    </div> -->
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {
  
  public departmentDetails : any[] = ["", "150000","13000","12000","11000","10000"];

  public departmentId: any;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() 
  {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id') || '');
      this.departmentId = id;

    });
  }

  // gotoDepartments() 
  // {
  //   let selectedId = this.departmentId ? this.departmentId : null;
  //   this.router.navigate(['../', { id: selectedId }], { relativeTo: this.route });
  // }
}
