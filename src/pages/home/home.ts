import { Component } from '@angular/core';

import {GithubService} from '../../app/services/github'

import { NavController } from 'ionic-angular';

import { Observable} from 'rxjs/observable';

import  'rxjs/Rx';

import 'rxjs/add/operator/map';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [GithubService]
})
export class HomePage {
  public foundRepos;
  public username;

  constructor (private github: GithubService,  private nav: NavController) {

  }



  getRepos() {

    this.github.getRepos(this.username).subscribe(
      
      data => {
        this.foundRepos =  data.json();
      },

      err => {
         console.log("error occured", err);
      },

      () => {
        console.log("i got the repos successfully");
        
      }
    );

  }



}
