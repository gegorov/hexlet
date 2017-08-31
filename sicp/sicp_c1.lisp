(define (square x)
  (* x x))
(define (sum-of-squares x y)
  (+ (square x) (square y)))
(define (f a)
  (sum-of-squares (+ a 1) (* a 2)))

(define (abs x)
  (cond ((> x 0) x) ; special form - case analysys for conditional cases
    ((= x 0) 0)
    ((< x 0) (- x))))


;1.1.7. вычисление квадратного корня методом Ньютона

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

;1.2.1 линейные рекурсия и итерация. вычисление факториала

(define (factorial n)
  (if (= n 1)
    1
    (* n (factorial(- n 1)))))


(define (iFact n)
  (define (iter accum counter)
    (if (< n counter)
      accum
      (iter (* accum counter)
            (+ counter 1))))
  (iter 1 1))

; Древовидная рекурсия,  последовательность чисел Фибоначчи

(define (fib n)
  (cond
    ((= n 0) 0)
    ((= n 1) 1)
    (else (+ (fib (- n 1))
             (fib (- n 2))))))

(define (fib2 n)
  (define (fib-iter a b counter)
    (if (= counter 0)
        b
        (fib-iter (+ a b) a (- counter 1))))
  (fib-iter 1 0 n))

; Размен монет

(define (count-change amount)
  (cc amount 5))

(define (cc amount kinds-of-coins)
  (cond
    ((= amount 0) 1)
    ((or (< amount 0) (= kinds-of-coins 0)) 0)
    (else (+ (cc amount (- kinds-of-coins 1))
             (cc (- amount (first-denomination kinds-of-coins))
                 kinds-of-coins)))))

(define (first-denomination kinds-of-coins)
  (cond
    ((= kinds-of-coins 1) 1)
    ((= kinds-of-coins 2) 5)
    ((= kinds-of-coins 3) 10)
    ((= kinds-of-coins 4) 25)
    ((= kinds-of-coins 5) 50)))
