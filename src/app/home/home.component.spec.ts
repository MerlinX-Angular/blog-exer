import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxPaginationModule } from 'ngx-pagination';
import { HomeComponent } from './home.component';
import { ReversePipe } from '../pipe/reverse.pipe';
import { RouterTestingModule } from '@angular/router/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, ReversePipe],
      imports: [NgxPaginationModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
