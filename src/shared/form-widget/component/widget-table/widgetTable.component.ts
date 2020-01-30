import { Component, Input, OnInit, ViewEncapsulation, OnDestroy } from "@angular/core";
import { PopUpService } from "../../service/popUp.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
    selector: 'widget-table',
    templateUrl: './widgetTable.component.html',
    styleUrls: ['./widgetTable.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class WidgetTable implements OnInit, OnDestroy {
    // show:boolean=false;
    @Input() data;

    popUpSubCription: Subscription;
    
    constructor(private popUpService: PopUpService, private route: Router) {}

    ngOnInit(): void {
        debugger;
        console.log(this.data);
        this.popUpSubCription = this.popUpService.barCodePopUpDataForAsset.subscribe(indexp=>{
            debugger
            console.log(this.data);
            if(this.data.route != 'poGoodsReceipt'){
                
                this.data.values.map((data,index)=>{
                    this.data.values[index][5].value = this.data.values[index][5].value1;
                })
            }
        })
    }

    ngOnDestroy() {
        this.popUpSubCription.unsubscribe();
    }

    setValue(e) {
        debugger
        this.popUpService.setSelectedInputBoxValue(e);
    }

    display(e){
        debugger;
        console.log(this.data);
        this.data.values[e][14].show = true;
        this.data.values[e][15].show = true;
        // this.data = this.data;
        // this.show=true;
    }

    applyData(event, index) {
        this.values[index][1].value = event.target.value
        this.data.values[index] = this.values[index]
    }

    values = [
        [
            {
                type: 'text',
                value: '1'
            },
            {
                type: 'textboxchange',
                value: '',
            },
            {
                type: 'textbox',
                value: 'E-MONT_KS-PANZERROHR_DN20'
            },
            {
                type: 'textbox',
                value: '',
                classes: 'rounded-sm border-secondary input-small text-right'
            },
            {
                type: 'text',
                value: '00000000000000000A101058',
            }
        ],
        [
            {
                type: 'text',
                value: '2'
            },
            {
                type: 'textboxchange',
                value: '',
            },
            {
                type: 'textbox',
                value: 'KIT,ANALYSIS,HEATER TUBE & FILTER,MFR UN'
            },
            {
                type: 'textbox',
                value: '',
                classes: 'rounded-sm border-secondary input-small text-right'
            },
            {
                type: 'text',
                value: 'E2801160600002052A5B5541',
            }
        ],
        [
            {
                type: 'text',
                value: '3'
            },
            {
                type: 'textboxchange',
                value: '',
            },
            {
                type: 'textbox',
                value: 'MILLIPORE AAWP04700'
            },
            {
                type: 'textbox',
                value: '',
                classes: 'rounded-sm border-secondary input-small text-right'
            },
            {
                type: 'text',
                value: 'E2801160600002052A5B5541',
            }
        ],
        [
            {
                type: 'text',
                value: '4'
            },
            {
                type: 'textboxchange',
                value: '',
            },
            {
                type: 'textbox',
                value: 'MILLIPORE AAWP04700'
            },
            {
                type: 'textbox',
                value: '',
                classes: 'rounded-sm border-secondary input-small text-right'
            },
            {
                type: 'text',
                value: 'E2801160600002052A5B5541'
            }
        ],
        [
            {
                type: 'text',
                value: '5'
            },
            {
                type: 'textboxchange',
                value: ''
            },
            {
                type: 'textbox',
                value: 'MILLIPORE AAWP04700'
            },
            {
                type: 'textbox',
                value: '',
                classes: 'rounded-sm border-secondary input-small text-right'
            },
            {
                type: 'text',
                value: 'E2801160600002052A5B5541',
            }
        ]
    ]

}