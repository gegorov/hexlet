; Зарефаторенная задача 1.8. все внутрях и недоступно во внешнем окружении
(define (qbrt x)
  (define (square x)
    (* x x))
  (define (qbrt-iter guess previous-guess x)
    (define (good-enough? guess previous-guess)
      (< (abs(/ (- guess previous-guess) previous-guess)) 0.001))
    (define (improve guess x)
      (/
       (+
        (/ x (square guess))
        (* 2 guess))
       3))
    (if (good-enough? guess previous-guess)
      guess
      (qbrt-iter (improve guess x) guess x)))
  (qbrt-iter 1.0 0.5 x))
