---
layout: page
title:  "The dot product over quotient ring of integers modulo m"
date:   2020-08-17 10:00:00 +0800
published: false
---

In coding theory especially, the definition of the dot product in euclidean space is directly borrowed to vector spaces over finite fields. However, many intuitive properties of the dot product in the euclidean space is no longer satisified. In reality, I'm actually discussing about the theory of scalar product, however I will only focus on the dot product. This post also assumes knowledge of vector spaces / subspaces and basic properties of the dot product over $$R^n$$. 

Let us begin with the definition of the dot product.

**Definition (Dot product)** - The dot product of two vectors $$u = (u_1, u_2, ..., u_n)$$ and $$v = (v_1, v_2 ..., v_n)$$ is defined as 

$$u \cdot v = u_1v_1 + u_2v_2 + ... u_nv_n$$

Using this definition in both $$R^n$$ and $$Z_m^n$$ will lead to different propeties. For simplicity's sake, I shall use $$Z_2^n$$ in the following.

## Simmilarities

Both of these dot products are scalar products. They both satisify 

$$ \forall u, \forall v, \forall x \in F $$[^field]

1. $$ u \cdot v = v \cdot u $$ 

2. $$ u \cdot (v + w) = u \cdot v + u \cdot v$$ 
 
3. $$(xu) \cdot v = x (u \cdot v)  = u \cdot (xv)$$ 


## Differences

# Degeneracy and positive-definiteness

**Definition (Non-degenerate)** A scalar product is said to be non-degenerate if for all $$v \in 


[^field]: If we are talking about $$R^n$$ , $$F = R$$. If we are talking about $$Z_2^n$$, $$F = Z_2$$