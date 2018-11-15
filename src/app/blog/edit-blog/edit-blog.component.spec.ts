import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { EditBlogComponent } from './edit-blog.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('EditBlogComponent', () => {
  let component: EditBlogComponent;
  let fixture: ComponentFixture<EditBlogComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [EditBlogComponent],
      imports: [RouterTestingModule, FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
