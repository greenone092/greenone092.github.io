---
layout: page
title:  "Understanding the standard matrix of projection"
date:   2020-09-5 21:00:00 +0800
published: false
---

#### Motivatation

The standard matrix of projection is a very useful way of describing projection of a vector to another vector subspace. I will try to explain the rather convulted definition as simple as possible.

#### Definition

Let $$V$$ be a $$k$$-dimensional subspace of $$R^n$$. Let $${v_1, v_2, ... v_k}$$ be a basis for $$V$$. We could immediatedly observe that for any vector in $$V$$, it could be expressed as $$Au$$ , where $$A$$ is a matrix with column vectors $$v_1, v_2, ... v_k$$ and $$u$$ is any vector with $$k$$ components. 

Under this defintion, the standard matrix of projection $$B$$ could be defined as

$$ B = A(A^TA)^{-1}A^T $$

such that $$Bv$$ for any $$v \in R^n$$ is the projected vector. 

You may notice that we must show that $$(A^TA)^{-1}$$ in order for the definition to be well defined.

#### Does $$(A^TA)^{-1}$$ always exist?

For any matrix $$M$$, an equivalent statement to $M$ being invertible is that $$Mx = 0$$ if and only if $$x = 0$$

Letting $$M$$ be $$A^TA$$, and considering $$A^TAx=0$$,

$$
\begin{aligned}
A^TAx &= 0 \\
x^TA^TAx &= 0 \\
(Ax)^T(Ax) &= 0 \\
|(Ax)|^2 &= 0 \\
Ax &= 0 \\
x_1v_1 + x_2v_2 + ... x_kv_k &= 0  \\
x_1 = x_2 = ... = x_k &= 0  
\end{aligned}
$$

Note that $$x_1, x_2 ... x_k = 0$$ because basis vectors, $$v_1, v_2 ... v_k$$, are linearly independent. 

Hence $$A^TAx$$ is invertible and B is well defined.

#### What does it mean?

Let's take a step back. If $$B$$ really was the standard matarix of projection. For any $$v \in R^n$$, let $$w = Bv$$ be its projection on $$V$$. Let $$u = v - w$$. It could be seen that $$u \perp V$$. Then by definition,  

$$Bv = B(w+u) = Bw + Bu$$

So if we really wanted to prove that $$Bv = w$$. We have to prove that $$Bw = w$$ if $$w \in V$$ and that $$Bu = 0$$ if $$u \perp V$$.

#### $$Bw = w$$?

Since $$w \in V$$. It means that $$w$$ could be expressed as a linear combination of all the basis vectors of $$V$$. Hence $$w = Ay$$ for some $$y$$. Considering $$Bw$$,

$$
\begin{aligned}
Bw &= A(A^TA)^{-1}A^TAy \\
&= A(A^TA)^{-1}(A^TA)y \\
&= Ay \\
&= w
\end{aligned}
$$



#### $$Bu = 0$$?

Let $$A^n$$ denote the nth column vector of $$A$$. Consider $$A^Tu$$. As $$u$$ is perpendicular to all the basis vectors of $$V$$. The vector $$A^Tu$$ would be

$$

\begin{bmatrix}
A^1 \cdot u \\
A^2 \cdot u \\
... \\
A^n \cdot u \\
\end{bmatrix}

=

\begin{bmatrix}
0 \\
0 \\
... \\
0 \\
\end{bmatrix}

=0

$$

Hence, $$Bu = A(A^TA)^{-1}A^Tu = A(A^TA)^{-1}0 = 0$$

#### Conclusions

A good way to think about it is to start with the condition $$Bu = 0$$. You would find that the easiest way to deal with it is to let $$ B = .... A^T $$ so that the condition would be satisified no matter what.

Then you could think about $$ w = Ay $$ and try to think of a $$B$$ such that $$ Bw = ... A^TAy = Ay $$. The easiest way to make a functioning $$B$$ would be to apply the inverse of $$A^TA$$, then apply $$A$$ again. [^choice] Hence you would find that $$ B = A(A^TA)^{-1}A^T$$.

Hopefully this mnemonic would make remembering it a bit easier.

[^choice]: Recall $$A$$ / $$A^T$$ may not be a square matrix, hence you may not be able to take the inverse of $$A^T$$. In fact, if $$A$$ is a square matrix, it means that $$V$$ is equal to $$R^n$$, hence $$B = I$$