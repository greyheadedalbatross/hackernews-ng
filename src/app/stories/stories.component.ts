import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {
  typeSub: Subscription;
  pageSub: Subscription;
  storyType: string;
  currentPage: number;
  itemsPerPage = 20;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.typeSub = this.route.data.subscribe(data => {
      this.storyType = (data as any).type;
      console.log(this.storyType);
    });

    this.pageSub = this.route.params.subscribe(params => {
      this.currentPage = params['page'] ? + params['page'] : 1;
      console.log(this.currentPage);
    });
  }

}
