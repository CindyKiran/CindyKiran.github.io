import { Component, OnInit } from '@angular/core';
import { Project } from './project';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //titles =[];
  //tools =[];
  projects = [];

  ngOnInit(){
    this.loadXML();
  }

  loadXML(){
    var i, j,  x, xmlhttp, xmlDoc
    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "../assets/portfolio.xml", false);
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;
    x = xmlDoc.getElementsByTagName("WORK");

    for(i = 0; x.length; i++){
      let title = x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue;
      //this.titles[this.titles.length] = title;

      let desc = x[i].getElementsByTagName("DESC")[0].childNodes[0].nodeValue;

      let tools =[];
      for(j = 0; j < 3; j++){
      let tool = x[i].getElementsByTagName("TOOLS")[j].childNodes[0].nodeValue;
      tools[tools.length] = tool;
      }

      let image = x[i].getElementsByTagName("IMAGE")[0].childNodes[0].nodeValue;
      
      this.projects[this.projects.length] = new Project(title, 2019,desc, tools, image);

    }

  }
}
