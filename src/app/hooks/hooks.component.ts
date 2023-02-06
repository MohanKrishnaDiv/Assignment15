import { Component ,Output, Input,OnInit,OnChanges,EventEmitter,SimpleChange,SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit,OnChanges {
  @Input() value: string ="mohan"
  constructor(){
    console.log('Constructor called');
  }
  ngOnChanges(change: SimpleChanges){
    console.log('ngOnchanges called')
    console.log(change);
  }
ngOnInit(){
   console.log('ngOnInit called')
  //  console.log(this.value);
}
ngDoCheck(){
  console.log('ngDoCheck called')
}
ngAfterContentInit(){
  console.log('ngAfterContentInit called')
}
ngAfterContentChecked(){
  console.log('ngAfterContentChecked called')
}
ngAfterViewInit(){
  console.log('ngAftervieinit called')
}
ngAfterViewChecked(){
  console.log('ngAfterviewchecked called')
}
ngOnDestroy(){
  console.log('ngondistroy called')
}
}
