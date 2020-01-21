import { Component, Input } from "@angular/core";

@Component({
    selector: 'try-one',
    template: `
            <div>
            Hello try
            </div>
                `
})
export class TryComponet {
    @Input() data:any={};
}