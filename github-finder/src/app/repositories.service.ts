import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs'
import { Profile } from './dataTypes/Profile'

@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {

  constructor(private http: HttpClient) { }

  getUserDetails(userName: string): Observable<Profile> {
    return this.http.get(`https://api.github.com/users/${userName}`)
      .pipe(map((response: any) => ({
        name: response.name,
        location: response.location,
        bio: response.bio,
        avatar_url: response.avatar_url,
        html_url: response.html_url,
        twitter_username: response.twitter_username
      })))
  }

  getRepositoriesForUser(userName: string,itemsPerPage: number = 6, pageNumber: number = 1): Observable<any> {
    return this.http.get(`https://api.github.com/search/repositories?q=user:${userName}&page=${pageNumber}&per_page=${itemsPerPage}`)
      .pipe(map((res: any) => res))
  }
}
