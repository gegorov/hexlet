; Russian version follows / Русская версия ниже
;
; Implement the Ackermann's function A. It takes two parameters, x and y, and works as follows:
;
; if y = 0, then it returns 0;
; if x = 0, then it returns 2*y;
; if y = 1, then it returns 2;
; else, it calls itself (function A) with x = x-1 and y = A ( x, (y - 1) )
; Реализуйте функцию Аккермана A. Она принимает два параметра, x и y, и вычисляется следующим образом:
;
; если y = 0, тогда она возвращает 0;
; если x = 0, тогда она возвращает 2*y;
; если y = 1, тогда она возвращает 2;
; иначе, она вызывает саму себя (фукнцию A) с параметрами x = x-1 и y = A ( x, (y - 1) ).

#lang racket/base

(require rackunit)

;; BEGIN (write your solution here)
(define (A x y)
    (cond
          ((= y 0) 0)
          ((= x 0) (* 2 y))
          ((= y 1) 2)
          (else (A (- x 1)
                   (A x
                      (- y 1))))))
;; END

(check-equal? (A 1 10) 1024)
(check-equal? (A 2 4) 65536)
(check-equal? (A 3 3) 65536)
