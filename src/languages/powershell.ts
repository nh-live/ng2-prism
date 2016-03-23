import {Directive, ElementRef} from 'angular2/core';

import 'prismjs/components/prism-powershell';

@Directive({
  selector: 'codeblock[powershell]'
})
export class Powershell {

  codeblock:any;

  constructor(private el:ElementRef) {  }

  ngOnInit() {
    // get the host
    this.codeblock = (<any>this.el).internalElement.componentView.context;
    this.codeblock.language = 'powershell';
  }

}
