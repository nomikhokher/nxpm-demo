import { Component, OnInit } from '@angular/core'
import { AdminProviderListStore } from './admin-provider-list.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-page-header title="Providers" linkPath="create" linkTitle="Create Provider"></ui-page-header>
      <ng-container *ngIf="vm.loading">
        <div class="flex py-36 animate-pulse justify-center align-center">LOADING...</div>
      </ng-container>
      <ng-container *ngIf="!vm.loading">
        <ng-container *ngIf="!vm.items?.length">
          <div class="flex py-20 justify-center align-center">No Providers found...</div>
        </ng-container>
        <div class="flex flex-col space-y-6">
          <ng-container *ngFor="let item of vm.items">
            <div class="dark:bg-gray-800 px-6 py-4 rounded-md">
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <div class="ml-4">
                    <div class="text-lg font-medium text-gray-900 dark:text-gray-200">
                      <a [routerLink]="item?.id">
                        {{ item?.name }}
                      </a>
                    </div>
                    <div class="text-lg text-gray-500">
                      {{ item?.updatedAt | date: 'short' }}
                    </div>
                  </div>
                </div>
                <div class="flex space-x-2">
                  <ui-button [routerLink]="[item?.id, 'edit']" label="Edit"></ui-button>
                </div>
              </div>
            </div>
          </ng-container>
        </div>
      </ng-container>
    </ng-container>
  `,
  providers: [AdminProviderListStore],
})
export class AdminProviderListComponent implements OnInit {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: AdminProviderListStore) {}

  ngOnInit(): void {
    this.store.loadProvidersEffect()
  }
}
