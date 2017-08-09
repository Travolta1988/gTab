import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chords',
  templateUrl: './chords.component.html',
  styleUrls: ['./chords.component.css']
})
export class ChordsComponent implements OnInit {

  engLettersString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  rusLettersString = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
  rusLetters: any[];
  engLetters: any[];

  constructor() { }

  ngOnInit() {
    this.rusLetters = this.rusLettersString.split('');
    this.engLetters = this.engLettersString.split('');
  }

}
