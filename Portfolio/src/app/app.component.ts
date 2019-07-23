import { Component, OnInit } from '@angular/core';
import { Project } from './project';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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

    //retrieve all data per tag
    for(i = 0; x.length; i++){
      let title = x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue;
      let time =  x[i].getElementsByTagName("TIME")[0].childNodes[0].nodeValue;
      let desc = x[i].getElementsByTagName("DESC")[0].childNodes[0].nodeValue;
      let image = x[i].getElementsByTagName("IMAGE")[0].childNodes[0].nodeValue;
      let link = x[i].getElementsByTagName("LINK")[0].childNodes[0].nodeValue;

      //get array of tools
      let tools =[];
      for(j = 0; j < 3; j++){
      let tool = x[i].getElementsByTagName("TOOLS")[j].childNodes[0].nodeValue;
      tools[tools.length] = tool;
      }

      this.projects[this.projects.length] = new Project(title, time,desc, tools, image, link);

    }

  }
}
