import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DodontPage } from './dodont.page';

describe('DodontPage', () => {
  let component: DodontPage;
  let fixture: ComponentFixture<DodontPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodontPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DodontPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
