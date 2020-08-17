---
layout: page
title:  "The dot product over quotient ring of integers modulo m"
date:   2020-08-17 10:00:00 +0800
published: true
---

In coding theory especially, the definition of the dot product in euclidean space is directly borrowed to vector spaces over finite fields. However, many intuitive properties of the dot product in the euclidean space is no longer satisified. This post also assumes knowledge of vector spaces / subspaces and basic properties of the dot product over $$R^n$$. 

Let us begin with the definition of the dot product.

**Definition (Dot product)** _The dot product of two vectors $$u = (u_1, u_2, ..., u_n)$$ and $$v = (v_1, v_2 ..., v_n)$$ is defined as_  $$u \cdot v = u_1v_1 + u_2v_2 + ... u_nv_n$$

Using this dot product on both $$R^n$$ and $$Z_m^n$$ will lead to different propeties. The value of m does not affect the validity of the theorems, I shall use $$Z_2^n$$ for any examples.

## **Simmilarities**

# Both are scalar products

The dot product on both vector spaces are scalar products. They both satisify 

$$ \forall u, \forall v, \forall x \in F $$[^field]

1. $$ u \cdot v = v \cdot u $$ 

2. $$ u \cdot (v + w) = u \cdot v + u \cdot v$$ 
 
3. $$(xu) \cdot v = x (u \cdot v)  = u \cdot (xv)$$ 

# Both are non-degenerate

**Definition (non-degenerate)** _If the condition below is satisified, the dot product is non degenerate: If $$v$$ is an element of the vector space, and $$v \cdot w = 0$$ for all $$w \in V$$, then $$v = 0$$_

**Theorem** _The dot product on both vector spaces are non-degenerate_

Proof: Considering any non-zero vector $$v = (v_1, v_2, ... v_n)$$, there must exist some $$v_i \neq 0$$. If we let $$w$$ to be (0, 0, ... 1, 0, ...) where it has a 1 in the ith position, $$ v \cdot w \neq 0$$. Hence $$v$$ must be the $$0$$ vector in order to satisify the condition.

**Theorem** _Let $$V$$ be a finite dimensional vector space with a non-degenerate scalar product. Let $$W$$ be a subapce. Let $$W^\perp$$ be the subspace of V consisting of all elements $$ v \in V$$ such that $$v \cdot w = 0$$ for all $$w \in W$$. Then_

$$ \dim W + \dim W^\perp = \dim V$$

This is the major conseuquence of non-degenrenacy which proof will be ommitted. Sadly, most of their simmilarities end here. It's important to note that this theorem does **not** imply $$W \bigoplus W^\perp = V$$. 

## **Differences**

# The dot product on $$R^n$$ is positive definite, but not on $$Z_2^n$$

**Definition (Positive definite)** _The scalar product is called to be positive definite if $$v\cdot v \geq 0 $$ for all $$v\in v$$, and that $$v\cdot v > 0$$ if $$v\neq 0$$_

This is true on $$R^n$$ but false on $$Z_2^n$$. For example in $$Z_2^2$$, $$(1, 1) \cdot (1, 1) = 0$$.

**Theorem** _Let $$R^n$$ be a vector space with a positive definite scalar product, Let $$W$$ be a subspace of $$V$$. Then $$W \bigoplus W^\perp = V$$_

This is the most important consequence of positive definiteness which proof will be ommitted. 

# Projection could always be done using the dot product on $$R^n$$ but not on $$Z_2^n$$

This is another consequence of the positive definiteness of the dot product. 

Recall the formula of the vector projection of $$a$$ onto $$b$$:

$$ \frac{a \cdot b}{b \cdot b} b$$

If the dot product is not positive definite, $$b \cdot b$$ may be equal to $$0$$. As such, it would be impossible to project any vector onto $$b$$.

Furthermore, as the norm, $$\sqrt{v \cdot v}$$,  may be 0 for some non-zero vectors. Unit vectors does not exist for all non-zero vectors in $$Z^n_m$$.

## **Examples**

Consider $$Z^2_2$$. Let W be a subspace of $$Z_2^2$$ where $$W = 
\{(0, 0), (1, 1)\}$$. You could observe that it's orthogonal subspace is actually itself. Leading to an equation you would never see using the dot product on Euclidean space, $$W = W^\perp$$. It's also obvious that $$ V \neq W \bigoplus W^\perp$$ as $$ V \neq W$$. However, $$\dim W + \dim W^\perp = \dim V$$ still holds true as $$ 1 + 1 = 2$$.

Considering projection, it's also impossible to project any vector onto $$(1, 1)$$ over $Z^2_2$. For example, if you project $$(1, 0)$$ onto $$(1, 1)$$, you'd get $$(\frac{1}{2},\frac{1}{2})$$. However the inverse of $$2$$ doesn't exist in $$Z_2$$. 




[^field]: If we are talking about $$R^n$$ , $$F = R$$. If we are talking about $$Z_2^n$$, $$F = Z_2$$