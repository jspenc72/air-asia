import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router, RouterState } from '@angular/router';
import { GiftCardService } from '../services/gift-card.service';
import { GiftCard } from '../models/gift-card.model';
// import {StateService} from '@uirouter/angular';
@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  items: any
  state: any
  constructor(private giftCardService: GiftCardService, private router: Router) { 
    this.state = router.routerState;
    this.items = [{ cardName: "card1", type: "", points: 100, image: "https://d2e70e9yced57e.cloudfront.net/wallethub/posts/68808/best-gift-cards.png"}, 
    { cardName: "card2", type: "", points: 100, image: "https://gawdamedia.com/wp-content/uploads/2019/07/generic-gift-card.jpeg"}, 
    { cardName: "card3", type: "", points: 100, image: "https://cdn.shopify.com/s/files/1/0963/1508/products/GenericGiftCard1_1024x1024.jpg?v=1575933245"}]
  }
  
  displayCardDetail(item): void {
    console.log("displayCardDetail")
    console.log(item)
    this.router.navigateByUrl('/card-details', { state: { item: item  } });
  }
  reloadGiftCards(): void {
    this.giftCardService.getGiftCards().subscribe((data: any)=>{
      console.log(data);
      data.forEach(card => {
        this.items.push(card)
      });
      console.log(this.items)
    })
  }
  
  ngOnInit(): void {
    this.reloadGiftCards()
  }

  ngDoCheck(): void {
    console.log("ngDoCheck");
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
    
  }



}
