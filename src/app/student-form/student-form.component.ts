import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student'

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  courses = ['Computer', 'Electronics',
            'Mechanical', 'Electrical','Chemical'];
            
  model = new Student(308251, 'Rajat Sharma', this.courses[0], 'Engineering');
  submitted = false;
  onSubmit() { 
  		this.submitted = true; 
  }
  active = true;
  newStudent() {
     this.model = new Student(0, '', '');
     this.active = false;
     setTimeout(() => this.active = true, 0);
  }
  
  default() {
  	    this.model = new Student(308251, 'Rajat Sharma', this.courses[0], 'Engineering');
  }
  get diagnostic() { 
  		return JSON.stringify(this.model); 
  }
}
