import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  ActivatedRoute,
  Router,
  Navigation,
  UrlTree,
  UrlSegment,
  UrlSegmentGroup,
  ParamMap,
} from '@angular/router';
import { GameScreenComponent } from './game-screen.component';

describe('GameScreenComponent', () => {
  let component: GameScreenComponent;
  let fixture: ComponentFixture<GameScreenComponent>;
  let mockActivatedRoute: Partial<ActivatedRoute>;
  let mockRouter: Partial<Router>;

  beforeEach(async () => {
    const mockParamMap: ParamMap = {
      get: (key: string) => (key === 'category' ? 'test-category' : null),
      has: (key: string) => key === 'category',
      getAll: (key: string) => (key === 'category' ? ['test-category'] : []),
      keys: ['category'],
    };

    const mockUrlSegment: UrlSegment = {
      path: '',
      parameters: {},
      parameterMap: mockParamMap,
      toString: () => '',
    };

    const mockUrlSegmentGroup: UrlSegmentGroup = {
      segments: [mockUrlSegment],
      children: {} as any,
      parent: null,
      hasChildren: () => false,
      numberOfChildren: 0,
    };

    const mockUrlTree: UrlTree = {
      root: mockUrlSegmentGroup,
      queryParams: {},
      fragment: null,
      queryParamMap: mockParamMap,
      toString: () => '',
    };

    const mockNavigation: Navigation = {
      id: 1,
      initialUrl: mockUrlTree,
      extractedUrl: mockUrlTree,
      trigger: 'imperative',
      extras: {
        state: { data: [{ name: 'test', selected: false }] },
      },
      previousNavigation: null,
    };

    mockActivatedRoute = {
      snapshot: {
        paramMap: mockParamMap,
      } as any,
    };

    mockRouter = {
      navigate: jest.fn(),
      getCurrentNavigation: () => mockNavigation as Navigation,
    };

    await TestBed.configureTestingModule({
      declarations: [GameScreenComponent],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Router, useValue: mockRouter },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize category and words from router state', () => {
    expect(component.category).toBe('test-category');
    expect(component.words).toEqual([{ name: 'test', selected: false }]);
  });

  it('should select a random word on init', () => {
    component.ngOnInit();
    expect(component.word).toBe('test');
    expect(component.wordDisplay).toBe('____');
  });

  it('should update word display on correct guess', () => {
    component.word = 'test';
    component.wordDisplay = '____';
    component.guessLetter('t');
    expect(component.wordDisplay).toBe('t__t');
  });

  it('should decrease attempts on wrong guess', () => {
    component.word = 'test';
    component.attempts = 8;
    component.guessLetter('z');
    expect(component.attempts).toBe(7);
  });

  it('should show game over modal on losing', () => {
    component.word = 'test';
    component.attempts = 1;
    component.guessLetter('z');
    expect(component.message).toBe('You Lose!');
    expect(component.modalType).toBe('gameOver');
    expect(component.showModal).toBe(true);
  });

  it('should show game over modal on winning', () => {
    component.word = 'test';
    component.wordDisplay = 'tes_';
    component.guessLetter('t');
    expect(component.message).toBe('You Win!');
    expect(component.modalType).toBe('gameOver');
    expect(component.showModal).toBe(true);
  });

  it('should reset the game correctly', () => {
    const ngOnInitSpy = jest.spyOn(component, 'ngOnInit');

    component.word = 'test';
    component.wordDisplay = '____';
    component.message = 'You Lose!';
    component.attempts = 3;
    component.guessedLetters.add('t');
    component.showModal = true;
    component.isPaused = true;

    component.resetGame();

    expect(component.word).toBe('');
    expect(component.wordDisplay).toBe('');
    expect(component.message).toBe('');
    expect(component.attempts).toBe(8);
    expect(component.guessedLetters.size).toBe(0);
    expect(component.showModal).toBe(false);
    expect(component.isPaused).toBe(false);

    expect(ngOnInitSpy).toHaveBeenCalled();
  });

  it('should navigate to pick category', () => {
    component.newCategory();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/pick-category']);
  });

  it('should navigate to home on quitting game', () => {
    component.quitGame();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/']);
  });

  it('should pause and show paused modal', () => {
    component.openMenu();
    expect(component.isPaused).toBe(true);
    expect(component.message).toBe('Paused');
    expect(component.modalType).toBe('paused');
    expect(component.showModal).toBe(true);
  });

  it('should continue the game', () => {
    component.continueGame();
    expect(component.isPaused).toBe(false);
    expect(component.message).toBe('');
    expect(component.showModal).toBe(false);
  });
});
