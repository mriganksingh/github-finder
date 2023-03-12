import { TestBed } from '@angular/core/testing'

import { RepositoriesService } from './repositories.service'
import { HttpClientModule } from '@angular/common/http'

describe('RepositoriesService', () => {
  let service: RepositoriesService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    })
    service = TestBed.inject(RepositoriesService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
