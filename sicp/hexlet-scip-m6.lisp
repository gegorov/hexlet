; 1. Функция F
; Функция f задана таким образом:
;
; f(n) = n if n < 3, and f(n) = f(n - 1) + 2f(n - 2) + 3f(n - 3) if n >= 3.
;
; В файле function_f.rkt создайте процедуру f, которая вычисляет f с помощью рекурсивного процесса или итеративного процесса.

#lang racket/base

(require rackunit)

;; BEGIN (write your solution here)
; рекурсивный вызов
(define (f n)
  (cond ((< n 3) n)
        (else (+ (f (- n 1))
                 (* 2 (f (- n 2)))
                 (* 3 (f (- n 3)))))))

; итеративный процесс
(define (fi n)
  (define (f-iter a b c count)
    (if (= count 0)
      c
      (f-iter (+ a (* 2 b) (* 3 c)) a b (- count 1))))
  (f-iter 2 1 0 n))



;; END

(check-equal? (f 1) 1)
(check-equal? (f 2) 2)
(check-equal? (f 3) 4)
(check-equal? (f 4) 11)
(check-equal? (f 5) 25)
(check-equal? (f 6) 59)
(check-equal? (f 7) 142)
