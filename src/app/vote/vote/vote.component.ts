import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  totalVotes: number = 0
  constructor() { }

  ngOnInit() {
  }

  upVote(){
    this.totalVotes++
  }

  downVote(){
    this.totalVotes--
  }
}
