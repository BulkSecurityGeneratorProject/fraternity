import { Moment } from 'moment';
import { IHelpAction } from 'app/shared/model/help-action.model';

export interface IHelpOffer {
    id?: number;
    title?: string;
    description?: string;
    datePost?: Moment;
    dateStart?: Moment;
    dateEnd?: Moment;
    helpO?: IHelpAction;
}

export class HelpOffer implements IHelpOffer {
    constructor(
        public id?: number,
        public title?: string,
        public description?: string,
        public datePost?: Moment,
        public dateStart?: Moment,
        public dateEnd?: Moment,
        public helpO?: IHelpAction
    ) {}
}