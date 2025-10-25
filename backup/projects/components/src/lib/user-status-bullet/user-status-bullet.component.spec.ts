import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserStatusBulletComponent } from './user-status-bullet.component';

describe('UserStatusBulletComponent', () => {
  let component: UserStatusBulletComponent;
  let fixture: ComponentFixture<UserStatusBulletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserStatusBulletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserStatusBulletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
