

; Упражнение 1.8. Метод Ньютона для кубический корней
(define (qbrt-iter guess previous-guess x)
  (if (good-enough? guess previous-guess)
    guess
    (qbrt-iter (improve guess x) guess x)))

(define (good-enough? guess previous-guess)
  (< (abs(/ (- guess previous-guess) previous-guess)) 0.001))

(define (cube x)
  (* x x x))

(define (square x)
  (* x x))

(define (improve guess x)
  (/
   (+
    (/ x (square guess))
    (* 2 guess))
   3))
(define (qbrt x)
  (qbrt-iter 1.0 0.5 x))
