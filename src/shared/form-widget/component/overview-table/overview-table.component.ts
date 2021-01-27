import { Router } from '@angular/router';
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'overview-table',
    templateUrl: './overview-table.component.html',
    styleUrls: ['./overview-table.component.scss']
})
export class OverViewTableComponent implements OnInit {

    tableHeader = [
        {
            value: ' ',
            width: 'width-6'
        },
        {
            value: 'Item Number',
            width: 'width-12_5'
        },
        {
            value: 'Item Name',
            width: 'width-19'
        },
        {
            value: 'Plant',
            width: 'width-12_5'
        },
        {
            value:  'Storage Location',
            width: 'width-12_5'
        },        
        {
            value:  'Storage Bin',
            width: 'width-12_5'
        },  
        {
            value: 'Last PI Date',
            width: 'width-12_5'
        },
        {
            value: '# Of Days',
            width: 'width-12_5'
        }
        ];
    tableData: any;
    constructor( private route: Router) { }
    ngOnInit() {
        this.tableData = [
            {
                headerName: 'Storage Bin: 01-A-01-0 (3 item)',
                row: [
                    [
                        {
                        ischeckbox: true,
                        value: false
                    },
                     '1073416', 'PUMP,OIL', 'DRSL', '0001', '01-A-01-0', ' ', ' '],
                    [{
                        ischeckbox: true,
                        value: false
                    }, '1073426', 'SHAFT,PINION', 'DRSL', '0001', '01-A-01-0', '04/15/2020 ', '218'],
                    [{
                        ischeckbox: true,
                        value: false
                    }, '1073427', 'SHAFT', 'DRSL', '0001', '01-A-01-0', '04/15/2020 ', '218']
                ],
                isOpen: true,
                ischeck: false
            },
            {
                headerName: 'Storage Bin: 01-A-02-A (5 item)',
                row: [
                    [{
                        ischeckbox: true,
                        value: false
                    }, '1332101', 'BEARING ISOLATOR(INPRO) THRUST', 'DRSL', '0001', '01-A-01-A', '04/15/2020 ', '218'],
                    [{
                        ischeckbox: true,
                        value: false
                    }, '1332101', 'SEAL,INPRO,BEARING ISOLATOR', 'DRSL', '0001', '01-A-01-A', '04/15/2020 ', '218'],
                    [
                        {
                            ischeckbox: true,
                            value: false  
                        }, '1332100', 'BEARING ISOLATOR (INPRO) RADIAL', 'DRSL', '0001', '01-A-02-A', '04/15/2020 ', '219'
                    ],
                    [
                        {
                            ischeckbox: true,
                            value: false  
                        }, '1333454', 'INPRO SEAL ASSEMBLY (RADIAL)', 'DRSL', '0001', '01-A-02-A', '04/15/2020 ', '219'
                    ],
                    [
                        {
                            ischeckbox: true,
                            value: false  
                        }, '1333455', 'INPRO SEAL ASSEMBLY (RADIAL)', 'DRSL', '0001', '01-A-02-A', '04/15/2020 ', '219'
                    ]
                ],
                isOpen: true,
                ischeck: false
            },
            {
                headerName: 'Storage Bin: 01-A-02-B (3 item)',
                row: [
                    [
                        {
                        ischeckbox: true,
                        value: false
                    },
                     '1073416', 'PUMP,OIL', 'DRSL', '0001', '01-A-02-B', ' ', ' '],
                    [{
                        ischeckbox: true,
                        value: false
                    }, '1073426', 'SHAFT,PINION', 'DRSL', '0001', '01-A-02-B', '04/15/2020 ', '218'],
                    [{
                        ischeckbox: true,
                        value: false
                    }, '1073427', 'SHAFT', 'DRSL', '0001', '01-A-02-B', '04/15/2020 ', '218']
                ],
                isOpen: true,
                ischeck: false
            },
            {
                headerName: 'Storage Bin: 01-A-02-C (3 item)',
                row: [
                    [
                        {
                        ischeckbox: true,
                        value: false
                    },
                     '1073416', 'PUMP,OIL', 'DRSL', '0001', '01-A-02-C', ' ', ' '],
                    [{
                        ischeckbox: true,
                        value: false
                    }, '1073426', 'SHAFT,PINION', 'DRSL', '0001', '01-A-02-C', '04/15/2020 ', '218'],
                    [{
                        ischeckbox: true,
                        value: false
                    }, '1073427', 'SHAFT', 'DRSL', '0001', '01-A-02-C', '04/15/2020 ', '218']
                ],
                isOpen: true,
                ischeck: false
            },
            {
                headerName: 'Storage Bin: 01-A-02-D (3 item)',
                row: [
                    [
                        {
                        ischeckbox: true,
                        value: false
                    },
                     '1073416', 'PUMP,OIL', 'DRSL', '0001', '01-A-02-D', ' ', ' '],
                    [{
                        ischeckbox: true,
                        value: false
                    }, '1073426', 'SHAFT,PINION', 'DRSL', '0001', '01-A-02-D', '04/15/2020 ', '218'],
                    [{
                        ischeckbox: true,
                        value: false
                    }, '1073427', 'SHAFT', 'DRSL', '0001', '01-A-02-D', '04/15/2020 ', '218']
                ],
                isOpen: true,
                ischeck: false
            },
            {
                headerName: 'Storage Bin: 01-A-02-E (3 item)',
                row: [
                    [
                        {
                        ischeckbox: true,
                        value: false
                    },
                     '1073416', 'PUMP,OIL', 'DRSL', '0001', '01-A-02-E', ' ', ' '],
                    [{
                        ischeckbox: true,
                        value: false
                    }, '1073426', 'SHAFT,PINION', 'DRSL', '0001', '01-A-02-E', '04/15/2020 ', '218'],
                    [{
                        ischeckbox: true,
                        value: false
                    }, '1073427', 'SHAFT', 'DRSL', '0001', '01-A-02-E', '04/15/2020 ', '218']
                ],
                isOpen: true,
                ischeck: false
            },
        ];
    }

    headerClick(i) {
        console.log(i);

        this.tableData[i].isOpen = !this.tableData[i].isOpen;
        
    }

    selectAll(i) {
        this.tableData[i].row.map((data, index) => {
            console.log(data, index );
                this.tableData[i].row[index][0].value = this.tableData[i].ischeck;
        })
    }

    onCycleCountClick() {
        this.route.navigate(['/cycleOverviewDetails'])
    }
}