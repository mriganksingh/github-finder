import { Component, EventEmitter, Input, Output } from '@angular/core'
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator'

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule, PaginatorModule],
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  @Input() rows: number = 10
  @Input() totalRecords: number = 0
  rowsPerPageOptions: number[] = [10,25,50,100]
  @Output() onPageChange: EventEmitter<any> = new EventEmitter()

  pageChange(event: any): void {
    this.onPageChange.emit(event)
  }
}
