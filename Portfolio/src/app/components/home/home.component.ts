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
  show = true;
  
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getProjects().subscribe(projects => this.projects = projects);
  }

}