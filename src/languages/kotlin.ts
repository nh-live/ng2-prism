import 'prismjs/components/prism-kotlin';
import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: 'codeblock[kotlin]'
})
export class KotlinDirective implements OnInit {

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