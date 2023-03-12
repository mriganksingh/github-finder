import { Component, EventEmitter, Output } from '@angular/core'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { ButtonModule } from 'primeng/button'
import { InputTextModule } from 'primeng/inputtext'

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, InputTextModule],
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {
  searchTextBar: string = ''
  @Output() searchText = new EventEmitter<string>()

  onSearchText(): void {
    this.searchText.emit(this.searchTextBar)
  }
}
