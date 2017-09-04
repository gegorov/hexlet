; упражнение 1.17

; (define (fast-exp b n)
;   (define (even? x)
;     (= (remainder n 2) 0))
;   (define (square x)
;     (* x x))
;   (cond
;     ((= n 0) 1)
;     ((even? n) (square (fast-exp b (/ n 2))))
;     (else (* b (fast-exp b (- n 1))))))



(define (* a b)
  (if (= b 0)
    0
    (+ a (* a ( - b 1)))))

(define (fast-* a b)
  (cond
    ((= b 0) 0)
    ((= b 1) b)
    ((even? b) (double (fast-* a (halve b))))
    (else (+ a (fast-* a (- b 1))))))
