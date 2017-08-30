(define (abs x)
  (if (< x 0) (- x) x))

(define (>= x y)
  (or (> x y) (= x y)))
(define (<= x y)
  (not (> x y)))

(define (sqrt-iter guess x)
       (if (good-enough? guess x) guess
         (sqrt-iter (improve guess x) x)))
(define (improve guess x)
  (average guess (/ x guess)))
(define (average a b)
  (/ (+ a b) 2))
(define (good-enough? guess x)
  (< (abs (- (square guess) x)) 0.01))
(define (square x)
  (* x x))
