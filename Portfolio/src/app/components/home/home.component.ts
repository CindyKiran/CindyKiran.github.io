import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/project.service';
import { Project } from 'src/app/project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  projects;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getProjects().subscribe(projects => this.projects = projects);
    alert("test");
  }

  myFunction(){
    // //var x = (<HTMLImageElement> document.getElementById("image")).src;
    // var x =  document.getElementById("image").parentElement;
    // alert(x);
  }
}