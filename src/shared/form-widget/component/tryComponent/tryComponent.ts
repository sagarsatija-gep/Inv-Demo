import { Component, Input } from "@angular/core";

@Component({
    selector: 'try-one',
    template: `
            <div>
            Hello {{ data }}
            </div>
                `
})
export class TryComponet {
    @Input() data:any={};
}