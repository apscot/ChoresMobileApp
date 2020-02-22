import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LocationFamilyPage } from './location-family.page';

describe('LocationFamilyPage', () => {
  let component: LocationFamilyPage;
  let fixture: ComponentFixture<LocationFamilyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationFamilyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LocationFamilyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
