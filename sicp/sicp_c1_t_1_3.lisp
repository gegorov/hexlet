(define (square a)
  (* a a))
(define (sum-of-squares a b)
  (+ (square a) (square b)))
(define (myproc a b c)
  (cond
    ((and (> a c) (> b c)) (sum-of-squares a b))
    ((and (> a b) (> c b)) (sum-of-squares a c))
    (else (sum-of-squares b c))))
    
