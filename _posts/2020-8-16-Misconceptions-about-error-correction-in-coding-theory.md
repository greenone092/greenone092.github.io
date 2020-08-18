---
layout: page
title:  "Misconceptions about error correction in coding theory - Part 1"
date:   2020-08-16 20:43:00 +0800
published: true
---

_This is an unfinished series_ 

In this series, we are going to discuss some of the stuff I wish I had known when I started learning coding theory. I think it's very easy in mathematics to get lost in the notations and definitions early on, and end up forming some major misconceptions. In Part 1, we will use a simple example. However, please note that this post's content is only applicable to the very basics of coding theory. 

I recommend you to read this post after you've finished your first chapter in coding theory. I've stripped down most of the jargon (i.e. Hamming distance) in order to express my points as concisely as possible, whilst keeping the content logically self-contained. 

## The triple repetition code

Let $$M$$ be the set of all possible messages you would like to send through a digital channel. For example, let's assume you'd like to send 0 or 1 (a bit) through the channel. Then $$M = \{0 , 1\} = Z_2$$ [^Z_2]

Sadly, the channel is noisy and could sometimes flip the bits that you are sending. To remedy this, you decide to repeat every bit by 3 times. In essence, you are creating an injective projection $$C$$, 

$$ C : M \rightarrow Z_2^3 $$

where

$$ 
\begin{aligned} 
C : &0 \rightarrow (0, 0, 0) \\ 
&1 \rightarrow (1, 1, 1) 
\end{aligned}
$$

$$C$$ is called the **encoding function** . 

Let's say some $$m$$ in $$M$$ went through the channel, and the reciever recieved $$C(m) + e$$ where e is some error[^error]. Now we need a surjective **decoding function** $$D$$ where 

$$ D : Z_2^3 \rightarrow M$$

Obviously, it would be nice if $$D$$ could project all $$C(m) + e$$ to $$m$$ accurately. However in reality things are not so nice. For this case, the best decoding function is the one which decodes to a bit if that bit appears more often in $$C(m) + e$$, i.e.

$$ 
\begin{aligned} 
D : &(0, 0, 0), (1, 0, 0), (0, 1, 0), (0, 0, 1) \rightarrow 0 \\ 
&(1, 1, 1), (0, 1, 1), (1, 0, 1), (1, 1, 0) \rightarrow 1 
\end{aligned}
$$

For this particular decoding function, we are using the assumption that it's more likely there's only 1 non-zero bit in the error instead of 2.

Hence, it could be seen that $$ D(C(m)+e)) = m$$ for all $$m$$ if and only if the number of non-zero bits for all $$e$$ is smaller or equal to 1. We call this code to be 1-error correcting.

Also note that some **errors can go undetected**. As if $$e = (1, 1, 1) $$, $$C(m) + e$$ will be equal to either $$(0, 0, 0)$$ or $$(1, 1, 1)$$ and no errors will be detected. Hence, $$e$$ could only have a maximum of 2 non-zero bits. As such, we call this code to be 2-error detecting. 

After this rundown, there are a few details that needs to be stressed.

# Error correction is done constantly

One may assume that we first "detect" an error, then we "correct" the error. However if you look closely at the decoding function, all we really did was to assume what the error was going to be. 

More importantly, we apply the decoding function to **every** encoded message that we receive. Even if we know that the channel is perfect and free of any noise, we still have to apply the decoding function. In a way, error correction is not something that we do only when we "know" or "see" that something's wrong. It's not an emergency button.

# The code is independent of the noise of the channel

Throughout coding theory, we are never explicitly concerned about the channel noise level. In a way, coding theory always works around an artificial assumption. For this example, this code works perfectly when it's assumed that there's a maximum of 1 non-zero bit in the error for every message (3 bits). Whether that condition is actually satisified or how we detect the channel noise level is beyond the code. 

# The decoding function is a function.

Every input is associated with an output. In essence, no matter how error-prone the received code might seem to be, the decoding function will still try to find the most probable code that could've possibly generataed the received code. You may wonder that in more complicated codes, it's very likely the decoded message is wrong, why do we still bother decoding it even though the chances are so low? The reason is that it might not be possible to ask for any form of external verification. Say that you are trying to play a DVD or read a QR code offline. At that moment, you wouldn't be able to immediatedly ask the original author for verification, all you could do is to decode it to the best of your abilities and take the chance. 

# You can correct errors wrongly.

While this sentence seems counter-intuitive, it is a consequence of the decoding function being a function. For example, if $$(1, 0, 1)$$ is received, while the decoding function would think that $$C(m) = (1, 1, 1)$$ , $$m = 1$$ and  $$e = (0, 1, 0)$$, it's entirely possible that $$C(m) = (0, 0, 0)$$, $$m = 0$$ and  $$e = (1, 0, 1) $$. It's just less likely that that is the case. Just remember that error correction is never "perfect" without any assumptions.

You could also observe this phenonmon more trivially when $$e = (1, 1, 1)$$ as mentioned earlier.

[^Z_2]: $$Z_2$$ could also be written as $$Z/2$$ or $$GF(2)$$. Remember that $$1 + 1 = 0$$. Here's the wikipedia page about this [field](https://en.wikipedia.org/wiki/GF(2)).

[^error]: There are a few assumptions about the error itself. Firstly, the probablity of any bit being flipped is equal, there won't exist an ith bit where it's more likely to get flipped. Secondly, the more non-zero bits the error has, the less likely the error would occur. 