import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CardModule } from 'primeng/card'
import { TagModule } from 'primeng/tag'
import { Repository } from '../dataTypes/Repository'

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, CardModule, TagModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() repository: Repository = new Repository()
}
