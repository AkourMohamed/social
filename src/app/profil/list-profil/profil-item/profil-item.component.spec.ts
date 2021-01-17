import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilItemComponent } from './profil-item.component';

describe('ProfilItemComponent', () => {
  let component: ProfilItemComponent;
  let fixture: ComponentFixture<ProfilItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
