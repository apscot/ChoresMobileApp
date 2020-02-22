import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FamilydetailsPage } from './familydetails.page';

describe('FamilydetailsPage', () => {
  let component: FamilydetailsPage;
  let fixture: ComponentFixture<FamilydetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilydetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FamilydetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
