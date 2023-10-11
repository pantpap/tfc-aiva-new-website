import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.scss']
})
export class ArchivesComponent {
    constructor(private router: Router) {
    }
    projectDetails(project) {
        this.router.navigateByUrl(`archives/${project}`);
    }

}
