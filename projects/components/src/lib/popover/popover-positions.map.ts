import { ConnectedPosition } from "@angular/cdk/overlay";

export interface IPositionsMap {
    [index: string | PositionOption]: ConnectedPosition;
}

export const positionsMap: IPositionsMap = {
    CBCB: { originX: 'center', originY: 'bottom', overlayX: 'center', overlayY: 'bottom', },
    CBCC: { originX: 'center', originY: 'bottom', overlayX: 'center', overlayY: 'center', },
    CBCT: { originX: 'center', originY: 'bottom', overlayX: 'center', overlayY: 'top', },

    CBEB: { originX: 'center', originY: 'bottom', overlayX: 'end', overlayY: 'bottom', },
    CBEC: { originX: 'center', originY: 'bottom', overlayX: 'end', overlayY: 'center', },
    CBET: { originX: 'center', originY: 'bottom', overlayX: 'end', overlayY: 'top', },

    CBSB: { originX: 'center', originY: 'bottom', overlayX: 'start', overlayY: 'bottom', },
    CBSC: { originX: 'center', originY: 'bottom', overlayX: 'start', overlayY: 'center', },
    CBST: { originX: 'center', originY: 'bottom', overlayX: 'start', overlayY: 'top', },

    CCCB: { originX: 'center', originY: 'center', overlayX: 'center', overlayY: 'bottom', },
    CCCC: { originX: 'center', originY: 'center', overlayX: 'center', overlayY: 'center', },
    CCCT: { originX: 'center', originY: 'center', overlayX: 'center', overlayY: 'top', },

    CCEB: { originX: 'center', originY: 'center', overlayX: 'end', overlayY: 'bottom', },
    CCEC: { originX: 'center', originY: 'center', overlayX: 'end', overlayY: 'center', },
    CCET: { originX: 'center', originY: 'center', overlayX: 'end', overlayY: 'top', },

    CCSB: { originX: 'center', originY: 'center', overlayX: 'start', overlayY: 'bottom', },
    CCSC: { originX: 'center', originY: 'center', overlayX: 'start', overlayY: 'center', },
    CCST: { originX: 'center', originY: 'center', overlayX: 'start', overlayY: 'top', },

    CTCB: { originX: 'center', originY: 'top', overlayX: 'center', overlayY: 'bottom', },
    CTCC: { originX: 'center', originY: 'top', overlayX: 'center', overlayY: 'center', },
    CTCT: { originX: 'center', originY: 'top', overlayX: 'center', overlayY: 'top', },

    CTEB: { originX: 'center', originY: 'top', overlayX: 'end', overlayY: 'bottom', },
    CTEC: { originX: 'center', originY: 'top', overlayX: 'end', overlayY: 'center', },
    CTET: { originX: 'center', originY: 'top', overlayX: 'end', overlayY: 'top', },

    CTSB: { originX: 'center', originY: 'top', overlayX: 'start', overlayY: 'bottom', },
    CTSC: { originX: 'center', originY: 'top', overlayX: 'start', overlayY: 'center', },
    CTST: { originX: 'center', originY: 'top', overlayX: 'start', overlayY: 'top', },

    EBCB: { originX: 'end', originY: 'bottom', overlayX: 'center', overlayY: 'bottom', },
    EBCC: { originX: 'end', originY: 'bottom', overlayX: 'center', overlayY: 'center', },
    EBCT: { originX: 'end', originY: 'bottom', overlayX: 'center', overlayY: 'top', },

    EBEB: { originX: 'end', originY: 'bottom', overlayX: 'end', overlayY: 'bottom', },
    EBEC: { originX: 'end', originY: 'bottom', overlayX: 'end', overlayY: 'center', },
    EBET: { originX: 'end', originY: 'bottom', overlayX: 'end', overlayY: 'top', },

    EBSB: { originX: 'end', originY: 'bottom', overlayX: 'start', overlayY: 'bottom', },
    EBSC: { originX: 'end', originY: 'bottom', overlayX: 'start', overlayY: 'center', },
    EBST: { originX: 'end', originY: 'bottom', overlayX: 'start', overlayY: 'top', },

    ECCB: { originX: 'end', originY: 'center', overlayX: 'center', overlayY: 'bottom', },
    ECCC: { originX: 'end', originY: 'center', overlayX: 'center', overlayY: 'center', },
    ECCT: { originX: 'end', originY: 'center', overlayX: 'center', overlayY: 'top', },

    ECEB: { originX: 'end', originY: 'center', overlayX: 'end', overlayY: 'bottom', },
    ECEC: { originX: 'end', originY: 'center', overlayX: 'end', overlayY: 'center', },
    ECET: { originX: 'end', originY: 'center', overlayX: 'end', overlayY: 'top', },

    ECSB: { originX: 'end', originY: 'center', overlayX: 'start', overlayY: 'bottom', },
    ECSC: { originX: 'end', originY: 'center', overlayX: 'start', overlayY: 'center', },
    ECST: { originX: 'end', originY: 'center', overlayX: 'start', overlayY: 'top', },

    ETCB: { originX: 'end', originY: 'top', overlayX: 'center', overlayY: 'bottom', },
    ETCC: { originX: 'end', originY: 'top', overlayX: 'center', overlayY: 'center', },
    ETCT: { originX: 'end', originY: 'top', overlayX: 'center', overlayY: 'top', },

    ETEB: { originX: 'end', originY: 'top', overlayX: 'end', overlayY: 'bottom', },
    ETEC: { originX: 'end', originY: 'top', overlayX: 'end', overlayY: 'center', },
    ETET: { originX: 'end', originY: 'top', overlayX: 'end', overlayY: 'top', },

    ETSB: { originX: 'end', originY: 'top', overlayX: 'start', overlayY: 'bottom', },
    ETSC: { originX: 'end', originY: 'top', overlayX: 'start', overlayY: 'center', },
    ETST: { originX: 'end', originY: 'top', overlayX: 'start', overlayY: 'top', },

    SBCB: { originX: 'start', originY: 'bottom', overlayX: 'center', overlayY: 'bottom', },
    SBCC: { originX: 'start', originY: 'bottom', overlayX: 'center', overlayY: 'center', },
    SBCT: { originX: 'start', originY: 'bottom', overlayX: 'center', overlayY: 'top', },

    SBEB: { originX: 'start', originY: 'bottom', overlayX: 'end', overlayY: 'bottom', },
    SBEC: { originX: 'start', originY: 'bottom', overlayX: 'end', overlayY: 'center', },
    SBET: { originX: 'start', originY: 'bottom', overlayX: 'end', overlayY: 'top', },

    SBSB: { originX: 'start', originY: 'bottom', overlayX: 'start', overlayY: 'bottom', },
    SBSC: { originX: 'start', originY: 'bottom', overlayX: 'start', overlayY: 'center', },
    SBST: { originX: 'start', originY: 'bottom', overlayX: 'start', overlayY: 'top', },

    SCCB: { originX: 'start', originY: 'center', overlayX: 'center', overlayY: 'bottom', },
    SCCC: { originX: 'start', originY: 'center', overlayX: 'center', overlayY: 'center', },
    SCCT: { originX: 'start', originY: 'center', overlayX: 'center', overlayY: 'top', },

    SCEB: { originX: 'start', originY: 'center', overlayX: 'end', overlayY: 'bottom', },
    SCEC: { originX: 'start', originY: 'center', overlayX: 'end', overlayY: 'center', },
    SCET: { originX: 'start', originY: 'center', overlayX: 'end', overlayY: 'top', },

    SCSB: { originX: 'start', originY: 'center', overlayX: 'start', overlayY: 'bottom', },
    SCSC: { originX: 'start', originY: 'center', overlayX: 'start', overlayY: 'center', },
    SCST: { originX: 'start', originY: 'center', overlayX: 'start', overlayY: 'top', },

    STCB: { originX: 'start', originY: 'top', overlayX: 'center', overlayY: 'bottom', },
    STCC: { originX: 'start', originY: 'top', overlayX: 'center', overlayY: 'center', },
    STCT: { originX: 'start', originY: 'top', overlayX: 'center', overlayY: 'top', },

    STEB: { originX: 'start', originY: 'top', overlayX: 'end', overlayY: 'bottom', },
    STEC: { originX: 'start', originY: 'top', overlayX: 'end', overlayY: 'center', },
    STET: { originX: 'start', originY: 'top', overlayX: 'end', overlayY: 'top', },

    STSB: { originX: 'start', originY: 'top', overlayX: 'start', overlayY: 'bottom', },
    STSC: { originX: 'start', originY: 'top', overlayX: 'start', overlayY: 'center', },
    STST: { originX: 'start', originY: 'top', overlayX: 'start', overlayY: 'top', },
};

export type PositionOption = 
'CBCB' |
'CBCC' |
'CBCT' |
'CBEB' |
'CBEC' |
'CBET' |
'CBSB' |
'CBSC' |
'CBST' |
'CCCB' |
'CCCC' |
'CCCT' |
'CCEB' |
'CCEC' |
'CCET' |
'CCSB' |
'CCSC' |
'CCST' |
'CTCB' |
'CTCC' |
'CTCT' |
'CTEB' |
'CTEC' |
'CTET' |
'CTSB' |
'CTSC' |
'CTST' |
'EBCB' |
'EBCC' |
'EBCT' |
'EBEB' |
'EBEC' |
'EBET' |
'EBSB' |
'EBSC' |
'EBST' |
'ECCB' |
'ECCC' |
'ECCT' |
'ECEB' |
'ECEC' |
'ECET' |
'ECSB' |
'ECSC' |
'ECST' |
'ETCB' |
'ETCC' |
'ETCT' |
'ETEB' |
'ETEC' |
'ETET' |
'ETSB' |
'ETSC' |
'ETST' |
'SBCB' |
'SBCC' |
'SBCT' |
'SBEB' |
'SBEC' |
'SBET' |
'SBSB' |
'SBSC' |
'SBST' |
'SCCB' |
'SCCC' |
'SCCT' |
'SCEB' |
'SCEC' |
'SCET' |
'SCSB' |
'SCSC' |
'SCST' |
'STCB' |
'STCC' |
'STCT' |
'STEB' |
'STEC' |
'STET' |
'STSB' |
'STSC' |
'STST';