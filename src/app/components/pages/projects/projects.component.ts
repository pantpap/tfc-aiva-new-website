import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent{
    constructor(private router: Router) {
    }
    projectDetails(name: string) {
        this.router.navigateByUrl(`projects/${name}`);
    }
}
