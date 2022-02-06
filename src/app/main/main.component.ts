import { Component, OnInit } from '@angular/core';
import { GetJokeService }  from '../services/get-joke.service';
import { Joke } from '../models/Joke';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  joke: string = '';
  toilet: string = "assets/toilet-paper.png";
  chuck: string = "assets/icons8-chuck-norris-100.png";
  constructor(private getjoke: GetJokeService) { 
    this.joke = "Chuck Norris can drink a bucket of KFC";
  }
  clickJoke(){
    this.getjoke.getJoke().subscribe(post=>{
      this.joke = post.value;
    })
  }
  ngOnInit(){
  }
}
