<h2>Motivation</h2>
<p>Cumulative layout shift is a core web vitals metric and is part of page speed insight performance score. In particular image might cause layout shift when its width\height is not known to the browser before the page is rendered</p>

<h2>Leading questions</h2>
So here are few questions that answers can shed light on this metric
<ol>
<li>how to create a page with cls problem using image</li>
<li>how to solve it by providing width and height ==> brut force might not always be enough</li>
<li>is it possible to solve this by providing the image aspect ratio instead of width and height</li>
<li>how to solve the use case of img width smaller than parent without picture distortion</li>
<li>does Image component of next.js make it easy to solve this problem</li>
</ol>

<h2>Limitation</h2>
If the image is not bound in width \ height by its parent then this is non issue - simply provide width \ height to the img element. More interesting probem is when the parent has pre defined width ==> brut force using the img width \ height may solve the cls problem but cause the image to be distorted thus reduce the user experience and may reduce the page speed insight 'best practice' score

<h2>Solution</h2>

Use img element

```tsx
<div
  style={{
    width: `${parentWidthPx}px`,
    position: "relative",
    aspectRatio: `${aspectRatio} / 1`,
  }}
>
  <img
    style={{ width: "100%"  }}
    src={`/${imgSrc}`}
    alt={title}
  />
</div>
```

Use next.js Image

```tsx
<div
  style={{
    width: `${parentWidthPx}px`,
    position: "relative",
    aspectRatio: `${aspectRatio} / 1`,
  }}
>
  <Image src={`/${imgSrc}`} alt={title} fill={true} />
</div>
```

<h2>Conclusions</h2>
<ul>
<li>using the css aspect-ratio property is realy helpfull when you want to keep the image aspect ratio and eliminate layout shift problem. Both will improve the UI experience </li>
<li>You need to apply the aspect-ratio on the image bounding element from one side and instruct the image to fill its parent width on the other side. use 100% for html img and fill true for next.js Image component</li>
<li>using the above technique allow the browser to know the bounding rect before rendering and this elimeinate layput shift ==> CLS is zero in tems of core web vitals</li>
<li>altough using aspect-ratio and img we made CLS=0 , this is not true for LCP. The LCP is smaller when you replace html img with next.js Image. You may check the reasons by looking on the errors in page speed insight . one possible reason is the fact that next.js serve images in 'Image formats like WebP and AVIF often provide better compression than PNG or JPEG'. In this respect Image component of next.js is better than img html element</li>
</ul>
