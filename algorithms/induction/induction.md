# Induction Step
> Mathematical induction is a mathematical proof technique. It is essentially used to prove that a statement P(n) holds for every natural number n = 0, 1, 2, 3, . . . ; that is, the overall statement is a sequence of infinitely many cases P(0), P(1), P(2), P(3), . . . . Informal metaphors help to explain this technique, such as falling dominoes or climbing a ladder:
>
> - [Mathematical induction - wikipedia](https://en.wikipedia.org/wiki/Mathematical_induction)

## Explanations

induction step is logical estimation technique. 

Fibonacci number is good example.

Base case P(0) is most important.

if P(0) is true and P(1), P(2) is true, then assume P(n) -> P(n+1) is true.  
this is induction step 

```
F(0) = 0
F(1) = 1,
F(2) = F(1) + F(0)

... 

F(n) = F(n-1) + F(n-2)

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
```


### JavaScript
```javascript
function fibonacciBasic(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  
  return fibonacciBasic(n - 1) + fibonacciBasic(n - 2);
}
```


### References
* [Lec 2 | MIT 6.042J Mathematics for Computer Science, Fall 2010](https://youtu.be/z8HKWUWS-lA)

* [Coursera - Mathematical Thinking in Computer Science Week 3](https://www.coursera.org/learn/what-is-a-proof/lecture/eKLTx/introduction-lines-and-triangles-problem)

* [Brilliant - Induction](https://brilliant.org/wiki/induction/#induction-summation)

* [Standford - edu](https://web.stanford.edu/class/archive/cs/cs103/cs103.1126/lectures/03/Slides03.pdf)

* [khan academy - Proof of finite arithmetic series formula by induction](https://www.khanacademy.org/math/algebra-home/alg-series-and-induction/alg-induction/v/proof-by-induction)
