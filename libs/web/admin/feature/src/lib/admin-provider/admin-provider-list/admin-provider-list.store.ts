import { Injectable } from '@angular/core'
import { WebCoreDataAccessService, AdminListProviderInput, Provider } from '@demo/web/core/data-access'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { switchMap, tap, withLatestFrom } from 'rxjs/operators'

export interface ProviderListState {
  input: AdminListProviderInput
  errors?: any
  loading?: boolean
  items?: Provider[]
}

@Injectable()
export class AdminProviderListStore extends ComponentStore<ProviderListState> {
  constructor(private readonly data: WebCoreDataAccessService) {
    super({ input: { skip: 0, limit: 10 } })
  }

  readonly errors$ = this.select((s) => s.errors)
  readonly loading$ = this.select((s) => s.loading)
  readonly input$ = this.select((s) => s.input)
  readonly items$ = this.select((s) => s.items)
  readonly vm$ = this.select(
    this.errors$,
    this.loading$,
    this.input$,
    this.items$,
    (errors, loading, input, items) => ({
      errors,
      loading,
      input,
      items,
    }),
  )

  readonly loadProvidersEffect = this.effect(($) =>
    $.pipe(
      tap(() => this.patchState({ loading: true })),
      withLatestFrom(this.input$),
      switchMap(([_, input]) =>
        this.data.adminProviders({ input }).pipe(
          tapResponse(
            (res) => this.patchState({ items: res.data.items, errors: res.errors, loading: false }),
            (errors: any) =>
              this.patchState({
                loading: false,
                errors: errors.graphQLErrors ? errors.graphQLErrors : errors,
              }),
          ),
        ),
      ),
    ),
  )
}
