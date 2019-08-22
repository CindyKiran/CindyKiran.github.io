import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getProjects(): Observable<any>{
    //create variables
    var projects = [];
    var i, j, x, xmlhttp, xmlDoc;
    var title, time, desc, image, link, tools, hover, status;
    xmlhttp = new XMLHttpRequest();

    //get access to XML-file
    xmlhttp.open("GET", "assets/portfolio.xml", false);
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML; 
    x = xmlDoc.getElementsByTagName("WORK");

    //get data per tag
    for(i = 0; i<x.length; i++){
      title = x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue;
      time =  x[i].getElementsByTagName("TIME")[0].childNodes[0].nodeValue;
      desc = x[i].getElementsByTagName("DESC")[0].childNodes[0].nodeValue;
      image = x[i].getElementsByTagName("IMAGE")[0].childNodes[0].nodeValue;
      link = x[i].getElementsByTagName("LINK")[0].childNodes[0].nodeValue;
      hover = x[i].getElementsByTagName("HOVER")[0].childNodes[0].nodeValue;
      status = x[i].getElementsByTagName("STATUS")[0].childNodes[0].nodeValue;

      //loop through all the tools
      tools =[];
      for(j = 0; j < 3; j++){
        var tool = x[i].getElementsByTagName("TOOLS")[j].childNodes[0].nodeValue;
        tools[tools.length] = tool;
      }

      //save objects of type Project in array
      projects.push(new Project(title, time, desc, tools, image, link, hover, status));
    }
    return of(projects);
  }
}
