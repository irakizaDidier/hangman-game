import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game-screen',
  templateUrl: './game-screen.component.html',
  styleUrls: ['./game-screen.component.css'],
})
export class GameScreenComponent implements OnInit {
  category: string;
  words: { name: string; selected: boolean }[] = [];
  word: string = '';
  wordDisplay: string = '';
  letters: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
  message: string = '';
  attempts: number = 8;
  guessedLetters: Set<string> = new Set();

  constructor(private route: ActivatedRoute, private router: Router) {
    this.category = this.route.snapshot.paramMap.get('category')!;
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.words = navigation.extras.state['data'] || [];
    }
  }

  ngOnInit(): void {
    if (this.words.length > 0) {
      this.word = this.selectRandomWord(this.words);
      this.wordDisplay = '_ '.repeat(this.word.length).trim();
    }
  }

  selectRandomWord(words: { name: string; selected: boolean }[]): string {
    const availableWords = words.filter((word) => !word.selected);
    if (availableWords.length === 0) {
      return '';
    }
    const randomIndex = Math.floor(Math.random() * availableWords.length);
    return availableWords[randomIndex].name.toLowerCase();
  }

  guessLetter(letter: string): void {
    if (this.guessedLetters.has(letter) || this.message) {
      return;
    }

    this.guessedLetters.add(letter);

    if (this.word.includes(letter)) {
      this.updateWordDisplay(letter);
    } else {
      this.attempts--;
      if (this.attempts === 0) {
        this.message = 'You Lose!';
      }
    }

    if (this.wordDisplay.indexOf('_') === -1) {
      this.message = 'You Win!';
    }
  }

  updateWordDisplay(letter: string): void {
    let newDisplay = '';
    for (let i = 0; i < this.word.length; i++) {
      newDisplay += this.word[i] === letter ? letter : this.wordDisplay[i * 2];
      newDisplay += ' ';
    }
    this.wordDisplay = newDisplay.trim();
  }

  resetGame(): void {
    this.word = '';
    this.wordDisplay = '';
    this.message = '';
    this.attempts = 8;
    this.guessedLetters.clear();
    this.ngOnInit();
  }
}
