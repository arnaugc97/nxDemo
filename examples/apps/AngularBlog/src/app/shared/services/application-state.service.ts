/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable, signal, computed } from '@angular/core';

export interface State<T> {
  loading: boolean;
  entities: { [key: string]: T };
  error: boolean;
  totalResults: number;
}

export const initialState = {
  loading: false,
  entities: {},
  error: false,
  totalResults: 0,
};

@Injectable({
  providedIn: 'root',
})
export class ApplicationStateService<T> {
  private state = signal<State<T>>(initialState);

  public entities$ = computed(() => {
    const entities = this.state().entities;
    return Object.keys(entities).map((key) => entities[key]);
  });

  public loading$ = computed(() => this.state().loading);

  public error$ = computed(() => this.state().error);

  public totalResults$ = computed(() => this.state().totalResults);

  public setLoading(loading: boolean): void {
    this.state.update((currentState) => ({
      ...currentState,
      loading,
      error: loading ? false : currentState.error,
    }));
  }

  public setError(): void {
    this.state.update((currentState) => ({
      ...currentState,
      error: true,
    }));
  }

  public setTotalResults(totalResults: number): void {
    this.state.update((currentState) => ({
      ...currentState,
      totalResults,
    }));
  }

  public getEntity(id: string): T | undefined {
    return this.entities$().find((entity: any) => entity.id.value === id);
  }

  public setEntities(data: T[]): void {
    const newEntities = data.reduce(
      (acc, entity: any) => ({ ...acc, [entity.id.value]: entity }),
      {}
    );
    this.state.update((currentState) => ({
      ...currentState,
      entities: newEntities,
    }));
  }

  public setEntity(data: any): void {
    this.state.update((currentState) => ({
      ...currentState,
      entities: { ...currentState.entities, [data.id.value]: data },
    }));
  }

  public deleteItem(id: string): void {
    this.state.update((currentState) => {
      const { [id]: removed, ...newEntities } = currentState.entities;
      return {
        ...currentState,
        entities: newEntities,
      };
    });
  }

  async dispatch(fun: () => any): Promise<void> {
    this.setLoading(true);
    try {
      await fun();
      this.setLoading(false);
    } catch (e) {
      this.setError();
      this.setLoading(false);
      throw e;
    }
  }
}
