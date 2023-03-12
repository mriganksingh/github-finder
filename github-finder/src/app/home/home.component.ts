import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RepositoriesService } from '../repositories.service'
import { ProfileComponent } from '../profile/profile.component'
import { Profile } from '../dataTypes/Profile'
import { CardComponent } from '../card/card.component'
import { PaginationComponent } from '../pagination/pagination.component'
import { SearchbarComponent } from '../searchbar/searchbar.component'
import { SkeletonComponent } from '../skeleton/skeleton.component'
import { Repository } from '../dataTypes/Repository'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProfileComponent, CardComponent, PaginationComponent, SearchbarComponent, SkeletonComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private repositoriesService: RepositoriesService) {
  }

  repositories: Repository[] = []
  page: number = 1
  itemsPerPage: number = 10
  totalRepositories : number = 0
  profile: Profile = new Profile()
  userName: string = "angular"
  isLoading: boolean = false

  ngOnInit(): void {
    this.getUserDetails()
    this.getData(this.page, this.itemsPerPage)
  }

  getData(page: number,rows: number): void {
    this.isLoading = true
    this.repositoriesService.getRepositoriesForUser(this.userName, rows, page).subscribe((res: any) => {
      this.repositories = res.items
      this.totalRepositories = res.total_count
      this.isLoading = false
    })
  }

  paginate(event: any): void {
    this.getData(event.page + 1, event.rows)
  }

  getUserDetails(): void {
    this.repositoriesService.getUserDetails(this.userName).subscribe((profile: Profile) => {
      this.profile = profile
    })
  }

  onUserSearch(event: string): void {
    this.userName = event
    this.getUserDetails()
    this.getData(this.page, this.itemsPerPage)
  }

}
