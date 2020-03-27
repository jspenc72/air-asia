import { Component, OnInit } from '@angular/core';
import { GiftCardService } from '../services/gift-card.service';

@Component({
  selector: 'app-card-add',
  templateUrl: './card-add.component.html',
  styleUrls: ['./card-add.component.scss']
})
export class CardAddComponent implements OnInit {
  
  constructor(private giftCardService: GiftCardService) { }

  ngOnInit(): void {
  }

  createCard(): void {

  }

}
