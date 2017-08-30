; Упражнение 1.7.
(define (sqrt-iter guess x)
  (if (good-enough? guess x)
    guess
    (sqrt-iter (improve guess x)
               x)))

(define (improve guess x)
  (average guess (/ x guess)))

(define (average x y)
  (/ (+ x y) 2))

(define (good-enough? guess x)
  (< (abs (- (square guess) x)) 0.001))

(define (sqrt x)
  (sqrt-iter 1.0 x))

(define (abs x)
  (if (< x 0) (- x) x))
(define (square x)
  (* x x))

(define (better-good-enough? guess previous-guess)
  (< (abs(/ (- guess previous-guess) previous-guess)) 0.001))

(define (better-sqrt-iter guess previous-guess x)
  (if (better-good-enough? guess previous-guess)
    guess
    (better-sqrt-iter (improve guess x) guess x)))
(define (better-sqrt x)
  (better-sqrt-iter 1.0 0.5 x))
