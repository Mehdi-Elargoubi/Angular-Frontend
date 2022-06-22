import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/employee';
import { EmployeeService } from './../../../../employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id! : number;
  employee : Employee = new Employee();

  constructor(private employeeService : EmployeeService, private route : ActivatedRoute, private router : Router) {
  }

  ngOnInit(): void {
    console.clear()
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)

    // this.route.data.subscribe({
    //   next: (res) => {
    //     console.log("Request data: ", res)
    //   }
    // })

    this.employeeService.getEmployeeById(this.id).subscribe(data =>{
      this.employee = <Employee>data;
      console.log(data)

    }, error => console.log(error)

    );
  }

  onSubmit(){
    this.employeeService.UpdateEmployee(this.id,this.employee).subscribe(data=>{
      this.goToEmployeeList();
    }, error => console.log(error)
    );
  }

  goToEmployeeList(){
    this.router.navigate(['/listeEmployees']);
  }

}
