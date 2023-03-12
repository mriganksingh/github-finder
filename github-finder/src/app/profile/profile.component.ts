import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Profile } from '../dataTypes/Profile'
import { ImageModule } from 'primeng/image'

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ImageModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  @Input() profile: Profile = new Profile()
}
