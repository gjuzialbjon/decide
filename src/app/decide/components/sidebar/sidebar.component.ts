import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [],
})
export class SidebarComponent implements OnInit {
  displayRecommendationList = true;
  recommendationMenuItems = [
    {
      path: 'recommendation/evidence',
      img: 'assets/media/target.svg',
      label: 'Evidence',
    },
    {
      path: 'recommendation/recommendation-details',
      img: 'assets/media/list.svg',
      label: 'Recommendation Details',
    },
    {
      path: 'recommendation/attribute-trends',
      img: 'assets/media/shapes.svg',
      label: 'Attribute Trends',
    },
    {
      path: 'recommendation/sku-deviation',
      img: 'assets/media/chart.svg',
      label: 'SKU Deviation',
    },
    {
      path: 'recommendation/demand-planned',
      img: 'assets/media/curves.svg',
      label: 'Deman vs Planned Curve',
    },
    {
      path: 'recommendation/related-insights',
      img: 'assets/media/bulb.svg',
      label: 'Related Insights',
    },
  ];

  constructor(private router: Router) {
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        this.displayRecommendationList = ev.url.includes(
          '/decide/recommendation/'
        );
      }
    });
  }

  ngOnInit(): void {}
}
