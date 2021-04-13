import { Categories } from './../interfaces/categories';
import { Observable } from 'rxjs';

export class CategoriesServiceMock {

    getCategories(): Observable<Categories[]> {
        return new Observable<Categories[]>(observer => {
            observer.next([
                { id: 'dasdasd', name: 'Ração', description: '', subcategories: ['ração seca'], url: '' },
                { id: 'dasdasd', name: 'Brinquedos', description: '', subcategories: ['pelucia'], url: '' }
            ]);
            observer.complete();
        });
    }
}
