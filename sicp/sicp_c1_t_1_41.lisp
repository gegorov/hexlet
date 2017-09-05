; упражнение 1.41
(define (double f)
  (lambda (x) (f(f x))))

(define (inc x)
  (+ 1 x))

((double inc) 1) ;3

(((double (double double)) inc) 5) ;21
