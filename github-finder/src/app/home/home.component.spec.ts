import { ComponentFixture, TestBed } from '@angular/core/testing'

import { HomeComponent } from './home.component'
import { HttpClientModule } from '@angular/common/http'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { RepositoriesService } from '../repositories.service'

describe('HomeComponent', () => {
  let component: HomeComponent
  let fixture: ComponentFixture<HomeComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HomeComponent,HttpClientTestingModule ],
      providers: [RepositoriesService]
    })
    .compileComponents()

    fixture = TestBed.createComponent(HomeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
