import { Component,Input,EventEmitter, Output,OnInit,
  OnChanges,DoCheck, AfterContentInit,AfterContentChecked,
 AfterViewInit,AfterViewChecked, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,AfterContentChecked,
AfterViewInit,AfterViewChecked, OnDestroy {
  
@Input('img') postImg='';

// if we wanna emmit event to a parent component
@Output() imgSelected = new EventEmitter<string>();

constructor(){
  console.log('constructor called',this.postImg)
} 
 
//implements the OnInit interface (hook)
ngOnInit() {
  console.log('OnInit called',this.postImg)
}

//implements the OnChanges interface (hook)
ngOnChanges(){
  console.log('OnChanges called')
}
//implements the DoCheck interface (hook)...and so on...
ngDoCheck() {
  console.log('DoCheck called')
}

ngAfterViewChecked() {
  console.log('ngAfterViewChecked called')
}
ngAfterViewInit() {
  console.log('ngAfterViewInit called')
}
ngAfterContentChecked() {
  console.log('ngAfterContentChecked called')
}
ngAfterContentInit() {
  console.log('ngAfterContentInit called')
}

ngOnDestroy() {
  console.log('ngOnDestroy called')
}

}
