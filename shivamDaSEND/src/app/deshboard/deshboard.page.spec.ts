import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeshboardPage } from './deshboard.page';

describe('DeshboardPage', () => {
  let component: DeshboardPage;
  let fixture: ComponentFixture<DeshboardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeshboardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeshboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
