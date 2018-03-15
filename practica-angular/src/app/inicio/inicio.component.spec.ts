import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioComponent } from './inicio.component';
import { AsideComponent } from './aside/aside.component';
import { SectionComponent } from './section/section.component';
import { Article1Component } from './section/article1/article1.component';
import { Article2Component } from './section/article2/article2.component';
import { Article3Component } from './section/article3/article3.component';
import { RouterTestingModule } from '@angular/router/testing';


describe('InicioComponent', () => {
  let component: InicioComponent;
  let fixture: ComponentFixture<InicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [AsideComponent,
         SectionComponent,
          Article1Component,
           Article2Component,
            Article3Component,
             InicioComponent],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
