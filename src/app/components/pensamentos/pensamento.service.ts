import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pensamento } from './pensamento';

@Injectable({
    providedIn: 'root'
})

export class PensamentoService {
    private readonly API = 'http://localhost:15075/Pensamentos';

    constructor(private http: HttpClient) { }

    listar(): Observable<Pensamento[]> {
        return this.http.get<Pensamento[]>(this.API);
    }

    criarPensamento(pensamento: Pensamento): Observable<Pensamento> {
        return this.http.post<Pensamento>(this.API, pensamento);
    }

    editarPensamento(id:any, pensamento: Pensamento): Observable<Pensamento> {
        return this.http.put<Pensamento>(`${this.API}/${id}`, pensamento);
    }

    removerPensamento(id: number): Observable<any> {
        return this.http.delete<any>(`${this.API}/${id}`);
    }

    buscarPorId(id: any): Observable<Pensamento> {
        return this.http.get<Pensamento>(`${this.API}/${id}`);
    }
}