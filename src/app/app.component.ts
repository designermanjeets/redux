import { Component } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from './store';
import { INCREMENT, DECREMENT } from './actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Redux-App';
  counter : any
  @select('counter') counter$;
    
  constructor(private ngRedux : NgRedux<IAppState>){ } 

  ngOnInit() {
    this.counter$.subscribe(state => {
      this.counter = state;
    })
  } 

  increment(){
    //this.counter++; // Angular Method
    this.ngRedux.dispatch({ type : INCREMENT }) //Redux Method
  }

  decrement(){
    //this.counter--; // Angular Method
    this.ngRedux.dispatch({ type : DECREMENT }) //Redux Method
  }

}