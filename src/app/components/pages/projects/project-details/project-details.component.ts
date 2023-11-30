import {Component, OnInit} from '@angular/core';
import {projects} from '../../../../data/projects';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit{
    private projectsData = projects;
    projectDescription: any;
    image: string;
    projectName: string;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.params.subscribe(response => {
            this.projectDescription = this.projectsData.find(project => (project.name === response.projectName));
            this.image = this.projectDescription?.image;
            this.projectName = this.projectDescription?.name?.toUpperCase()
        });
    }
}
