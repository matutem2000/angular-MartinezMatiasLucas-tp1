import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Subject } from "rxjs/internal/Subject";

@Injectable({ providedIn: 'root'})
export class LoadingService {
   private loadingTriggered$ = new BehaviorSubject<boolean>(false);

    public isLoading$= this.loadingTriggered$.asObservable();

    setIsLoading(value: boolean): void{
        console.log('el valor en el loading.service.ts',value);
            this.loadingTriggered$.next(value);
    }
}