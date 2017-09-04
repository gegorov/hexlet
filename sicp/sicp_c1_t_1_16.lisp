; (define (ffpow b n)
;   (define (even? x)
;     (= (remainder n 2) 0))
;   (define (square x)
;     (* x x))
;   (cond
;     ((= n 0) 1)
;     ((even? n) (square (fast-exp b (/ n 2))))
;     (else (* b (fast-exp b (- n 1))))))

; упражнение 1.16
(define (fast-expt b n)
  (fast-expt-iter 1 b n))

(define (fast-expt-iter a b n)
  (if (= n 0)
    a
    (if (even? n)
      (fast-expt-iter a (square b) (/ n 2))
      (fast-expt-iter (* a b) b (- n 1)))))


(define (even? n)
  (= (remainder n 2) 0))
(define (square x)
  (* x x))
