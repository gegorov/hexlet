; chapter 2
;constructor for pairs
(define (make-rat n d)
  (cons n d))
; левый элемент пары
(define (numer x)
  (car x))
;правый элемент пары
(define (denom x)
  (cdr x))

(define (add-rat x y)
  (make-rat (+ (* (numer x) (denom y))
               (* (numer y) (denom x)))
            (* (denom x) (denom y))))

(define (sub-rat x y))
