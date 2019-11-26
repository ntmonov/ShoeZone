import { Component, OnInit } from '@angular/core'
import { Shoe } from 'src/app/core/models/shoe'
import { ShoeService } from 'src/app/core/services/shoe.service'

@Component({
  selector: 'app-shoe-list',
  templateUrl: './shoe-list.component.html',
  styleUrls: ['./shoe-list.component.css']
})
export class ShoeListComponent implements OnInit {
  shoes: Shoe[] = []
  constructor(private shoeService: ShoeService) { }

  ngOnInit() {
    this.shoeService.getAllShoes().subscribe(data => this.shoes = data, err => console.log(err))
  }

}
