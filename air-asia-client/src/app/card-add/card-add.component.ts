import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GiftCardService } from '../services/gift-card.service';
import { GiftCard } from '../models/gift-card.model';
interface CardType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-card-add',
  templateUrl: './card-add.component.html',
  styleUrls: ['./card-add.component.scss']
})
export class CardAddComponent implements OnInit {
  newCardFormGroup: FormGroup;
  cardTypes: CardType[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  constructor(private giftCardService: GiftCardService, private _formBuilder: FormBuilder) {


  }

  ngOnInit() {
    this.newCardFormGroup = this._formBuilder.group({
      cardName: ['', Validators.required],
      cardType: ['', Validators.required],
      cardValue: ['', Validators.required],
      points: ['', Validators.required]
    });
  }

  createCard(): void {
    console.log("createCard");
    console.log(this.newCardFormGroup.value);
    const card: GiftCard = this.newCardFormGroup.value
    this.giftCardService.addGiftCard(card).subscribe((data: any)=>{
      console.log(data);
      
    })
  }

}
