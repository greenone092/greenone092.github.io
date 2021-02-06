---
layout: page
title:  "Understanding the standard matrix of projection"
date:   2020-09-5 21:00:00 +0800
published: true
---

#### Motivatation

The standard matrix of projection is a very useful way of describing projection of a vector to another vector subspace. I will try to explain the rather convulted definition as simple as possible.

#### Definition

Let $$V$$ be a subspace of $$R^n$$. Let $${v_1, v_2, ... v_k}$$ be a basis for $$V$$ and $$A$$ be a matrix whose columns are $$v_1, v_2, ... v_k$$. Then $$B$$ is the standard matrix of projection

$$ B = A(A^TA)^{-1}A^T $$

Note that $$A$$ may not be a square matrix. Hence you couldn't immediatedly expand the paranthesis and conclude that  $$B =  A(A^TA)^{-1}A^T = AA^{-1} A^{ T^{-1} } A^T = I$$ (If $$A$$ reallly was a square matrix, you would reach the conclusion that $$V = R^n$$ and hence the projection of a vector would be the vector itself, leading to $$B = I$$).

However, $$A^TA$$ is always a square matrix. It's invertiability will be discussed later.

#### What does it mean?

Let's take a step back. If $$B$$ really was the standard matarix of projection. For any $$v \in R^n$$, let $$w$$ be its projection on $$V$$. Then $$u = v - w \perp V$$ by definition. Hence, 

$$ Bv = B(w+u) = Bw + Bu = w + 0 = w $$

So if we really wanted to prove that the above definition works. We just need to prove that $$Bw = w$$ if $$w \in V$$ and $$Bu = 0$$ if $$u \perp V$$.

#### $$Bw = w$$?

Since $$w \in V$$. It means that $$w$$ could be expressed as a linear combination of all the basis vectors of $$V$$. Hence $$w = Ay$$ for some $$y$$. Considering $$Bw$$.

$$Bw = A(A^TA)^{-1}A^TAy = Ay = w$$

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

#### Does $$(A^TA)^{-1}$$ always exist?

This is the remaining technical issue that needs to be resolved. As otherwise $$B$$ will not be well-defined. For any matrix $$M$$, $$M$$ is invertible $$\Leftrightarrow$$ $$\det(M)\neq0$$ $$\Leftrightarrow$$ $$Mx = 0$$ if and only if $$x = 0$$. Considering $$A^TAx=0$$

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

Hence $$A^TAx$$ is invertible and B is well defined.

#### Conclusions

A good way to think about it is to start with the condition $$Bu = 0$$. You would find that the easiest way to deal with it is to let $$ B = .... A^T $$ so that the condition would be satisified no matter what.

Then you could think about $$ w = Ay $$ and try to think of a $$B$$ such that $$ Bw = ... A^TAy = Ay $$. The easiest way to make a functioning $$B$$ would be to apply the inverse of $$A^TA$$, then apply $$A$$ again. [^choice] Hence you would find that $$ B = A(A^TA)^{-1}A^T$$.

Hopefully this mnemonic would make remembering it a bit easier.

[^choice]: Recall $$A$$ / $$A^T$$ may not be a square matrix, hence you may not be able to take the inverse of $$A^T$$ and make $$B = A^{ T^{-1} }A^T = I$$