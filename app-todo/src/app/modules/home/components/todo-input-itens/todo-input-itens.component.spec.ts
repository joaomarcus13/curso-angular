import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoInputItensComponent } from './todo-input-itens.component';

describe('TodoInputItensComponent', () => {
  let component: TodoInputItensComponent;
  let fixture: ComponentFixture<TodoInputItensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoInputItensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoInputItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
