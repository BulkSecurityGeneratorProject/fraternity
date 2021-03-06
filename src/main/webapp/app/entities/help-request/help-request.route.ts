import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';
import { UserRouteAccessService } from 'app/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { HelpRequest } from 'app/shared/model/help-request.model';
import { HelpRequestService } from './help-request.service';
import { HelpRequestComponent } from './help-request.component';
import { HelpRequestDetailComponent } from './help-request-detail.component';
import { HelpRequestUpdateComponent } from './help-request-update.component';
import { HelpRequestDeletePopupComponent } from './help-request-delete-dialog.component';
import { IHelpRequest } from 'app/shared/model/help-request.model';

@Injectable({ providedIn: 'root' })
export class HelpRequestResolve implements Resolve<IHelpRequest> {
    constructor(private service: HelpRequestService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IHelpRequest> {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(
                filter((response: HttpResponse<HelpRequest>) => response.ok),
                map((helpRequest: HttpResponse<HelpRequest>) => helpRequest.body)
            );
        }
        return of(new HelpRequest());
    }
}

export const helpRequestRoute: Routes = [
    {
        path: '',
        component: HelpRequestComponent,
        resolve: {
            pagingParams: JhiResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            defaultSort: 'id,asc',
            pageTitle: 'fraternityApp.helpRequest.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: ':id/view',
        component: HelpRequestDetailComponent,
        resolve: {
            helpRequest: HelpRequestResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'fraternityApp.helpRequest.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'new',
        component: HelpRequestUpdateComponent,
        resolve: {
            helpRequest: HelpRequestResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'fraternityApp.helpRequest.home.title'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: ':id/edit',
        component: HelpRequestUpdateComponent,
        resolve: {
            helpRequest: HelpRequestResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'fraternityApp.helpRequest.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const helpRequestPopupRoute: Routes = [
    {
        path: ':id/delete',
        component: HelpRequestDeletePopupComponent,
        resolve: {
            helpRequest: HelpRequestResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'fraternityApp.helpRequest.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
