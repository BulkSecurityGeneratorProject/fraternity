import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';
import { UserRouteAccessService } from 'app/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { HelpOffer } from 'app/shared/model/help-offer.model';
import { HelpOfferService } from './help-offer.service';
import { HelpOfferComponent } from './help-offer.component';
import { HelpOfferDetailComponent } from './help-offer-detail.component';
import { HelpOfferUpdateComponent } from './help-offer-update.component';
import { HelpOfferDeletePopupComponent } from './help-offer-delete-dialog.component';
import { IHelpOffer } from 'app/shared/model/help-offer.model';

@Injectable({ providedIn: 'root' })
export class HelpOfferResolve implements Resolve<IHelpOffer> {
    constructor(private service: HelpOfferService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IHelpOffer> {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(
                filter((response: HttpResponse<HelpOffer>) => response.ok),
                map((helpOffer: HttpResponse<HelpOffer>) => helpOffer.body)
            );
        }
        return of(new HelpOffer());
    }
}

export const helpOfferRoute: Routes = [
    {
        path: '',
        component: HelpOfferComponent,
        resolve: {
            pagingParams: JhiResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            defaultSort: 'id,asc',
            pageTitle: 'fraternityApp.helpOffer.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: ':id/view',
        component: HelpOfferDetailComponent,
        resolve: {
            helpOffer: HelpOfferResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'fraternityApp.helpOffer.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'new',
        component: HelpOfferUpdateComponent,
        resolve: {
            helpOffer: HelpOfferResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'fraternityApp.helpOffer.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: ':id/edit',
        component: HelpOfferUpdateComponent,
        resolve: {
            helpOffer: HelpOfferResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'fraternityApp.helpOffer.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const helpOfferPopupRoute: Routes = [
    {
        path: ':id/delete',
        component: HelpOfferDeletePopupComponent,
        resolve: {
            helpOffer: HelpOfferResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'fraternityApp.helpOffer.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
