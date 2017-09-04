; Russian version follows / Русская версия ниже
;
; Define a procedure sum-of-squares-of-top-two that takes three numbers as arguments and returns the sum of the squares of the two larger numbers.
;
; For example:
;
; if argument numbers are 1, 2 and 4, then the procedure should return 2^2 + 4^2 = 4 + 16 = 20.
; if argument numbers are 9, 3 and 7, then the procedure should return 9^2 + 7^2 = 81 + 49 = 130.
; Создайте процедуру sum-of-squares-of-top-two, которая принимает три числа и возвращает сумму квадратов двух наибольших чисел.
;
; Например:
;
; если аргументы это 1, 2 и 4, тогда процедура должна вернуть 2^2 + 4^2 = 4 + 16 = 20.
; если аргументы это 9, 3 и 7, тогда процедура должна вернуть 9^2 + 7^2 = 81 + 49 = 130.


#lang racket/base

(require rackunit)

;; BEGIN (write your solution here)
(define (sum-of-squares-of-top-two a b c)
    (define (square x)
        (* x x))
    (cond
          ((and (> a c) (> b c)) (+ (square a) (square b)))
          ((and (> a b) (> c b)) (+ (square a) (square c)))
          (else (+ (square c) (square b)))))
;; END

(check-equal? (sum-of-squares-of-top-two 1 2 3) 13)
(check-equal? (sum-of-squares-of-top-two 3 4 2) 25)
(check-equal? (sum-of-squares-of-top-two 5 3 4) 41)
