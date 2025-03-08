import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-student',
  standalone: false,
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {

  constructor(private httpClient: HttpClient) { }

  student = new FormGroup({
    rollNo: new FormControl(),
    name: new FormControl(),
    percentage: new FormControl(),
    branch: new FormControl()
  });

  handleSubmit() {
    const url = "http://localhost:8080/student/add"
    console.log(this.student.value);
    this.httpClient.post(url, this.student.value).subscribe((response) => {
      console.log(response);
    }, (error) => {
      console.error("Error in Adding Record", error);
    }
    )

  }
}
