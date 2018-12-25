import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Menu } from '../menu';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  menus: Menu[];
  classify = '전체';

  constructor(private route: ActivatedRoute) {
    this.menus = this.route.snapshot.data['menus'];
   }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        // console.log(params);
        this.classify = params.classify;
        // console.log(this.classify);
      });
  }

}
