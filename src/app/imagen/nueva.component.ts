import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ImagenService } from '../services/imagen.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-nueva',
  templateUrl: './nueva.component.html',
  styleUrls: ['./nueva.component.css']
})
export class NuevaComponent implements OnInit {

  constructor(
    private imagenService: ImagenService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
  }

}
