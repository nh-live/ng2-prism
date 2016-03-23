import {Directive, ElementRef} from 'angular2/core';

import 'prismjs/components/prism-objectivec';

@Directive({
  selector: 'codeblock[objectivec]'
})
export class Objectivec {

  codeblock:any;

  constructor(private el:ElementRef) {  }

  ngOnInit() {
    // get the host
    this.codeblock = (<any>this.el).internalElement.componentView.context;
    this.codeblock.language = 'objectivec';
  }

}
