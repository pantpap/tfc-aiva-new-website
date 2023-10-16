import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {archiveProjectsData} from './archiveProjectsData';

@Component({
  selector: 'app-archive-details',
  templateUrl: './archive-details.component.html',
  styleUrls: ['./archive-details.component.scss']
})
export class ArchiveDetailsComponent implements OnInit {
    details: any;
    private data = archiveProjectsData;
    constructor(private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(response => {
            this.details = this.data.find(item => (item.name === response.archiveProjectName));
        });
    }
}
