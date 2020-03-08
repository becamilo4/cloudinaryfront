import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Imagen } from '../models/imagen';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  imageURL='http://localhost:8080/cloudinary/'
  CoinURL= "https://free.currconv.com/api/v7/convert?q=USD_COP&compact=ultra&apiKey=94b426310f86b90cd36d"

  constructor(private httpClient: HttpClient) { }

  public coinValue(): Observable<any>{
    return this.httpClient.get<any>(this.CoinURL)
  }

  public list(): Observable<Imagen[]>{
    return this.httpClient.get<Imagen[]>(this.imageURL + 'list');
  }

  public upload(imagen: File, prize: number, peso: number, description: String): Observable<any>{
    const formData = new FormData();
    formData.append('multipartFile', imagen);
    formData.append('prize', prize.toString());
    formData.append('peso', peso.toString());
    formData.append('description', description.toString());
    console.log(formData.getAll('multipartFile'));
    return this.httpClient.post<any>(this.imageURL+'upload',formData);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.imageURL+`delete/${id}`);
  }
}
