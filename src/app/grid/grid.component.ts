import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})

export class GridComponent implements OnInit{
  
  cases: any[];
  isGameOver: boolean;
  isGameWon: boolean;
  nbErrors: number;

  constructor() {
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.setupGrid();
    this.isGameOver = false; 
    this.isGameWon = false;
    this.nbErrors = 0;
  }

  // Creation of a 9x9 sudoku grid
  setupGrid() {
    this.cases = [];
    for (let i = 0; i < 9; i++) {
      this.cases[i] = [];
      for (let j = 0; j < 9; j++) {
          this.cases[i][j] = 0;
      }
    }
  }

}
