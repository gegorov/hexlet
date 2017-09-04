; 1. Double
; В файле double.rkt создайте процедуру double, которая берет процедуру,
; принимающую одно значение, и возвращает результат выполнения этой процедуры
; дважды. Например, если inc это процедура, которая добавляем 1 к аргументу,
; тогда вызов (double inc) должен вернуть процедуру, которая добавляет 2 к
; аргументу.
#lang racket/base

(require rackunit)

(define (square x) (* x x))
(define (inc x) (+ x 1))

;; BEGIN (write your solution here)
(define (double f)
    (lambda (x) (f (f x))))
;; END

(check-equal? ((double inc) 1) 3)
(check-equal? ((double inc) 15) 17)
(check-equal? ((double square) 2) 16)
(check-equal? ((double square) 3) 81)
