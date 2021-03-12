/* Задание на урок №1:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

// Задание на урок №2:

/* 1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
str.length - и получить её длину)

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами */

'use strict';

const numberOfFilms = +prompt('How many movies have you already watched?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 1; i++ ) {
    const numberOfFilms = +prompt('How many movies have you already watched?', '');
        console.log(numberOfFilms);
    if (numberOfFilms == '' || numberOfFilms == null) {
        alert('Please, answer the question by using number');
        i--;
    } else if (personalMovieDB.count < 10) {
        alert('You watched quite a few movies');
        console.log('You watched quite a few movies');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert('You are a classic viewer');
        console.log('You are a classic viewer');
    } else if (personalMovieDB.count >= 30) {
        alert('You are a real movie fan');
        console.log('You are a real movie fan');
    } else {
        alert('You have not answer the question!');
        console.log('You have not answer the question!');
    }
}

for (let i = 0; i < 2; i++) {
    const a = prompt('Name one of the last movies you watched', ''),
          b = prompt('How did you rate the movie?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('Done');
    } else {
        console.log('Error!!!');
        i--;
    }    
}

/* let i = 0;
while (i < 2) {
    const a = prompt('Name one of the last movies you watched', ''),
          b = prompt('How did you rate the movie?', '');
    i++;
    if  (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
        personalMovieDB.movies[a] = b;
        alert('Done');
        console.log('Done');
    } else {
        alert('Error!');
        console.log('Error!');
        i--;
    }
} */


/* let i = 0;
do {
    const a = prompt('Name one of the last movies you watched', ''),
          b = prompt('How did you rate the movie?', '');
    i++;
    if  (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
        personalMovieDB.movies[a] = b;
        alert('Done');
        console.log('Done');
    } else {
        alert('Error!');
        console.log('Error!');
        i--;
    }
}
while (i < 2); */

console.log(personalMovieDB);