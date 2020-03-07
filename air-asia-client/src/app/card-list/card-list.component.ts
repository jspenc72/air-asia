import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router, RouterState } from '@angular/router';
// import {StateService} from '@uirouter/angular';
@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  items: any
  state: any
  constructor(private router: Router) { 
    this.state = router.routerState;
    this.items = [{ title: "card1", type: "", value: 100, image: "https://d2e70e9yced57e.cloudfront.net/wallethub/posts/68808/best-gift-cards.png", description: "Chick Fila-A $10 Gift Card", points: 10}, 
    { title: "card2", type: "", value: 100, image: "https://gawdamedia.com/wp-content/uploads/2019/07/generic-gift-card.jpeg", description: "Wendy's $10 Gift Card", points: 20}, 
    { title: "card3", type: "", value: 100, image: "https://cdn.shopify.com/s/files/1/0963/1508/products/GenericGiftCard1_1024x1024.jpg?v=1575933245", description: "McDonalds $10 Gift Card", points: 30}]
  }
  
  displayCardDetail(item): void {
    console.log("displayCardDetail")
    console.log(item)
    this.router.navigateByUrl('/card-details', { state: { item: item  } });
  }
  
  ngOnInit(): void {
  }

}
