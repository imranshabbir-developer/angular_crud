import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-student',
  standalone: false,
  templateUrl: './show-student.component.html',
  styleUrl: './show-student.component.css'
})

export class ShowStudentComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getAllStudentData();
  }

  students: any[] = [];
      getAllStudentData() {
        // Fetch data from your server here using HttpClient
        const url = "http://localhost:8080/students"

        this.httpClient.get(url).subscribe((response: any) => {
          console.log(response);
          this.students = response;
        }, (error) => {
          console.error("Error in Fetching Record", error);
        });

      }

// deleting student record on the basis of id 

deleteStudent(studentId: any) {

  const url = "http://localhost:8080/student/delete"

  this.httpClient.get(url + "/" + studentId).subscribe((response: any) => {
    console.log(response);
    this.getAllStudentData();
    
  }, (error) => {
    console.error("Error in deleting Record", error);
  });

}

editStudent(student:any){
  console.log(student);
}


}