import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfilePreviewComponent } from './profile-preview.component';
import { AvatarModule } from '../avatar/avatar.module';

describe('ProfilePreviewComponent', () => {
  let component: ProfilePreviewComponent;
  let fixture: ComponentFixture<ProfilePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfilePreviewComponent],
      imports: [AvatarModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfilePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should default user be true', () => {
    component.userName = 'chosen name';
    fixture.detectChanges();
    expect(component.isDefaultUserName).toBeTruthy();
  });

  it('should default user be false', () => {
    expect(component.isDefaultUserName).toBeFalsy();
  });

  it('should default profile name be true', () => {
    component.profileName = 'profile name';
    fixture.detectChanges();
    expect(component.isDefaultProfileName).toBeTruthy();
  });

  it('should default profile name be false', () => {
    expect(component.isDefaultProfileName).toBeFalsy();
  });
});
