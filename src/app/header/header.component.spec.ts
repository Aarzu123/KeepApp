import { ComponentFixture, TestBed, async } from "@angular/core/testing";
import { HeaderComponent } from "./header.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { By } from "@angular/platform-browser";

fdescribe("Header Test Suite",()=>
{

  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  let debugElement: any;
  let element: any;


  // This will run before each test case
  beforeEach(async(()=>{

    TestBed.configureTestingModule({

      declarations:[HeaderComponent],
      imports:[MatToolbarModule],
      providers:[]

    }).compileComponents();

  }))

  // This will run before All test case
  beforeEach(()=>{

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;

  })

  // This will run after each test case
  afterEach(()=>{})

  // This will run after all test case
  afterAll(()=>{})

  // Test Case 1
  it("Should ensure object creation !!",()=>{

    expect(component).toBeTruthy();

  })


  // Test Case 2
  it('should handle to check header title', () => {
    debugElement = fixture.debugElement.query(By.css('.mat-toolbar'));
    if (debugElement) {
      element = debugElement.nativeElement;
      expect(element.textContent).toBe('Keep',
        `should have material toolbar with 'Keep' title in header.component.html as <mat-toolbar>Keep</mat-toolbar>`);
    } else {
      expect(false).toBe(true,
        `should have an element <mat-toolbar> in your header.component.html to display header title`);
    }
  });



})



// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { HeaderComponent } from './header.component';

// describe('HeaderComponent', () => {
//   let component: HeaderComponent;
//   let fixture: ComponentFixture<HeaderComponent>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [HeaderComponent]
//     });
//     fixture = TestBed.createComponent(HeaderComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
