import {Directive, ElementRef} from 'angular2/core';

import 'prismjs/components/prism-mizar';

@Directive({
  selector: 'codeblock[mizar]'
})
export class Mizar {

  codeblock:any;

  constructor(private el:ElementRef) {  }

  ngOnInit() {
    // get the host
    this.codeblock = (<any>this.el).internalElement.componentView.context;
    this.codeblock.language = 'mizar';
  }

}
