import { Component, OnInit, Input } from '@angular/core'
import { Shoe } from 'src/app/core/models/shoe'

@Component({
  selector: 'app-shoe',
  templateUrl: './shoe.component.html',
  styleUrls: ['./shoe.component.css']
})
export class ShoeComponent implements OnInit {
  @Input() shoe: Shoe
  constructor() { }

  ngOnInit() {
  }

}
