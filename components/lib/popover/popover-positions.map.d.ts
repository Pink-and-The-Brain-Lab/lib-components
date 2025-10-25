import { ConnectedPosition } from "@angular/cdk/overlay";
export interface IPositionsMap {
    [index: string | PositionOption]: ConnectedPosition;
}
export declare const positionsMap: IPositionsMap;
export type PositionOption = 'CBCB' | 'CBCC' | 'CBCT' | 'CBEB' | 'CBEC' | 'CBET' | 'CBSB' | 'CBSC' | 'CBST' | 'CCCB' | 'CCCC' | 'CCCT' | 'CCEB' | 'CCEC' | 'CCET' | 'CCSB' | 'CCSC' | 'CCST' | 'CTCB' | 'CTCC' | 'CTCT' | 'CTEB' | 'CTEC' | 'CTET' | 'CTSB' | 'CTSC' | 'CTST' | 'EBCB' | 'EBCC' | 'EBCT' | 'EBEB' | 'EBEC' | 'EBET' | 'EBSB' | 'EBSC' | 'EBST' | 'ECCB' | 'ECCC' | 'ECCT' | 'ECEB' | 'ECEC' | 'ECET' | 'ECSB' | 'ECSC' | 'ECST' | 'ETCB' | 'ETCC' | 'ETCT' | 'ETEB' | 'ETEC' | 'ETET' | 'ETSB' | 'ETSC' | 'ETST' | 'SBCB' | 'SBCC' | 'SBCT' | 'SBEB' | 'SBEC' | 'SBET' | 'SBSB' | 'SBSC' | 'SBST' | 'SCCB' | 'SCCC' | 'SCCT' | 'SCEB' | 'SCEC' | 'SCET' | 'SCSB' | 'SCSC' | 'SCST' | 'STCB' | 'STCC' | 'STCT' | 'STEB' | 'STEC' | 'STET' | 'STSB' | 'STSC' | 'STST';
