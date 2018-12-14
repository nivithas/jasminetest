import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteComponent } from './vote.component';
//allows to work with view of component
import { DebugElement } from '@angular/core';
// allows to work with elements in the view
import {By} from "@angular/platform-browser"




describe('VoteComponent', () => {
  let component: VoteComponent;
  let fixture: ComponentFixture<VoteComponent>;
  let debugElement: DebugElement
  let htmlElement: HTMLElement

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement.query(By.css('h1'))
    htmlElement = debugElement.nativeElement
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display initial number of votes', () => {
    //act and arrange
    const initialVotes = component.totalVotes
    expect(htmlElement.textContent).toEqual('Votes:0')

  });
  it('should increment number of votes', () => {
    //act and arrange
    const initialVotes = component.totalVotes
    component.upVote()
    fixture.detectChanges();
    const newVotes = component.totalVotes
    expect(newVotes).toBeGreaterThan(initialVotes)
  });
  it('should decrement number of votes', () => {
    //act and arrange
    const initialVotes = component.totalVotes
    component.downVote()
    fixture.detectChanges();
    const newVotes = component.totalVotes
    expect(newVotes).toBeLessThan(initialVotes)
  });
  it('should display the updated number of votes from 0', () => {
    //act and arrange
    component.upVote()
    fixture.detectChanges();
    expect(htmlElement.textContent).toBe('Votes:1')

  });
  it('should display the decremented number of votes from 0', () => {
    //act and arrange
    component.downVote()
    fixture.detectChanges();
    expect(htmlElement.textContent).toBe('Votes:-1')

  });
});
