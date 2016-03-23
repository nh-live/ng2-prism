import {Directive, ElementRef} from 'angular2/core';

import 'prismjs/components/prism-aspnet';

@Directive({
  selector: 'codeblock[aspnet]'
})
export class Aspnet {

  codeblock:any;

  constructor(private el:ElementRef) {  }

  ngOnInit() {
    // get the host
    this.codeblock = (<any>this.el).internalElement.componentView.context;
    this.codeblock.language = 'aspnet';
  }

}
