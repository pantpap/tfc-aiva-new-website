import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-home-one',
    templateUrl: './home-one.component.html',
    styleUrls: ['./home-one.component.scss']
})
export class HomeOneComponent implements OnInit {

    constructor() { }

    teamSlides: OwlOptions = {
		loop: true,
        margin: 20,
        dots: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            575: {
                items: 2,
            },
            576: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4,
            }
        }
    };
    clientWrap: OwlOptions = {
		loop: true,
		margin: 30,
		nav: false,
		mouseDrag: true,
		items: 1,
		dots: false,
		autoHeight: true,
		autoplay: true,
		smartSpeed: 800,
		autoplayHoverPause: true,
		center: false,
		responsive: {
			0: {
				items: 1,
				margin: 10,
			},
			576: {
				items: 1,
			},
			768: {
				items: 2,
				margin: 20,
			},
			992: {
				items: 2,
			},
			1200: {
				items: 2,
			}
		}
    };

    ngOnInit(): void {}

}
