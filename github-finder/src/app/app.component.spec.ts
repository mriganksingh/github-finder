import { TestBed } from '@angular/core/testing'
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { HttpClientModule } from '@angular/common/http'

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        HomeComponent,
        HttpClientModule
      ]
    }).compileComponents()
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })

  it(`should have as title 'github-finder'`, () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app.title).toEqual('github-finder')
  })
})
