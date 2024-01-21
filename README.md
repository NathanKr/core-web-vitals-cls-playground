<h2>Motication</h2>
<p>Cumulative layout shift is a core web vitals metric and is part of page speed insight performance score. In particular image might cause layout shift when its width\height is not known to the browser before the page is rendered</p>

<h2>Leading questions</h2>
So here are few questions that answers can shed light on this metric
<ol>
<li>how to create a page with cls problem using image</li>
<li>how to solve it by providing width and height ==> brut force might not always be enough</li>
<li>is it possible to solve this by providing the image aspect ratio instead of width and height</li>
<li>does Image component of next.js make it easy to solve this problem</li>
</ol>

<h2>Limitation</h2>
If the image is not bound in width \ height by its parent then this is non issue - simply provide width \ height to the img element. More interesting probem is when the parent has pre defined width ==> brut force using the img width \ height may solve the cls problem but cause the image to look distorted thus reduce the user experience and may reduce the page speed insight 'best practice' score