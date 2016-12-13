import 'prismjs/components/prism-q';
import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: 'codeblock[q]'
})
export class QDirective implements OnInit {

  public codeblock: any;
  public el: ElementRef;

  constructor(el: ElementRef) {
    this.el = el;
  }

  ngOnInit() {
    // get the host
    this.codeblock = (<any>this.el).internalElement.componentView.context;
    this.codeblock.language = '{{lang}}';
  }

}