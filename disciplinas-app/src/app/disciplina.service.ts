import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {
  private apiUrl = 'http://localhost:3000/disciplinas';

  constructor(private http: HttpClient) { }

  getDisciplinas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addDisciplina(disciplina: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, disciplina);
  }

  editarDisciplina(disciplina: any): Observable<any> {
    const url = `${this.apiUrl}/${disciplina.id}`;
    return this.http.put<any>(url, disciplina);
  }

  excluirDisciplina(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}
